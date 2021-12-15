import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    IconButton,
    Flex,
  } from '@chakra-ui/react'
  import {ReactComponent as MenIcon } from "../../assets/menu.svg"

const ListMenu = () => {
    return (
        <Flex   
           px="6rem"
           height="100px"
           w="full"
           alignItems="center"
           justifyContent="space-between"
           bg="#252222">
         <Menu isLazy>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<MenIcon />}
               />
              
                   <MenuList>
                   knjdbfcdfj
          {/* <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
            New Window
          </MenuItem>
          <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
            Open Closed Tab
          </MenuItem>
          <MenuItem icon={<EditIcon />} command='⌘O'>
            Open File...
          </MenuItem> */}
                  </MenuList>
        </Menu>
      </Flex>
    )
}

export default ListMenu
