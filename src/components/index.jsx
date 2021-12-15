import {  Flex, Img, Box  } from "@chakra-ui/react";
// import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg"
import ListMenu from "./Navbar/ListMenu";


const Navbar = () => {
 console.log('ss');

  return (
   <Box>
     <Flex
        height="full"
        w="full"
        alignItems="center"
        justifyContent="center"
        bg="#252222"
     >
     <Link to="/">
        <Img
        src={Logo}/>
     </Link> 
        </Flex>
           <ListMenu/>
    </Box>
   
    
  );
};

export default Navbar;
