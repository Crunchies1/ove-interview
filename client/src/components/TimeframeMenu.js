import React from 'react'
import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react'

const TimeframeMenu = ({ loadData }) => {
  return (
    <Menu>
      <MenuButton ml="6px" as={Button}>
        Change Timeframe
      </MenuButton>
      <MenuList>
      <MenuItem onClick={() => loadData(1)} minH="32px">
        One Day
      </MenuItem>
      <MenuItem onClick={() => loadData(7)} minH="32px">
        Seven Days
      </MenuItem>
      <MenuItem onClick={() => loadData(31)} minH="32px">
        One Month
      </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default TimeframeMenu