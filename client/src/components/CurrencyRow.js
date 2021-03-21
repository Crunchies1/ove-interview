import React from 'react'
import { Box, Grid, Heading, Divider } from '@chakra-ui/react'
import LineChart from './LineChart'
import { theme } from '../styles/theme.js' // eslint-disable-line no-unused-vars

const CurrencyRow = ({ symbol, price, indicator, change, graph }) => {
  // This adjusts the colour based on how the currency has valued
  let color
  if (indicator === 1) {
    color = theme.colors.currIncrease
  } else if (indicator === 0) {
    color = theme.colors.currNoChange
  } else {
    color = theme.colors.currDecrease
  }

  // This adjusts the background colour if the row is the base row
  let baseColor = ''
  if (indicator === null) {
    baseColor = 'teal.500'
  }

  return (
    <Box>
    <Grid h="50px" bg={baseColor} borderRadius="lg" templateColumns="repeat(5, 1fr)" alignItems="center" gap={1}>
      <Box w={['100px', '100px', '120px', '180px']} align="center"><Heading fontSize="lg">{symbol}</Heading></Box>
      <Box w={['100px', '100px', '120px', '180px']} align="center"><Heading fontSize="md">{price}</Heading></Box>
      <Box w={['100px', '100px', '120px', '180px']} align="center"><Heading color={color} fontSize="lg">{indicator !== null ? indicator : null}</Heading></Box>
      <Box w={['100px', '100px', '120px', '180px']} align="center"><Heading color={color} fontSize="lg">{change !== null ? change : null}</Heading></Box>
      <Box w={['100px', '100px', '120px', '180px']} align="center">
        {graph !== null
          ? <LineChart
          xAxisData={graph[0]}
          yAxisData={graph[1]}
          indicator={indicator}
          color={color}
        />
          : null}
      </Box>
    </Grid>
    <Divider />
    </Box>
  )
}

export default CurrencyRow
