import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'

function PageLoader() {
    return (
        <Center w='100vw' h='100vh'>
            <Spinner size='xl' color='blue.500' />
        </Center>
    )
}

export default PageLoader
