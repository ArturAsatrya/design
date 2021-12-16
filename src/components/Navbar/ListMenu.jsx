import React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Flex,
  SimpleGrid,
  Image,
  Text,
} from "@chakra-ui/react";
import { ReactComponent as MenIcon } from "../../assets/menu.svg";

const ListMenu = () => {
  return (
    <Flex
      px="6rem"
      height="100px"
      w="full"
      alignItems="center"
      justifyContent="space-between"
      bg="#252222"
    >
      <Menu isLazy>
        <MenuButton as={IconButton} aria-label="Options" icon={<MenIcon />} />

        <MenuList bg="#DCD0BD">
          <SimpleGrid
            columns={3}
            px={10}
            mt={10}
            spacing="40px"
            width="full"
            height="full"
          >
            <Flex
              bg="white"
              w="210px"
              h="294px"
              borderRadius="5px"
              justifyContent="center"
            >
              <Link to="/livingroom">
                <Image src="/assets/numb1.png" alt="nss" mt={4} />
                <Text px={8} fontWeight="800" fontSize="15px" color="#885809">
                  Living room
                </Text>
              </Link>
            </Flex>
            <Flex
              bg="white"
              w="210px"
              h="294px"
              borderRadius="5px"
              justifyContent="center"
            >
              <Link to="/bedroom">
                <Image src="/assets/numb2.png" alt="nnn" mt={4} />
                <Text px={8} fontWeight="800" fontSize="15px" color="#885809">
                  Bedroom
                </Text>
              </Link>
            </Flex>
            <Flex
              bg="white"
              w="210px"
              h="294px"
              borderRadius="5px"
              justifyContent="center"
            >
              <Link to="/kitchen">
                <Image src="/assets/numb3.png" alt="namsu" mt={4} />
                <Text px={8} fontWeight="800" fontSize="15px" color="#885809">
                  Kitchen
                </Text>
              </Link>
            </Flex>
            <Flex
              bg="white"
              w="210px"
              h="294px"
              borderRadius="5px"
              justifyContent="center"
            >
              <Link to="/bathroom">
                <Image src="/assets/numb4.png" alt="numsi" mt={4} />
                <Text px={8} fontWeight="800" fontSize="15px" color="#885809">
                  Bathroom
                </Text>
              </Link>
            </Flex>
            <Flex
              bg="white"
              w="210px"
              h="294px"
              borderRadius="5px"
              justifyContent="center"
            >
              <Link to="/hallway">
                <Image src="/assets/numb5.png" alt="nums" mt={4} />
                <Text px={8} fontWeight="800" fontSize="15px" color="#885809">
                  Hallway
                </Text>
              </Link>
            </Flex>
            <Flex
              bg="white"
              w="210px"
              h="294px"
              borderRadius="5px"
              justifyContent="center"
            >
              <Link to="/other">
                <Image src="/assets/numbs.png" alt="num" mt={4} />
                <Text px={8} fontWeight="800" fontSize="15px" color="#885809">
                  Other
                </Text>
              </Link>
            </Flex>
          </SimpleGrid>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default ListMenu;
