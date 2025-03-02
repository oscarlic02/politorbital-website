import React from "react";
import { Box, Button, Container, Heading, Text, Image } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box width="100vw" height="100vh" position="relative" bg="#13263C" overflow="hidden">
      
      {/*Header(temporary)*/}
      <Box width="100%" height="10vh" />

      {/*Background*/}
      <Box
        position="absolute"
        width="30vw"
        height="30vh"
        left="-10vw"
        top="10vh"
        bg="radial-gradient(circle, #509DC4 6%, #2984BD 19%, #215B88 42%, #1C466D 57%, #183152 75%)"
        opacity="0.71"
        filter="blur(17.3px)"
      />
      <Box
        position="absolute"
        width="30vw"
        height="30vh"
        right="-10vw"
        top="5vh"
        bg="radial-gradient(circle, #509DC4 6%, #2984BD 19%, #215B88 42%, #1C466D 57%, #183152 75%)"
        opacity="0.71"
        filter="blur(17.3px)"
      />

      {/*Background Overlay*/}
      <Box
        position="absolute"
        width="100%"
        height="100%"
        bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 55.45%, #000000 82.6%), linear-gradient(180deg, rgba(0, 0, 0, 0.9) -7.68%, rgba(0, 0, 0, 0) 100%)"
      />

      {/*Main Section*/}
      <Container centerContent position="relative" mt="5vh">
        
        {/* Logo */}
        <Box width="15vw" maxWidth="150px" mb="4vh">
          <Image src="/homepage/logo.png" alt="Politorbital Logo" width="100%" height="auto" />
        </Box>

        {/*Text Section*/}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="2vh"
          width="80vw"
          textAlign="center"
          mb="3vh"
        >
          <Heading
            fontFamily="'Nasalization', sans-serif"
            fontWeight="400"
            fontSize={{ base: "8vw", md: "6vw", lg: "4vw" }}
            lineHeight="1.2"
            color="white"
          >
            POLITORBITAL TEAM
          </Heading>

          <Text
            fontFamily="'Nasalization', sans-serif"
            fontWeight="400"
            fontSize={{ base: "5vw", md: "3vw", lg: "2vw" }}
            lineHeight="1.2"
            color="#D8D8D8"
          >
            WE DESIGN LEO SPACECRAFTS<br/>
            FOR SPACE TOURISM
          </Text>
        </Box>

        <Button
          width={{ base: "50vw", md: "25vw" }}
          maxWidth="300px"
          height={{ base: "8vh", md: "6vh" }}
          bg="#13263C"
          borderRadius="100px"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="700"
          fontSize={{ base: "4vw", md: "1.5vw", lg: "1vw" }}
          letterSpacing="0.02em"
          color="white"
          paddingX={{ base: "5vw", md: "2vw" }}
          _hover={{ bg: "#1A3452" }}
        >
          Discover our space ideas
        </Button>
      </Container>
    </Box>
  );
};

export default HomePage;







