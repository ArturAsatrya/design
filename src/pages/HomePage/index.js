import React from 'react'
import { 
    Box,
    Divider,
    HStack,
    Text, 
    VStack,
    Image,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react'



const index = () => {
    return (
        <>
         <HStack>
            <Box
              bg="#252222"
              width="full">
              <VStack 
                  spacing="4rem">
                  <Text
                    color="#AA937E"
                    fontWeight="600"
                    fontSize="46px"
                    mt="6rem">
                        Your dream interior design 
                    <Text px="4.5rem">that can turn to real</Text>
                  </Text>
                  <Divider 
                    borderColor="#885809"
                    width="720px"/>
                    <Text 
                      as='em'
                      fontSize="25px"
                      fontWeight="600"
                      color="#AA937E">
                    Some people look for a beautiful place, 
                    <Text px="4rem">others make a place beautiful.</Text> 
                     <Text>Here you can order any type of furniture </Text>
                     <Text px="7.5rem">or create it yourself,</Text>
                    <Text>making your space simple but significant.</Text>
                    </Text>
                    <Image 
                      src="/assets/photo.png" 
                      alt='photo'
                      width="650px"/>
              </VStack>
            </Box>
            <Box
              width="full">
                <VStack
                  spacing="4rem">
                    <Image 
                    src="/assets/photos.png" 
                    alt='photos'  
                    width='650px'
                    height="650px"/>
                    <Box>
                    <Text
                      fontWeight="900"
                      fontSize="35px"
                      color="#885809">
                       The advantages of our products
                    </Text>
                    <UnorderedList
                      mt="2.5rem"
                      fontWeight="600"
                      fontSize="15px"
                      color="black">
                       <ListItem>good quality</ListItem>
                       <ListItem>availability</ListItem>
                       <ListItem>stylishness</ListItem>
                       <ListItem>variety of choice</ListItem>
                       <ListItem>comfort</ListItem>
                    </UnorderedList>      
                    </Box>               
                </VStack>
            </Box>
           
         </HStack>

            
        </>
    )
}

export default index
