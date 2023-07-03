import React, { useEffect } from 'react'
import Router from './Router/Router'
import useAuth from './hooks/useAuth'

function App() {
    const { authenticate } = useAuth()

    useEffect(() => {
        authenticate()
    }, [])

    return <Router />
}

export default App
