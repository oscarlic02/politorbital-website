import { useState, useCallback } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  IconButton,
  Container,
  useBreakpointValue,
  Divider
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { getColors } from "../../utils/utils";

const GALLERY_IMAGES = [
  "assets/HomePage/gallery1.jpg",
  "assets/HomePage/gallery2.jpg",
  "assets/HomePage/gallery3.jpg",
];
/**
 * About component renders the "About Us" section of the homepage.
 * It includes information about the team, a gallery of images, and sections for mission and vision.
 * @author Mohammadreza Hosseinifard
 * @component
 * @example
 * return (
 *   <About />
 * )
 *
 * @returns {JSX.Element} The rendered About component.
 *
 * @description
 * The About component uses Chakra UI for styling and layout. It includes responsive design adjustments
 * using `useBreakpointValue` for various elements such as arrow size, arrow position, section spacing,
 * and heading size. The component also includes a gallery with navigation arrows to cycle through images.
 *
 * @hook
 * @function useState - Manages the current index of the gallery images.
 * @function useBreakpointValue - Provides responsive values for various elements.
 * @function useCallback - Memoizes the handlePrev and handleNext functions for gallery navigation.
 *
 * @param {Object} props - The props object.
 * @param {Array} props.GALLERY_IMAGES - An array of image URLs for the gallery.
 * @param {Function} props.getColors - A function to get the theme colors.
 */
const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const colors = getColors();

  const arrowSize = useBreakpointValue({ base: "sm", md: "md" });
  const arrowPosition = useBreakpointValue({ base: "8px", md: "16px" });
  const sectionSpacing = useBreakpointValue({ base: "8%", md: "5%" });
  const headingSize = useBreakpointValue({ base: "24px", md: "30px" });

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? GALLERY_IMAGES.length - 1 : prevIndex - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === GALLERY_IMAGES.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  return (
    <Box
      position="relative"
      width="100%"
      minHeight={{ base: "auto", md: "100vh" }}
      py={sectionSpacing}
      bg={colors.black}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      overflow="hidden"
    >
      {/* Background gradients */}
      <Divider borderColor="gray.500" width="80%" mb={12} border={"1px"} />

      <Box
        position="absolute"
        width={{ base: "300px", md: "895px" }}
        height={{ base: "300px", md: "895px" }}
        left={{ base: "-150px", md: "-448px" }}
        top="50%"
        transform="translateY(-50%)"
        background={`radial-gradient(50% 50% at 50% 50%, ${colors.primary} 0%, rgba(27, 37, 94, 0) 100%)`}
        filter="blur(100px)"
        zIndex="0"
      />

      <Box
        position="absolute"
        width={{ base: "300px", md: "895px" }}
        height={{ base: "300px", md: "895px" }}
        right={{ base: "-150px", md: "-447px" }}
        top={{ base: "60%", md: "70%" }}
        background={`radial-gradient(50% 50% at 50% 50%, ${colors.primary} 0%, rgba(27, 37, 94, 0) 100%)`}
        filter="blur(100px)"
        zIndex="0"
      />

      {/* Content Container */}
      <Container maxW={{ base: "95%", sm: "90%", md: "85%", lg: "80%" }} px="0">
        {/* About Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "flex-start" }}
          justify="space-between"
          mb={{ base: "10%", md: "5%" }}
          gap={{ base: "6", md: "0" }}
          position="relative"
          zIndex="1"
        >
          <Flex
            direction="column"
            gap={{ base: "4", md: "10px" }}
            flex="1"
            mb={{ base: "6", md: "0" }}
          >
            <Text
              fontSize={{ base: "18px", sm: "20px", md: "27px" }}
              color="#FFFFFF"
              fontFamily="Nasalization"
            >
              ABOUT US
            </Text>
            <Text
              fontSize={{ base: "24px", sm: headingSize, md: "30px" }}
              color="#FFFFFF"
              fontFamily="Nasalization"
              lineHeight={{ base: "1.2", md: "1.3" }}
            >
              We design leo <br />
              spacecrafts for <br />
              space tourism
            </Text>
            <Text
              fontSize={{ base: "18px", sm: "20px", md: "27px" }}
              color="#FFFFFF"
              fontFamily="Nasalization"
              mt={{ base: "2", md: "4" }}
            >
              WHO ARE WE?
            </Text>
          </Flex>

          <Box
            flex="1"
            maxWidth={{ base: "100%", md: "600px" }}
            fontSize={{ base: "16px", md: "18px" }}
            color="#FFFFFF"
            mt={{ base: "0", md: "4" }}
          >
            Politorbital team is an university team from Politecnico di Torino
            born in 2020 for designing suborbital spacecrafts for space tourism.
            <Box height="20px" />
            The team is composed by more than 50 students, all united by the
            passion for space.
          </Box>
        </Flex>

        {/* Gallery Section */}
        <Box position="relative" zIndex="1" mb={{ base: "10%", md: "5%" }}>
          <Flex justify="center" align="center" position="relative">
            {/* Left arrow */}
            <IconButton
              aria-label="Previous Image"
              icon={<ChevronLeftIcon boxSize={{ base: 6, md: 10 }} />}
              position="absolute"
              left={arrowPosition}
              top="50%"
              transform="translateY(-50%)"
              zIndex="2"
              size={arrowSize}
              bg="transparent"
              color="white"
              _hover={{ background: "rgba(0,0,0,0.3)" }}
              onClick={handlePrev}
              borderRadius="full"
              border="2px solid white"
              w={{ base: "30px", md: "40px" }}
              h={{ base: "30px", md: "40px" }}
              minW="0"
              p="0"
            />

            <Box width="100%" height="auto" textAlign="center">
              <Image
                src={GALLERY_IMAGES[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                width="100%"
                height="auto"
                borderRadius="10px"
                objectFit="cover"
                maxH={{ base: "300px", md: "500px", lg: "600px" }}
              />
            </Box>

            {/* Right arrow */}
            <IconButton
              aria-label="Next Image"
              icon={<ChevronRightIcon boxSize={{ base: 6, md: 10 }} />}
              position="absolute"
              right={arrowPosition}
              top="50%"
              transform="translateY(-50%)"
              zIndex="2"
              size={arrowSize}
              bg="transparent"
              color="white"
              _hover={{ background: "rgba(0,0,0,0.3)" }}
              onClick={handleNext}
              borderRadius="full"
              border="2px solid white"
              w={{ base: "30px", md: "40px" }}
              h={{ base: "30px", md: "40px" }}
              minW="0"
              p="0"
            />
          </Flex>
        </Box>

        {/* Mission Vision Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          mt={{ base: "8%", md: "5%" }}
          gap={{ base: "8", md: "40px" }}
        >
          <Box flex="1" mb={{ base: "6", md: "0" }}>
            <Text
              fontSize={{ base: "18px", md: "20px" }}
              color="#FFFFFF"
              fontFamily="Nasalization"
              mb="2"
            >
              OUR MISSION
            </Text>
            <Text fontSize={{ base: "16px", md: "18px" }} color="#FFFFFF">
              The mission of the team is about
            </Text>
          </Box>

          <Box flex="1">
            <Text
              fontSize={{ base: "18px", md: "20px" }}
              color="#FFFFFF"
              fontFamily="Nasalization"
              mb="2"
            >
              OUR VISION
            </Text>
            <Text fontSize={{ base: "16px", md: "18px" }} color="#FFFFFF">
              The vision of the team is about
            </Text>
          </Box>
        </Flex>

        {/* Separator Line */}
        <Box
          width="100%"
          height="1px"
          backgroundColor="white"
          mt={{ base: "10%", md: "5%" }}
          opacity="0.7"
        />
      </Container>
    </Box>
  );
};

export default About;
