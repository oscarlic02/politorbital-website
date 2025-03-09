import { Box, Button, Text, Center } from "@chakra-ui/react";

/**
 * DiscoverIdeas component renders a section with a background gradient,
 * a logo, team name, slogan, and a discover button.
 * @author Licciardi Oscar
 * @component
 * @example
 * return (
 *   <DiscoverIdeas />
 * )
 *
 * @returns {JSX.Element} The DiscoverIdeas component.
 */
const DiscoverIdeas = () => {
  return (
    <Box
      as="section"
      width="100%"
      height="100vh"
      bgGradient="linear(to-b, #001324, #000810)"
      position="relative"
      overflow="hidden"
    >
      {/* Background glow effects */}
      <Box
        position="absolute"
        width="40%"
        height="40%"
        left="30%"
        top="10%"
        bgGradient="radial(circle, rgba(23,97,148,0.2) 0%, transparent 70%)"
        opacity="0.6"
        zIndex="1"
      />
      
      {/* Logo and text content */}
      <Center 
        flexDirection="column" 
        height="100%" 
        width="100%" 
        position="relative" 
        zIndex="2"
      >
        {/* Logo */}
        <Box mb={6}>
            <img src="../../assets/logo.svg" alt="Rocket Icon" />
        </Box>        
        {/* Team Name */}
        <Text 
          fontSize="3xl" 
          fontWeight="bold" 
          letterSpacing="wider" 
          color="white" 
          mb={2}
          textTransform="uppercase"
        >
          POLITORBITAL TEAM
        </Text>
        
        {/* Slogan */}
        <Text 
          fontSize="sm" 
          color="white"
          letterSpacing="wide" 
          textAlign="center"
          textTransform="uppercase"
          mb={12}
        >
          WE DESIGN OF LEO SPACECRAFTS
          <br />
          FOR SPACE TOURISM
        </Text>
        
        {/* Discover button */}
        <Button
          color="white"
          bg="transparent"
          borderRadius="full"
          px={8}
          py={6}
          fontSize="sm"
          fontWeight="medium"
          letterSpacing="wide"
          position="relative"
          overflow="hidden"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
          }}
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
            borderRadius: "full",
            bgGradient: "linear(to-r, #0a4c81, #0f6baf)",
            transition: "all 0.3s ease"
          }}
          _after={{
            content: '""',
            position: "absolute",
            top: "1px",
            right: "1px",
            bottom: "1px",
            left: "1px",
            zIndex: -1,
            borderRadius: "full",
            bgGradient: "linear(to-r, #051c30, #084373)",
            transition: "all 0.3s ease"
          }}
        >
          Discover our space ideas
        </Button>
      </Center>
    </Box>
  );
};

export default DiscoverIdeas;