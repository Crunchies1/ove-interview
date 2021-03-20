import React from 'react'
import { VStack } from '@chakra-ui/react'
import CurrencyHead from './CurrencyHead'
import CurrencyRow from './CurrencyRow'

const CurrencyStack = ({ rows }) => {
  return (
    <VStack spacing={2}>
        <CurrencyHead/>
        {Object.keys(rows).map((c) =>
        <CurrencyRow key={c}
            symbol={c}
            price={rows[c].price}
            indicator={rows[c].indicator}
            change={rows[c].change}
            graph={rows[c].graph}
        />
        )}
    </VStack>
  )
}

export default CurrencyStack