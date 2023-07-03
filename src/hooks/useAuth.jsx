import { useQuery, useQueryClient } from 'react-query'
import { destroySession, profile } from '../api/requests/auth'

function useAuth() {
    const queryClient = useQueryClient()
    const auth = useQuery('auth', profile, {
        cacheTime: Infinity,
        staleTime: Infinity,
        enabled: false,
        onError: err => {
            if (err.status === 401) destroySession()
        },
    })

    const user = queryClient.getQueryData('auth')
    const setUser = data => queryClient.setQueryData('auth', data)

    const isAuthenticating =
        auth.isLoading || auth.isIdle ? true : auth.isFetched ? false : true
    const isAuthenticated = auth.data ? true : false

    return {
        auth,
        user,
        setUser,
        isAuthenticated,
        isAuthenticating,
        authenticate: auth.refetch,
    }
}

export default useAuth
