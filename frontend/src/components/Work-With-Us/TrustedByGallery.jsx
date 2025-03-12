import { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  IconButton,
  useBreakpointValue,
  Grid,
  Container
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { m } from 'framer-motion';

/**
 * TrustedByGallery component displays a gallery of logos in a carousel format.
 * Users can navigate through the slides using left and right arrows or by clicking on slide indicators.
 * @author Licciardi Oscar
 * @component
 * @example
 * return (
 *   <TrustedByGallery />
 * )
 * 
 * @returns {JSX.Element} A component that renders a gallery of logos.
 */
const TrustedByGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // TODO  Sample logo data - replace with your actual logos
  const logoSlides = [
    // First slide with 8 logos (4 per row)
    {
      topRow: [
        { id: 1, src: "assets/WorkWithUs/logo.svg", alt: "Logo 1" },
        { id: 2, src: "assets/WorkWithUs/logo.svg", alt: "Logo 2" },
        { id: 3, src: "assets/WorkWithUs/logo.svg", alt: "Logo 3" },
        { id: 4, src: "assets/WorkWithUs/logo.svg", alt: "Logo 4" }
      ],
      bottomRow: [
        { id: 5, src: "assets/WorkWithUs/logo.svg", alt: "Logo 5" },
        { id: 6, src: "assets/WorkWithUs/logo.svg", alt: "Logo 6" },
        { id: 7, src: "assets/WorkWithUs/logo.svg", alt: "Logo 7" },
        { id: 8, src: "assets/WorkWithUs/logo.svg", alt: "Logo 8" }
      ]
    },
    // Second slide with 8 more logos (4 per row)
    {
      topRow: [
        { id: 9, src: "assets/WorkWithUs/logo.svg", alt: "Logo 9" },
        { id: 10, src: "assets/WorkWithUs/logo.svg", alt: "Logo 10" },
        { id: 11, src: "assets/WorkWithUs/logo.svg", alt: "Logo 11" },
        { id: 12, src: "assets/WorkWithUs/logo.svg", alt: "Logo 12" }
      ],
      bottomRow: [
        { id: 13, src: "assets/WorkWithUs/logo.svg", alt: "Logo 13" },
        { id: 14, src: "assets/WorkWithUs/logo.svg", alt: "Logo 14" },
        { id: 15, src: "assets/WorkWithUs/logo.svg", alt: "Logo 15" },
        { id: 16, src: "assets/WorkWithUs/logo.svg", alt: "Logo 16" }
      ]
    }
  ];

  const totalSlides = logoSlides.length;
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

    const logoSize = useBreakpointValue({ base: "36px", md: "40px" });

/**
 * 
 * @description This function renders a row of logos inside a grid.
 * @param {Array} logos - An array of logo objects to be displayed.
 * @param {string} logos[].id - The unique identifier for the logo.
 * @param {string} logos[].src - The source URL of the logo image.
 * @param {string} logos[].alt - The alt text for the logo image.
 * @param {string} [logoSize] - The maximum height of the logo image.
 * @returns {JSX.Element} A grid containing the logos.
 */
  const renderLogoRow = (logos) => (
    <Grid 
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} 
      gap={6}
      width="100%"
      mb={6}
    >
      {logos.map((logo) => (
        <Flex 
          key={logo.id} 
          justifyContent="center" 
          alignItems="center"
          height="60px"
        >
          <Image 
            src={logo.src} 
            alt={logo.alt} 
            maxH={logoSize} 
            filter="brightness(0) invert(1)"
            opacity={0.8}
            _hover={{ opacity: 1 }}
            transition="opacity 0.3s"
          />
        </Flex>
      ))}
    </Grid>
  );

  return (
    <Box bg="black" pt={10} pb={16} width="100%">
      <Container maxW="1200px">
        <Text 
          color="white" 
          fontSize="xl" 
          fontWeight="bold" 
          mb={10} 
          ml={4}
        >
          Trusted by:
        </Text>
        
        <Flex position="relative" align="center" justify="center">
          {/* Left Navigation Arrow - BIGGER */}
          <IconButton
            aria-label="Previous logos"
            icon={<ChevronLeftIcon boxSize={12} />}
            onClick={prevSlide}
            position="absolute"
            left={-4}
            zIndex={2}
            variant="ghost"
            color="white"
            _hover={{ bg: "whiteAlpha.100" }}
            size="lg"
            height="100%"
            borderRadius="0"
          />
          
          {/* Logos Display with Two Rows */}
          <Box 
            width="100%" 
            overflow="hidden"
            px={{ base: 10, md: 16 }}
          >
            {/* Only show current slide */}
            {logoSlides.map((slide, index) => (
              <Box 
                key={index}
                display={currentSlide === index ? "block" : "none"}
                px={4}
              >
                {/* Top row */}
                {renderLogoRow(slide.topRow)}
                
                {/* Bottom row */}
                {renderLogoRow(slide.bottomRow)}
              </Box>
            ))}
          </Box>
          
          {/* Right Navigation Arrow - BIGGER */}
          <IconButton
            aria-label="Next logos"
            icon={<ChevronRightIcon boxSize={12} />}
            onClick={nextSlide}
            position="absolute"
            right={-4}
            zIndex={2}
            variant="ghost"
            color="white"
            _hover={{ bg: "whiteAlpha.100" }}
            size="lg"
            height="100%"
            borderRadius="0"
          />
        </Flex>
        
        {/* Slide Indicators */}
        <Flex justify="center" mt={6}>
          {logoSlides.map((_, index) => (
            <Box
              key={index}
              h="8px"
              w="8px"
              borderRadius="full"
              mx={1}
              bg={currentSlide === index ? "white" : "whiteAlpha.400"}
              cursor="pointer"
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default TrustedByGallery;