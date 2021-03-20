import React from 'react'
import { Box } from '@chakra-ui/react'
import NavHeader from '../NavHeader'

const DefaultLayout = ({ symbols, loadData, children }) => (
    <Box display="flex" minHeight="100vh" height="100%" flexDirection="column">
        <NavHeader symbols={symbols} loadData={loadData} />
        <>{children}</>
    </Box>
)

export default DefaultLayout