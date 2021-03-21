import React from 'react'
import { Menu, MenuButton, MenuItem, MenuList, Image, Button } from '@chakra-ui/react'

const BaseMenu = ({ rows, loadData }) => {
  return (
    <Menu>
      <MenuButton as={Button}>
        Change Base
      </MenuButton>
      <MenuList>
        {Object.values(rows).map((c) =>
        <MenuItem key={c} onClick={() => loadData(c)} minH="32px">
        <Image
            boxSize="1.5rem"
            borderRadius="full"
            src="https://placekitten.com/100/100"
            alt={c}
            mr="12px"
        />
        <span>{c}</span>
        </MenuItem>
        )}
      </MenuList>
    </Menu>
  )
}

export default BaseMenu
