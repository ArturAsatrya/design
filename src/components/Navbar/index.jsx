import { Flex, Box, HStack, Text, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ListMenu from "./ListMenu";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import UserListMenu from "./UserListMenu";

// import {ReactComponent as Vector} from '../../assets/Vector.svg'

const Navbar = () => {
  console.log("ss");

  return (
    <>
      <Flex height="full" w="full" justifyContent="space-around" bg="#252222">
        <Link to="/">
          <Logo />
        </Link>
      </Flex>
      <Flex
        height="full"
        w="full"
        alignItems="center"
        justifyContent="space-around"
        bg="#252222"
      >
        <Box>
          <ListMenu />
        </Box>
        <Box>
          <Box>
            <HStack spacing="12rem">
              <Link to="/about">
                <Text color="#885809" fontSize="18px" fontWeight="600">
                  about
                </Text>
              </Link>
              <Link to="/contacts">
                <Text color="#885809" fontSize="18px" fontWeight="600">
                  contacts
                </Text>
              </Link>
              <Link to="/delivery">
                <Text color="#885809" fontSize="18px" fontWeight="600">
                  delivery
                </Text>
              </Link>
              <Input type="search" bg="white" size="sm"/>
              <Link to="/like">
                <Heart />
              </Link>
               <UserListMenu/>
           
            </HStack>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
