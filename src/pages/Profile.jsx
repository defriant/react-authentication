import { Center, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Panel from '../components/Panel'
import { Link as ReactLink } from 'react-router-dom'
import { ROUTE_PATH } from '../Router/path'
import useAuth from '../hooks/useAuth'

function Profile() {
    const { user } = useAuth()

    return (
        <Center w='100vw' h='100vh'>
            <Panel>
                <Stack spacing={1}>
                    <Text>Name: {user?.name}</Text>
                    <Text>Email: {user?.email}</Text>
                    <Text>Address: {user?.address}</Text>
                    <Text>Province: {user?.province}</Text>
                    <Text>City: {user?.city}</Text>
                    <Text>District: {user?.district}</Text>
                    <Text>Urban Village: {user?.urban_village}</Text>
                    <br />
                    <Stack>
                        <Link as={ReactLink} to={ROUTE_PATH.index} color='blue'>
                            Home
                        </Link>
                        <Link
                            as={ReactLink}
                            to={ROUTE_PATH.dashboard}
                            color='blue'
                        >
                            Dashboard
                        </Link>
                    </Stack>
                </Stack>
            </Panel>
        </Center>
    )
}

export default Profile
