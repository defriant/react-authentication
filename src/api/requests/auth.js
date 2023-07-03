import Request, { session } from '../config'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const login = async credential => {
    try {
        const res = await Request.post('/auth/login', {
            ...credential,
            device_name: 'Afif PC',
        })
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const setSession = tokenable => {
    cookies.set('_t', tokenable.token + '.' + tokenable.token_expires_at, {
        path: '/',
        expires: new Date(tokenable.session_expires_at),
    })
    cookies.set('_s', tokenable.secret, {
        path: '/',
        expires: new Date(tokenable.session_expires_at),
    })
}

export const destroySession = () => {
    cookies.remove('_t', { path: '/' })
    cookies.remove('_s', { path: '/' })
}

export const profile = async () => {
    try {
        if (session.token() && session.secret()) {
            const res = await Request.get('/profile', {
                headers: {
                    Authorization: `Bearer ${session.token()}`,
                },
            })

            return res.data.data
        }

        destroySession()
        return undefined
    } catch (error) {
        throw error.response
    }
}
