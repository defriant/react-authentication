import {
    Box,
    Button,
    Center,
    Container,
    FormControl,
    FormLabel,
    Input,
    Link,
    Stack,
    useToast,
} from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import React, { useState } from 'react'
import Panel from '../components/Panel'
import { useMutation } from 'react-query'
import { login, setSession } from '../api/requests/auth'
import useAuth from '../hooks/useAuth'
import { ROUTE_PATH } from '../Router/path'
import { session } from '../api/config'

function Login() {
    const [credential, setCredential] = useState({
        email: '',
        password: '',
    })
    const { setUser, isAuthenticated } = useAuth()
    const toast = useToast()

    const handleLogin = useMutation('login', data => login(data), {
        onSuccess: res => {
            console.log(res)
            setUser(res.data.vendor)
            setSession(res.data.tokenable)
        },
        onError: err =>
            toast({
                description: err.message,
                position: 'top',
                isClosable: true,
                status: 'error',
            }),
    })

    return (
        <>
            <Center w='100vw' h='100vh'>
                <Container maxW='container.sm'>
                    <Panel>
                        <Stack spacing={5}>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type='email'
                                    value={credential.email}
                                    onChange={e =>
                                        setCredential(prev => ({
                                            ...prev,
                                            email: e.target.value,
                                        }))
                                    }
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type='password'
                                    value={credential.password}
                                    onChange={e =>
                                        setCredential(prev => ({
                                            ...prev,
                                            password: e.target.value,
                                        }))
                                    }
                                />
                            </FormControl>
                            <Button
                                colorScheme='blue'
                                onClick={() => handleLogin.mutate(credential)}
                                isLoading={handleLogin.isLoading}
                            >
                                Login
                            </Button>
                            <Link
                                as={ReactLink}
                                to={ROUTE_PATH.index}
                                color='blue'
                            >
                                Home
                            </Link>
                            <Link
                                as={ReactLink}
                                to={ROUTE_PATH.dashboard}
                                color='blue'
                            >
                                Dashboard
                            </Link>
                            <Button
                                onClick={() => console.log(session.secret())}
                            >
                                session
                            </Button>
                        </Stack>
                    </Panel>
                </Container>
            </Center>
        </>
    )
}

export default Login
