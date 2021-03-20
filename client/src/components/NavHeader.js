import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

const NavHeader = () => (
    <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        px={6}
        py={4}
        bg="teal.500"
    >
        <Heading as="h1" size="lg" color="white" letterSpacing={'-.1rem'}>
          Rates Imperial
        </Heading>
    </Box>
)

export default NavHeader