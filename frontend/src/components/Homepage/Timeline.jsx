import { Box, Flex, Text, VStack, Center } from "@chakra-ui/react";
import PropTypes from 'prop-types';

const TimelineItem = ({ year, title, description, isLeft, isLast }) => (
  <Flex position="relative" w="full" justify="center" py={12}> 
    {!isLast && (
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translateX(-50%)"
        width="2px"
        height="120%" 
        bg="rgba(255,255,255,0.3)"
        zIndex={1}
      />
    )}
    
    <Flex w="full" justify="space-between" align="center" position="relative">
      <Box w="45%" textAlign={isLeft ? "right" : "center"} pr={isLeft ? 6 : 0} visibility={isLeft ? "visible" : "hidden"}>
        <Text fontSize="lg" fontWeight="bold" color="white">
          {year} - {title}
        </Text>
        <Text color="gray.300" fontSize="sm" mt={1}>
          {description}
        </Text>
        <Text color="yellow.400" fontSize="xs" fontWeight="bold" mt={2} cursor="pointer">
          LEARN MORE
        </Text>
      </Box>
      
      <Center position="relative" w="10%" zIndex={2}>
        <Box 
          w="10px" 
          h="10px" 
          borderRadius="full" 
          bg="white" 
          position="relative" 
          zIndex={3}
          boxShadow="0 0 0 2px rgba(255,255,255,0.2)"
        />
        
        <Box
          position="absolute"
          top="50%"
          width="50px"
          height="2px"
          bg="rgba(255,255,255,0.3)"
          transform="translateY(-50%)"
          left={isLeft ? "auto" : "50%"}
          right={isLeft ? "50%" : "auto"}
        />
      </Center>

      <Box w="45%" textAlign={!isLeft ? "left" : "center"} pl={!isLeft ? 6 : 0} visibility={!isLeft ? "visible" : "hidden"}>
        <Text fontSize="lg" fontWeight="bold" color="white">
          {year} - {title}
        </Text>
        <Text color="gray.300" fontSize="sm" mt={1}>
          {description}
        </Text>
        <Text color="yellow.400" fontSize="xs" fontWeight="bold" mt={2} cursor="pointer">
          LEARN MORE
        </Text>
      </Box>
    </Flex>
  </Flex>
);

const Timeline = () => {
  const events = [
    { year: "2024", title: "ABC", description: "Augue congue turpis ut purus ut nibh sit. Et consectetur elit.", isLeft: true },
    { year: "2024", title: "ABC", description: "Augue congue turpis ut purus ut nibh sit. Et consectetur elit.", isLeft: false },
    { year: "2024", title: "ABC", description: "Augue congue turpis ut purus ut nibh sit. Et consectetur elit.", isLeft: true },
    { year: "2024", title: "ABC", description: "Augue congue turpis ut purus ut nibh sit. Et consectetur elit.", isLeft: false },
    { year: "2024", title: "ABC", description: "Augue congue turpis ut purus ut nibh sit. Et consectetur elit.", isLeft: true },
  ];

  return (
    <Box bgGradient="linear(to-b, gray.900, black)" minH="100vh" py={12} px={4}>
      <VStack spacing={6} mb={16}> 
        <Text fontSize="sm" fontWeight="medium" color="gray.400" letterSpacing="wider" textTransform="uppercase">
          OUR TIMELINE
        </Text>
        <Text fontSize="3xl" fontWeight="bold" color="white" textAlign="center">
          An innovation history
        </Text>
        <Text fontSize="3xl" fontWeight="bold" color="white" textAlign="center" mt="-2">
          written day by day
        </Text>
      </VStack>

      <Box position="relative" maxW="1200px" mx="auto" px={8} py={4}>
        {events.map((event, index) => (
          <TimelineItem 
            key={index} 
            {...event} 
            isLast={index === events.length - 1}
          />
        ))}
      </Box>
    </Box>
  );
};

TimelineItem.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isLeft: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
};

export default Timeline;