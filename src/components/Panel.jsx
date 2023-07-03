import { Box } from '@chakra-ui/react'
import React from 'react'

function Panel({ children }) {
    return (
        <Box
            bgColor='#FFF'
            borderRadius='10px'
            boxShadow='0px 0px 8px rgba(146, 146, 146, .2)'
            p='1.5rem'
        >
            {children}
        </Box>
    )
}

export default Panel