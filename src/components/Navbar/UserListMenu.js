import React from 'react'
import { Link } from "react-router-dom";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
  } from '@chakra-ui/react'
  import { ReactComponent as Usersv } from "../../assets/user.svg";

const UserListMenu = () => {
    return (
        <>
        <Menu>
        <MenuButton
          as={IconButton}
          aria-label='user'
          icon={<Usersv />}
        />
        <MenuList
            bg="#DCD0BD">
          <Link to="/login">
            <MenuItem >
            Login
           </MenuItem>
            </Link>
            <Link to="/register">
            <MenuItem >
            Create account
           </MenuItem>
            </Link>
            <Link to="/profile">
            <MenuItem >
              Profile
           </MenuItem>
            </Link>
            <Link to="/">
            <MenuItem >
            Seting
           </MenuItem>
            </Link>
            </MenuList>
      </Menu>
        </>
    )
}

export default UserListMenu
