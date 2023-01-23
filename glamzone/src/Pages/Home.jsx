import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import { Link, Navigate } from "react-router-dom"

const Home = () => {

  const handleClick = () => {
    console.log("hello brother")
    // let value = {
    //   pageName: e.target.value
    // };
    return <Navigate to="/products" />
  }
  return (
    <div>
      <Navbar />
      <div style={{ width: "100%" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
          }}>
          <img
            src="https://images.dsw.com/is/image/DSWShoes/P222162_ft_boots?impolicy=qlt-medium&imwidth=1400&imdensity=1"
            alt="Snow"
            style={{ width: "100%", height: "600px" }}
          />
          <p
            style={{
              border: "none",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              MediaStreamTransform: "translate(-50%, -50%)",
              color: "white",
              fontWeight: "bolder",
              fontFamily: "sans-serif",
              fontSize: "40px",
              padding: "12px 20px",
              width: "35%",
              borderRadius: "5px",
              textAlign: "center",
            }}>
            Need-Now Boots Under $100
          </p>
          <p
            style={{
              border: "none",
              position: "absolute",
              top: "52%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              MediaStreamTransform: "translate(-50%, -50%)",
              color: "white",
              fontWeight: "bolder",
              fontFamily: "sans-serif",
              fontSize: "14px",
              padding: "12px 20px",
              width: "35%",
              borderRadius: "5px",
              textAlign: "center",
              letterSpacing: "0.1em",
            }}>
            Your Kind of Boots at Your kind of Prices
          </p>
          <Link to="/products">
          <button
            value="women"
            onClick={() => {
              handleClick()
            }}
            style={{
              position: "absolute",
              top: "60%",
              left: "43%",
              transform: "translate(-50%, -50%)",
              MediaStreamTransform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              color: "black",
              fontSize: "14px",
              fontWeight: "bolder",
              padding: "12px 45px",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              textAlign: "center",
              textDecoration: "underline",
            }}>
            SHOP WOMEN'S
          </button></Link>
          <Link to="/products">
            <button
            value="men"
            onClick={() => {
            handleClick()
            }}
            style={{
              position: "absolute",
              top: "60%",
              left: "57%",
              transform: "translate(-50%, -50%)",
              MediaStreamTransform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              color: "black",
              fontSize: "14px",
              fontWeight: "bolder",
              padding: "12px 50px",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              textAlign: "center",
              textDecoration: "underline",
            }}>
            SHOP MEN'S
          </button></Link>
        </div>
      </div>

      <Box marginTop={"50px"}>
        <Text fontSize={"32px"} fontWeight={"bold"}>
          The Deals To Know
        </Text>
        <Grid
          h={"auto"}
          px={4}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={4}>
          <GridItem w="100%">
            <Image
              cursor={"pointer"}
              src={
                "https://images.dsw.com/is/image/DSWShoes/P222162_editorial_boot-1?impolicy=qlt-medium&imwidth=1011&imdensity=1"
              }
            />
            <Text
              fontSize="14px"
              marginTop={"5px"}
              fontWeight={"bold"}
              textDecoration="underline"
              cursor={"pointer"}>
              Shop Now
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Image
              cursor={"pointer"}
              src={
                "https://images.dsw.com/is/image/DSWShoes/P222162_editorial_boot-5?impolicy=qlt-medium&imwidth=1011&imdensity=1"
              }
            />
            <Text
              fontSize="14px"
              marginTop={"5px"}
              fontWeight={"bold"}
              textDecoration="underline"
              cursor={"pointer"}>
              Shop Now
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Image
              cursor={"pointer"}
              src={
                "https://images.dsw.com/is/image/DSWShoes/P222162_editorial_boot-6?impolicy=qlt-medium&imwidth=1011&imdensity=1"
              }
            />
            <Text
              fontSize="14px"
              marginTop={"5px"}
              fontWeight={"bold"}
              textDecoration="underline"
              cursor={"pointer"}>
              Shop Now
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Image
              cursor={"pointer"}
              src={
                "https://images.dsw.com/is/image/DSWShoes/P222162_editorial_boot-7-NEW.jpg?impolicy=qlt-medium&imwidth=1011&imdensity=1"
              }
            />
            <Text
              fontSize="14px"
              marginTop={"5px"}
              fontWeight={"bold"}
              textDecoration="underline"
              cursor={"pointer"}>
              Shop Now
            </Text>
          </GridItem>
        </Grid>
      </Box>

      <Box marginTop={"60px"} marginBottom={"60px"}>
        <Grid
          textAlign={"center"}
          h={"auto"}
          px={14}
          py={5}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={4}>
          <GridItem w="100%">
            <Image
              cursor={"pointer"}
              src={
                "https://images.dsw.com/is/image/DSWShoes/P222120_editorial_w-lug?impolicy=qlt-medium&imwidth=1011&imdensity=1"
              }
            />
            <Text
              fontSize="16px"
              marginTop={"20px"}
              fontWeight={"bold"}
              cursor={"pointer"}>
              Your New Favorite Lug-Sole Boots
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Image
              cursor={"pointer"}
              src={
                "https://images.dsw.com/is/image/DSWShoes/P222120_editorial_w-booties?impolicy=qlt-medium&imwidth=1011&imdensity=1"
              }
            />
            <Text
              fontSize="16px"
              marginTop={"20px"}
              fontWeight={"bold"}
              cursor={"pointer"}>
              Dress-Up-or-Down Booties
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Image
              cursor={"pointer"}
              src={
                "https://images.dsw.com/is/image/DSWShoes/P222120_editorial_w-platform?impolicy=qlt-medium&imwidth=1011&imdensity=1"
              }
            />
            <Text
              fontSize="16px"
              marginTop={"20px"}
              fontWeight={"bold"}
              cursor={"pointer"}>
              Outfit-Elevating Platform Boots
            </Text>
          </GridItem>
        </Grid>
      </Box>

      <div style={{ marginTop: "20px", width: "100%" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
          }}>
          <img
            src="https://images.dsw.com/is/image/DSWShoes/P222150_ft_sneakers.jpg?impolicy=qlt-medium&imwidth=1400&imdensity=1"
            alt="Snow"
            style={{ width: "100%", height: "600px" }}
          />
          <p
            style={{
              border: "none",
              position: "absolute",
              top: "45%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              MediaStreamTransform: "translate(-50%, -50%)",
              color: "white",
              fontWeight: "bolder",
              fontFamily: "sans-serif",
              fontSize: "36px",
              padding: "12px 20px",
              width: "35%",
              borderRadius: "5px",
              textAlign: "center",
            }}>
            On-Trend Sneakers Under $75
          </p>
          <p
            style={{
              border: "none",
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              MediaStreamTransform: "translate(-50%, -50%)",
              color: "white",
              fontWeight: "bolder",
              fontFamily: "sans-serif",
              fontSize: "14px",
              padding: "12px 20px",
              width: "35%",
              borderRadius: "5px",
              textAlign: "center",
              letterSpacing: "0.1em",
            }}>
            These have “You” written all over them.
          </p>
          <button
            style={{
              position: "absolute",
              top: "65%",
              left: "43%",
              transform: "translate(-50%, -50%)",
              MediaStreamTransform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              color: "black",
              fontSize: "14px",
              fontWeight: "bolder",
              padding: "12px 45px",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              textAlign: "center",
              textDecoration: "underline",
            }}>
            SHOP WOMEN'S
          </button>
          <button
            style={{
              position: "absolute",
              top: "65%",
              left: "57%",
              transform: "translate(-50%, -50%)",
              MediaStreamTransform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              color: "black",
              fontSize: "14px",
              fontWeight: "bolder",
              padding: "12px 50px",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              textAlign: "center",
              textDecoration: "underline",
            }}>
            SHOP MEN'S
          </button>
        </div>
      </div>

      <HStack
        border={"1px solid black"}
        marginTop={"20px"}
        marginBottom={"20px"}
        p={10}>
        <Box w={"20%"}>
          <Text fontWeight={"medium"} fontSize={"30px"}>
            New Markdowns, Right This Way
          </Text>
        </Box>
        <HStack px={8}>
          <VStack bg={"#f8f8f8"} h={"190px"}>
            <Image
              w={"200px"}
              h={"130px"}
              src="https://images.dsw.com/is/image/DSWShoes/P221473_funnel_w-clearance?impolicy=qlt-medium&imwidth=300&imdensity=1"
            />
            <Text fontSize={"14px"} color={"grey"}>
              Women's
            </Text>
            <Text
              fontSize={"14px"}
              color={"black"}
              marginBottom={"20px"}
              fontWeight={"bold"}>
              Clearance
            </Text>
          </VStack>

          <VStack bg={"#f8f8f8"} h={"190px"}>
            <Image
              w={"200px"}
              h={"130px"}
              src="https://images.dsw.com/is/image/DSWShoes/P221473_funnel_m-clearance?impolicy=qlt-medium&imwidth=300&imdensity=1"
            />
            <Text fontSize={"14px"} color={"grey"}>
              Men's
            </Text>
            <Text
              fontSize={"14px"}
              color={"black"}
              marginBottom={"20px"}
              fontWeight={"bold"}>
              Clearance
            </Text>
          </VStack>

          <VStack bg={"#f8f8f8"} h={"190px"}>
            <Image
              w={"200px"}
              h={"130px"}
              src="https://images.dsw.com/is/image/DSWShoes/P221473_funnel_k-clearance?impolicy=qlt-medium&imwidth=300&imdensity=1"
            />
            <Text fontSize={"14px"} color={"grey"}>
              Kids'
            </Text>
            <Text
              fontSize={"14px"}
              color={"black"}
              marginBottom={"20px"}
              fontWeight={"bold"}>
              Clearance
            </Text>
          </VStack>

          <VStack bg={"#f8f8f8"} h={"190px"}>
            <Image
              w={"200px"}
              h={"130px"}
              src="https://images.dsw.com/is/image/DSWShoes/P221473_funnel_under75?impolicy=qlt-medium&imwidth=300&imdensity=1"
            />
            <Text fontSize={"14px"} marginBottom={"20px"} color={"grey"}>
              Womens'
            </Text>
            <Text fontSize={"14px"} color={"black"} fontWeight={"bold"}>
              Under $75
            </Text>
          </VStack>

          <VStack bg={"#f8f8f8"} h={"190px"}>
            <Image
              w={"200px"}
              h={"130px"}
              src="https://images.dsw.com/is/image/DSWShoes/P221473_funnel_under70?impolicy=qlt-medium&imwidth=300&imdensity=1"
            />
            <Text
              // border={"1px solid black"}
              fontSize={"14px"}
              color={"grey"}>
              Womens'
            </Text>
            <Text
              fontSize={"14px"}
              color={"black"}
              marginBottom={"20px"}
              fontWeight={"bold"}>
              Boots Under $70
            </Text>
          </VStack>
        </HStack>
      </HStack>

      <Box></Box>
    </div>
  );
};

export default Home;
