import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  HStack,
  VStack,
  Heading,
  Flex,
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

const Register = () => {
  return (
    <Flex justifyContent="center">
      <Flex
        alignItems="center"
        direction="column"
        minW="600px"
        minH="800px"
        bg="#252222"
        mt="4rem"
      >
        <Heading
          mt="2rem"
          mb="3rem"
          fontSize="25px"
          fontWeight="800"
          color="#885809"
        >
          Create account
        </Heading>
        <Divider borderColor="#885809" w="full" />
        <VStack spacing="3rem">
          <Box w="full" mt="4rem">
          <Text  mt="3rem" color="#DCD0BD" fontSize="12px">
              NAME SURNAME:
            </Text>
            <Input
              //    value={value}
              //    onChange={handleChange}
              placeholder="Here is a sample placeholder"
              //    size='sm'
              bg="white"
            />
             <Text mt="3rem" color="#DCD0BD" fontSize="12px">
             PHONE NUMBER:
            </Text>
            <Input
              //    value={value}
              //    onChange={handleChange}
              placeholder="Here is a sample placeholder"
              //    size='sm'
              bg="white"
            />
            <Text mt="3rem" color="#DCD0BD" fontSize="12px">
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
              //  value={value}
              //   onChange={handleChange}
              placeholder="Here is a sample placeholder"
              //    size='sm'
              bg="white"
            />
          </Box>
          <Box>
          <Button mb={4} variant="pink" size="xl">
            Login
          </Button>
          <Link to="/register">
          <Text color="#885809" textAlign="center" fontSize="14px">Registr now?</Text>
          </Link>
          </Box>
         
          <Text fontSize="20px" fontWeight="600" color="#885809">
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
      </Flex>
    </Flex>
  );
};

export default Register;
