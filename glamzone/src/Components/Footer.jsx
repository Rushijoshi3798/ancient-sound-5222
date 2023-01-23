import React from "react";
import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaItunes,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";



const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const handleClick = () => {
  return (
    <Alert status="success" variant="solid">
      <AlertIcon />
      Data uploaded to the server. Fire on!
    </Alert>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("#ffffff")}
      color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Image
                src="https://i.postimg.cc/BvrQ8nmK/Glamzone-logo-DSW-clone.png"
                w={"200px"}
                border={"1px solid black"}
                color={useColorModeValue("gray.700", "white")}
              />
            </Box>
            <Text fontSize={"sm"}>© 2022 Glamzone All rights reserved</Text>
            <Stack direction={"row"} spacing={4}>
              <SocialButton
                label={"Twitter"}
                href={"https://twitter.com/dsw_us"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={"Facebook"}
                href={"https://www.facebook.com/DSW"}>
                <FaFacebook />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href={"https://www.instagram.com/dsw/"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton
                label={"Pinterest"}
                href={"https://www.pinterest.com/dsw/"}>
                <FaPinterest />
              </SocialButton>
              <SocialButton
                label={"Itunes"}
                href={
                  "https://itunes.apple.com/us/app/dsw-designer-shoe-warehouse/id918263528?mt=8"
                }>
                <FaItunes />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack fontFamily={"sans-serif"} fontWeight={"bold"} fontSize={"14px"} align={"flex-start"}>
            <ListHeader>CATEGORIES</ListHeader>
            <Link href={"#"}>Shoes</Link>
            <Link href={"#"}>Kids Shoes</Link>
            <Link href={"#"}>Handbag</Link>
            <Link href={"#"}>Accessories</Link>
            <Link href={"#"}>Running Shoes</Link>
            <Link href={"#"}>Sneakers</Link>
            <Link href={"#"}>Boat Shoes</Link>
            <Link href={"#"}>Socks</Link>
            
          </Stack>
          <Stack fontFamily={"sans-serif"} fontWeight={"bold"} fontSize={"14px"} align={"flex-start"}>
            <ListHeader>EXPLORE US</ListHeader>
            <Link href={"#"}>GLAMZONE VIP</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Return & Exchange Policy</Link>
            <Link href={"#"}>Shoe Repair</Link>
            <Link href={"#"}>Customer Service</Link>
            <Link href={"#"}>Store Finder</Link>
            
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                onClick={() => handleClick}
                bg={useColorModeValue("#f0f0f0")}
                color={useColorModeValue("grey.700")}
                _hover={{
                  bg: "#a79ca2",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
