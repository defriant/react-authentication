import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import PageLoader from '../components/PageLoader'
import { Navigate, Outlet } from 'react-router-dom'
import { ROUTE_PATH } from './path'

export function GuestOutlet() {
    const { isAuthenticating, isAuthenticated } = useAuth()

    if (isAuthenticating) return <PageLoader />
    if (isAuthenticated) return <Navigate to={ROUTE_PATH.dashboard} />

    return <Outlet />
}

export function PrivateOutlet() {
    const { isAuthenticating, isAuthenticated } = useAuth()

    if (isAuthenticating) return <PageLoader />
    if (!isAuthenticated) return <Navigate to={ROUTE_PATH.login} />

    return <Outlet />
}
