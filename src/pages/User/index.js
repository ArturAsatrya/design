import React from 'react'
import {
    Box,
    HStack,
    Flex,
    Divider,
    Center,
    Heading,
    VStack,
} from "@chakra-ui/react"
import SignIn from './SignIn'
import Register from './Register'

const User = () => {
    return (
        <Flex
          justifyContent="center">
             
           <Box
              mt="6rem"
              maxW="full"
              minH="full"
              bg="#252222">
                  <Flex justifyContent="space-between"
                   px="5rem">
                          <VStack> 
              <Heading mt={10} as="h2" color="#885809" fontWeight="800" fontSize="20px">
                 Sign in
              </Heading>
             <Heading mt={10} as="h2" color="#885809" fontWeight="800" fontSize="20px">
                 Register
             </Heading>
                 <Divider width="1000px" borderColor="#885809" />
                 </VStack>
             </Flex> 
            
              <HStack> 
                  <SignIn/>
                    <Divider orientation='vertical' height="700px" borderColor="#885809" />
                  <Register/>
              </HStack>
           </Box>
        </Flex>
    )
}

export default User
