import React from 'react'
import { Box, Grid, Heading } from '@chakra-ui/react'

const CurrencyHead = () => {
  return (
    <Grid h="50px" templateColumns="repeat(5, 1fr)" alignItems="center" gap={1}>
      <Box w={['100px', '100px', '120px', '180px']} align="center"><Heading fontSize="xl">Symbol</Heading></Box>
      <Box w={['100px', '100px', '120px', '180px']} align="center"><Heading fontSize="xl">Price</Heading></Box>
      <Box w={['100px', '100px', '120px', '180px']} align="center"><Heading fontSize="xl">Indicator</Heading></Box>
      <Box w={['100px', '100px', '120px', '180px']} align="center"><Heading fontSize="xl">Change</Heading></Box>
      <Box w={['100px', '100px', '120px', '180px']} align="center"><Heading fontSize="xl">Graph</Heading></Box>
    </Grid>
  )
}

export default CurrencyHead
