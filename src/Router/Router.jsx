import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTE_PATH } from './path'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import { GuestOutlet, PrivateOutlet } from './Outlet'

function Router() {
    return (
        <Routes>
            <Route path={ROUTE_PATH.index} element={<Home />} />

            <Route element={<GuestOutlet />}>
                <Route path={ROUTE_PATH.login} element={<Login />} />
            </Route>

            <Route element={<PrivateOutlet />}>
                <Route path={ROUTE_PATH.dashboard} element={<Dashboard />} />
                <Route path={ROUTE_PATH.profile} element={<Profile />} />
            </Route>
        </Routes>
    )
}

export default Router
