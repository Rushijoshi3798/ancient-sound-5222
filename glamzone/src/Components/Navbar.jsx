import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {
  ChevronRightIcon,
  SearchIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
import {MdLocationOn , } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <Flex
        justifyContent={"space-between"}
        marginLeft={"20px"}
        marginRight={"20px"}>
        <HStack>
          <Image
            h="75px"
            w="150px"
            src="https://i.postimg.cc/BvrQ8nmK/Glamzone-logo-DSW-clone.png"
            alt="Brand_Logo"
          />
          <Input
            marginTop={["2px", "5px", "5px"]}
            borderRadius="none"
            borderColor={["white"]}
            w="400px"
            placeholder="Search Styles, brands & more"
            _placeholder={{
              opacity: 1,
              color: "gray.500",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif;",
              fontSize: "14px",
            }}
            size="sm"
            type="text"
            focusBorderColor="white"
            backgroundColor={"#f0f0f0"}
          />
          <IconButton
            bg="#f0f0f0"
            borderRadius={"none"}
            size={"sm"}
            aria-label="Search database"
            icon={<SearchIcon />}
          />
        </HStack>

        <HStack>
        <Flex >
          <Menu>
            <MenuButton
            
              // border={"1px solid black"}
              background="none"
              borderRadius={"none"}
              _hover={{ borderBottom: "2px solid black" }}
              as={Button}
              fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
              fontSize={"13px"}
              color="grey.200"
              rightIcon={<TriangleDownIcon />}>
              <HStack>
                <Avatar name={``} size="sm" src="https://bit.ly/broken-link" />
                <Text fontStyle={""} fontFamily={"Roboto, Helvetica, Arial, sans-serif"} fontSize={"13px"}>Sign in</Text>
              </HStack>
            </MenuButton>
            <MenuList
              boxShadow={{
                sm: "none",
                md: "none",
                lg: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
              border={{
              sm: "none",
              md: "none",
              lg: "none"}}
              w={["100px", "250px", "200px"]}>
              <MenuItem
                _hover={{ textDecoration: "underline", background: "none" }}>
                <Box
                  paddingY={1}
                  paddingX={2}
                  fontSize={"14px"}
                  color="#000000"
                  fontFamily={"Roboto, Helvetica, Arial, sans-serif;"}
                  w={["100px", "150px", "200px"]}>
                  Sign In
                </Box>
                <ChevronRightIcon />
              </MenuItem>

              <MenuItem
                _hover={{ textDecoration: "underline", background: "none" }}>
                <Box
                  paddingY={1}
                  paddingX={2}
                  fontSize={"14px"}
                  color="#000000"
                  fontFamily={"Roboto, Helvetica, Arial, sans-serif;"}
                  w={["100px", "150px", "200px"]}>
                  My orders
                </Box>
                <ChevronRightIcon />
              </MenuItem>

              <MenuItem
                _hover={{ textDecoration: "underline", background: "none" }}>
                <Box
                  paddingY={1}
                  paddingX={2}
                  fontSize={"14px"}
                  color="#000000"
                  fontFamily={"Roboto, Helvetica, Arial, sans-serif;"}
                  w={["100px", "150px", "200px"]}>
                  My Favourite
                </Box>
                <ChevronRightIcon />
              </MenuItem>

              <MenuItem
                _hover={{ textDecoration: "underline", background: "none" }}>
                <Box
                  paddingY={1}
                  paddingX={2}
                  fontSize={"14px"}
                  color="#000000"
                  fontFamily={"Roboto, Helvetica, Arial, sans-serif;"}
                  w={["100px", "150px", "200px"]}>
                  My VIP Rewards
                </Box>
                <ChevronRightIcon />
              </MenuItem>
            </MenuList>
          </Menu>
          
        </Flex>
        <Flex 
          marginLeft={"0px"}
          // border={"1px solid black"}
          background="none"
          borderRadius={"none"}
          paddingY={2.5}
          paddingX={2}
          _hover={{ borderBottom: "2px solid black" }}>
          <MdLocationOn />{" "}
          <Text marginInlineStart={"5px"} fontSize={"14px"}>Find a Store</Text>
        </Flex>

        <Flex
        marginLeft={"0px"}
        // border={"1px solid black"}
        background="none"
        borderRadius={"none"}
        paddingY={2.5}
        paddingX={2}
        _hover={{ borderBottom: "2px solid black" }}>
          <BsFillBagCheckFill />
          <Text marginInlineStart={"10px"} fontSize={"14px"}>Bag</Text>
        </Flex>
       
        </HStack>
      </Flex>
      <Box></Box>
    </div>
  );
};

export default Navbar;
