import { Button, Center, Flex, Link } from '@chakra-ui/react'
import Panel from '../components/Panel'
import { Link as ReactLink } from 'react-router-dom'
import { ROUTE_PATH } from '../Router/path'
import PageLoader from '../components/PageLoader'

function Home() {
    return (
        <Center w='100vw' h='100vh'>
            <Panel>
                <Flex gap='1rem'>
                    <Link as={ReactLink} to={ROUTE_PATH.login}>
                        <Button colorScheme='blue'>Login</Button>
                    </Link>

                    <Link as={ReactLink} to={ROUTE_PATH.dashboard}>
                        <Button>Dashboard</Button>
                    </Link>
                </Flex>
            </Panel>
        </Center>
    )
}

export default Home
