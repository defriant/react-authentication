import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
export const session = {
    token: () => cookies.get('_t')?.split('.')[0],
    token_expires_at: () =>
        cookies.get('_t')?.split('.')[1]
            ? parseInt(cookies.get('_t')?.split('.')[1])
            : undefined,
    secret: () => cookies.get('_s'),
}

const Request = axios.create({
    baseURL: 'https://api-dev.lancong.co.id/v1/vendor',
    // baseURL: 'http://localhost:8001/v1/vendor',
})

export default Request
