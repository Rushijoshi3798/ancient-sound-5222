import React, { useContext } from "react";
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
import { MdLocationOn } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {

  const { setToken ,setIsAuth,logout} = useContext(AuthContext)

  const handleClick = () => {
    console.log("hello brother")
    // let value = {
    //   pageName: e.target.value
    // };
    return <Navigate to="/products" />
  }

  const signUpfunc = () => {
    return <Navigate to="/login" />
  }

  const logoutFunc = () => {
    setIsAuth(false)
    logout()
    setToken("")
    
    return <Navigate to="/login" />

  }
  
  

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
          <Flex>
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
                  <Avatar
                    name={``}
                    size="sm"
                    src="https://bit.ly/broken-link"
                  />
                  <Text
                    fontStyle={""}
                    fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
                    fontSize={"13px"}>
                    Sign in
                  </Text>
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
                  lg: "none",
                }}
                w={["100px", "250px", "200px"]}>

                <Link to="/login">
                <MenuItem
                onClick={signUpfunc}
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
                </MenuItem></Link>

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
                    fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
                    w={["100px", "150px", "200px"]}>
                    My VIP Rewards
                  </Box>
                  <ChevronRightIcon />
                </MenuItem>

                <Link to="/"><MenuItem
                  _hover={{ textDecoration: "underline", background: "none" }}>
                  <Box
                    paddingY={1}
                    paddingX={2}
                    fontSize={"14px"}
                    color="#000000"
                    fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
                    w={["100px", "150px", "200px"]}>
                    <button data-testid="logout-btn" onClick={logoutFunc}>Logout</button>
                  </Box>
                  <ChevronRightIcon />
                </MenuItem></Link>

                
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
            <Text marginInlineStart={"5px"} fontSize={"14px"}>
              Find a Store
            </Text>
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
            <Text marginInlineStart={"10px"} fontSize={"14px"}>
              Bag
            </Text>
          </Flex>
        </HStack>
      </Flex>
      <hr></hr>

      <Flex justifyContent={"space-around"}>
        <HStack
          fontSize={"14px"}
          color={"#000000"}
          fontFamily={"Roboto, Helvetica, Arial, sans-serif;"}
          h="10px"
          p={4}>
          <Link to="/products"><Flex
          onClick={() => {
            handleClick()
            }}
            _hover={{ cursor: "pointer", borderBottom: "2px solid black" }}
            p={2}
            px={4}>
            Women
          </Flex></Link>
          <Link to="/products"><Flex
          onClick={() => {
            handleClick()
            }}
            _hover={{ cursor: "pointer", borderBottom: "2px solid black" }}
            p={2}
            px={4}>
            Men
          </Flex></Link>
          <Link to="/products"><Flex
          onClick={() => {
            handleClick()
            }}
            _hover={{ cursor: "pointer", borderBottom: "2px solid black" }}
            p={2}
            px={4}>
            Kids
          </Flex></Link>
          <Flex
            _hover={{ cursor: "pointer", borderBottom: "2px solid black" }}
            p={2}
            px={4}>
            Athletic & Snekears
          </Flex>
          <Flex
            _hover={{ cursor: "pointer", borderBottom: "2px solid black" }}
            p={2}
            px={4}>
            Brands
          </Flex>
          <Flex
            _hover={{ cursor: "pointer", borderBottom: "2px solid black" }}
            p={2}
            px={4}>
            Clearance
          </Flex>
          <Flex
            _hover={{ cursor: "pointer", borderBottom: "2px solid black" }}
            p={2}
            px={4}>
            Deals
          </Flex>
        </HStack>
      </Flex>
      <hr></hr>
    </div>
  );
};

export default Navbar;
