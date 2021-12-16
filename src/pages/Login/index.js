import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  HStack,
  VStack,
  Heading,
  Divider,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Google } from "../../assets/google.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Vk } from "../../assets/vk.svg";

const Login = () => {
  return (
    <VStack spacing="4rem">
      <Box w="350px">
        <Text color="#DCD0BD" fontSize="12px">
          EMAIL ADDRESS:
        </Text>
        <Input
          //    value={value}
          //    onChange={handleChange}
          placeholder="Here is a sample placeholder"
          //    size='sm'
          bg="white"
        />
        <Text mt="3rem" color="#DCD0BD" fontSize="12px">
          PASSWORD:
        </Text>
        <Input
          type="password"
          //    value={value}
          //    onChange={handleChange}
          placeholder="Here is a sample placeholder"
          //    size='sm'
          bg="white"
        />
      </Box>
      <Button variant="pink" size="lg">
        Login
      </Button>
      <Text fontSize="20px" fontWeight="600" color="#DCD0BD">
        Or login with...
      </Text>
      <HStack spacing={10}>
        <Link to="/https://www.facebook.com/">
          <Facebook />
        </Link>
        <Link to="/">
          <Instagram />
        </Link>
        <Link to="/">
          <Google />
        </Link>
        <Link to="/">
          <Vk />
        </Link>
        <Link to="/">
          <Twitter />
        </Link>
      </HStack>
    </VStack>
  );
};

export default Login;
