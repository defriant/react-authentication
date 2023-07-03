import { Button, Center, Container, Link, Stack, Text } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import Panel from '../components/Panel'
import { ROUTE_PATH } from '../Router/path'
import useAuth from '../hooks/useAuth'
import { session } from '../api/config'

function Dashboard() {
    const { user, auth } = useAuth()

    return (
        <>
            <Center w='100vw' h='100vh'>
                <Container maxW='container.sm'>
                    <Panel>
                        <Text>You're logged in as {user?.name}</Text>
                        <br />
                        <Stack spacing={5}>
                            <Link
                                as={ReactLink}
                                to={ROUTE_PATH.index}
                                color='blue'
                            >
                                Home
                            </Link>
                            <Link
                                as={ReactLink}
                                to={ROUTE_PATH.profile}
                                color='blue'
                            >
                                Profile
                            </Link>
                            <Button
                                onClick={() =>
                                    console.log(session.token_expires_at())
                                }
                            >
                                Show session
                            </Button>
                        </Stack>
                    </Panel>
                </Container>
            </Center>
        </>
    )
}

export default Dashboard
