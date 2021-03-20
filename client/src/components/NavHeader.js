import React from 'react'
import { Box, Heading, Spacer } from '@chakra-ui/react'
import BaseMenu from '../components/BaseMenu'
import TimeframeMenu from '../components/TimeframeMenu'

const NavHeader = ({ symbols, loadData }) => (
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

        <Spacer />

        <BaseMenu
          rows={symbols}
          loadData={loadData}
        />

        <TimeframeMenu
          loadData={loadData}
        />

    </Box>
)

export default NavHeader
