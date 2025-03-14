import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

/**
 * GalleryView component displays a scrollable gallery of images with navigation buttons and dot indicators.
 * Users can navigate through the images using the left and right buttons or by clicking on the dots.
 * The component receives an array of view objects as props, each containing an image, title, and description.
 * The gallery displays the images with their respective titles and descriptions in a scrollable container.
 * @author Licciardi Oscar
 * @component
 * @param {Object[]} views - Array of view objects to display in the gallery.
 * @param {string} views[].image - URL of the image to display.
 * @param {string} views[].title - Title of the image.
 * @param {string} views[].description - Description of the image.
 *
 * @example
 * const views = [
 *   { image: 'url1', title: 'Title 1', description: 'Description 1' },
 *   { image: 'url2', title: 'Title 2', description: 'Description 2' },
 * ];
 * <GalleryView views={views} />
 */
const GalleryView = ({ views }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollRef = useRef(null);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === views.length - 1 ? 0 : prevIndex + 1
    );
    
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: (currentImageIndex + 1) % views.length * scrollRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? views.length - 1 : prevIndex - 1
    );
    
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: (currentImageIndex === 0 ? views.length - 1 : currentImageIndex - 1) * scrollRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
    
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box position="relative">
      {/* Navigation Buttons */}
      <Button
        position="absolute"
        left="2"
        top="50%"
        transform="translateY(-50%)"
        zIndex="2"
        onClick={prevImage}
        size="sm"
        borderRadius="full"
        bg="blackAlpha.700"
        color="white"
        _hover={{ bg: "blackAlpha.800" }}
      >
        <ChevronLeftIcon w={6} h={6} />
      </Button>
      
      <Button
        position="absolute"
        right="2"
        top="50%"
        transform="translateY(-50%)"
        zIndex="2"
        onClick={nextImage}
        size="sm"
        borderRadius="full"
        bg="blackAlpha.700"
        color="white"
        _hover={{ bg: "blackAlpha.800" }}
      >
        <ChevronRightIcon w={6} h={6} />
      </Button>

      {/* Scrollable Image Container */}
      <Box
        ref={scrollRef}
        overflowX="hidden"
        whiteSpace="nowrap"
        css={{
          scrollbarWidth: 'none',
          '::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {views.map((view, index) => (
          <Box
            key={index}
            display="inline-flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            w="100%"
            px={8}
            py={6}
            color="white"
            whiteSpace="normal"
          >
            <Image
              src={view.image}
              alt={view.title}
              maxW="100%"
              h="auto"
              mb={4}
            />
            <Text 
              fontWeight="medium" 
              fontSize="lg" 
              mb={2}
            >
              {view.title}
            </Text>
            <Text 
              fontSize="sm" 
              color="gray.300" 
              textAlign="center"
              maxW="md"
              mx="auto"
            >
              {view.description}
            </Text>
          </Box>
        ))}
      </Box>

      {/* Dot Indicators */}
      <Flex justify="center" mt={4} mb={6}>
        {views.map((_, index) => (
          <Box
            key={index}
            w="2"
            h="2"
            borderRadius="full"
            bg={currentImageIndex === index ? "yellow.300" : "gray.500"}
            mx="1"
            cursor="pointer"
            onClick={() => handleDotClick(index)}
            transition="background-color 0.3s ease"
          />
        ))}
      </Flex>
    </Box>
  );
};


GalleryView.propTypes = {
  views: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GalleryView;