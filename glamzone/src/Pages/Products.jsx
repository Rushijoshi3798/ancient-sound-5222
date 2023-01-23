import React from "react";
import { useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useState } from "react";
import { Box, Button, Card, Grid, Image, Text } from "@chakra-ui/react";

const Products =  ()  => {
  const [data, setData] = useState([]);

  let url = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [url]);

  const handleSort =  (e) => {
    let dataArr;
    console.log(e.target.value)
   let eventName = e.target.value;
    axios.get(url).then((res) => {
      console.log(res.data);
      dataArr = res.data;
      if(eventName == "asc"){
        console.log("helloooooooo")
        dataArr.sort((a,b) => {
          return a.price - b.price
        })
  
        setData(dataArr)
        console.log(dataArr)
      } else {
  
        dataArr.sort((a,b) => {
          return b.price - a.price
        })
  
        setData(dataArr)
        console.log(dataArr)
      }
    });

    
     
  }

  return (
    <div>
      <Navbar />
      <Box marginTop={"20px"}>
        <Button
        value="asc"
        onClick={(e)=> {
          handleSort(e)
        }}
          color={"white"}
          background={"black"}
          _hover={{ color: "white", background: "#464b51" }}
          marginRight={"20px"}>
          Sort: Low to High
        </Button>
        <Button
        value="desc"
        onClick={(e)=> {
          handleSort(e)
        }}
          color={"white"}
          background={"black"}
          _hover={{ color: "white", background: "#464b51" }}>
          Sort: High to Low
        </Button>
      </Box>
      <Grid px={10} p={10} templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]} gap={10}>
        {data.map((el) => (
          <Card  p={"2"} h={"auto"} key={el.id}>
            <Image p={6} marginBottom={"20px"} h={"400px"} src={el.image} />
            <Text fontSize={"16px"} marginBottom={"20px"}>
              {el.title}
            </Text>
            <Text fontSize={"16px"} marginBottom={"20px"}>
              {el.category}
            </Text>
            <Text fontSize={"16px"} marginBottom={"20px"}>
              {el.price}
            </Text>
            <Button color={"white"} background={"black"} _hover={{color:"white", background:"grey.700"}}>Buy Now</Button>
          </Card>
        ))}
      </Grid>
      <Footer />
    </div>
  );
};

export default Products;
