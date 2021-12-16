import React from "react";
import { Flex, Box, HStack, Text } from "@chakra-ui/react";
// import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";

const Footer = () => {
  console.log("ss");

  return (
    <Flex
      height="full"
      w="full"
      alignItems="center"
      justifyContent="space-between"
      px="16.5rem"
      bg="#252222"
      minH="121px"
    >
      <Box>
        <Text fontWeight="700px" color="#DCD0BD">
          Address: Dzoraxbyur, Barekamutyan 7 st.
        </Text>
        <Text fontWeight="700px" color="#DCD0BD">
          Phone numbers: +374 98 900 309, +374 430977373
        </Text>
      </Box>
      <Box>
        <HStack spacing="2rem">
          <Link to="/https://www.facebook.com/">
            <Facebook />
          </Link>
          <Link to="/">
            <Instagram />
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Footer;
