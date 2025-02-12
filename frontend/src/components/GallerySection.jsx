import React, { useState } from 'react';
import { Box, Flex, Text, Image, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const images = [
  "/homepage/gallery1.jpg",
  "/homepage/gallery2.jpg",
  "/homepage/gallery3.jpg"
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box
      position="relative"
      width="100%"
      minHeight="100vh"
      background="linear-gradient(180deg, rgba(0, 0, 0, 0) 55.45%, #000000 82.6%),
                  linear-gradient(180deg, rgba(0, 0, 0, 0.9) -7.68%, rgba(0, 0, 0, 0) 100%), 
                  url('/image.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      overflow="hidden"
      paddingY="5%"
    >
      <Box
        position="absolute"
        width="895px"
        height="895px"
        left="-448px"
        top="50%"
        transform="translateY(-50%)"
        background="radial-gradient(50% 50% at 50% 50%, #1B255E 0%, rgba(27, 37, 94, 0) 100%)"
        filter="blur(100px)"
        zIndex="0"
      />

      <Box
        position="absolute"
        width="895px"
        height="895px"
        right="-447px"
        top="70%"
        background="radial-gradient(50% 50% at 50% 50%, #1B255E 0%, rgba(27, 37, 94, 0) 100%)"
        filter="blur(100px)"
        zIndex="0"
      />

      {/*Content Section*/}
      <Flex
        maxWidth="80%"
        margin="auto"
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        mb="5%"
        position="relative"
        zIndex="1"
      >
        <Flex direction="column" gap="10px" flex="1">
          <Text fontSize={{ base: "20px", md: "27px" }} color="#D8D8D8" fontFamily="Nasalization">
            ABOUT US
          </Text>
          <Text fontSize={{ base: "30px", md: "30px" }} color="#FFFFFF" fontFamily="Nasalization">
            We design leo <br />
            spacecrafts for <br />
            space tourism
          </Text>
          <Text fontSize={{ base: "20px", md: "27px" }} color="#FFFFFF" fontFamily="Nasalization">
            WHO ARE WE?
          </Text>
        </Flex>

        <Box flex="1" maxWidth="600px" fontSize={{ base: "16px", md: "20px" }} color="#FFFFFF" fontFamily="Nasalization">
          Politorbital team is a university team from Politecnico di Torino,
          born in 2020, focused on designing suborbital spacecrafts for space
          tourism.<br /><br />
          The team consists of more than 50 students passionate about space.
        </Box>
      </Flex>

      {/*Image with Arrows*/}
      <Flex justify="center" align="center" maxWidth="80%" margin="auto" position="relative" zIndex="1">
        <IconButton
          aria-label="Previous Image"
          icon={<ChevronLeftIcon />}
          position="absolute"
          left="-50px"
          top="50%"
          transform="translateY(-50%)"
          zIndex="2"
          background="rgba(255,255,255,0.2)"
          _hover={{ background: "rgba(255,255,255,0.4)" }}
          onClick={handlePrev}
        />
        
        <Box width="100%" height="auto" textAlign="center">
          <Image
            src={images[currentIndex]}
            alt="Gallery"
            width="100%"
            height="auto"
            borderRadius="10px"
          />
        </Box>

        <IconButton
          aria-label="Next Image"
          icon={<ChevronRightIcon />}
          position="absolute"
          right="-50px"
          top="50%"
          transform="translateY(-50%)"
          zIndex="2"
          background="rgba(255,255,255,0.2)"
          _hover={{ background: "rgba(255,255,255,0.4)" }}
          onClick={handleNext}
        />
      </Flex>

      {/*Mission Vision*/}
      <Flex maxWidth="80%" margin="auto" direction={{ base: "column", md: "row" }} justify="space-between" mt="5%" gap="20px">
        <Box flex="1">
          <Text fontSize="20px" color="#FFFFFF" fontFamily="Nasalization">OUR MISSION</Text>
          <Text fontSize="18px" color="#FFFFFF">
            The mission of the team is to...
          </Text>
        </Box>

        <Box flex="1">
          <Text fontSize="20px" color="#FFFFFF" fontFamily="Nasalization">OUR VISION</Text>
          <Text fontSize="18px" color="#FFFFFF">
            The vision of the team is to...
          </Text>
        </Box>
      </Flex>

      {/*Separator Line*/}
      <Box width="80%" height="1px" backgroundColor="white" mt="5%" mx="auto" />
    </Box>
  );
};

export default GallerySection;


