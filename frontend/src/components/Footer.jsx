import {
  Box,
  Flex,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { SocialIcons,AwardPlaceholders,ContactForm } from '../utils/utils';
/**
 * @description Footer component renders the footer section of the website.
 * Optimized for functional programming and mobile responsiveness.
 * @returns {JSX.Element} The rendered footer section component.
 */
const Footer = () => {
  const footerHeight = useBreakpointValue({ base: 'auto', md: '513px' });
  const dividerWidth = useBreakpointValue({ base: '90%', md: '1140px' });
  
  return (
    <Box
      position="relative"
      width="100%"
      height={footerHeight}
      bg="#13263C"
      overflow="hidden"
      p={{ base: '20px', md: '0' }}
    >
      {/* Background gradients */}
      <Box
        position="absolute"
        width="100%"
        height="100%"
        left="0"
        top="0"
        bg="linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)"
        zIndex="0"
      />
      
      <Box
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        width="466px"
        height="460px"
        left="-162.83px"
        top="345.63px"
        bg="radial-gradient(61.59% 65.18% at 50% 50%, #509DC4 6%, #2984BD 19%, #215B88 42%, #1C466D 57%, #183152 75%)"
        opacity="0.71"
        filter="blur(17.3px)"
        transform="rotate(-12.41deg)"
      />

      <Box
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        width="466px"
        height="460px"
        right="-100px"
        top="100.14px"
        bg="radial-gradient(61.59% 65.18% at 50% 50%, #509DC4 6%, #2984BD 19%, #215B88 42%, #1C466D 57%, #183152 75%)"
        opacity="0.71"
        filter="blur(17.3px)"
        transform="rotate(-12.41deg)"
      />

      {/* Horizontal dividers */}
      <Flex direction="column" position="relative" height="100%" zIndex="1">
        <Box
          width={dividerWidth}
          height="1px"
          bg="#FFFFFF"
          mx="auto"
          mt={{ base: "10px", md: "30px" }}
        />
        
        {/* Main content area */}
        <Flex 
          direction={{ base: "column", md: "row" }}
          justify="center"
          p={{ base: "20px", md: "40px" }}
          gap={{ base: "30px", md: "40px" }}
        >
          <Box width={{ base: "100%", md: "45%" }}>
            <ContactForm />
          </Box>
          
          <Box width={{ base: "100%", md: "45%" }}>
            <AwardPlaceholders />
          </Box>
        </Flex>
        
        <Box
          width={dividerWidth}
          height="1px"
          bg="#FFFFFF"
          mx="auto"
          mt={{ base: "10px", md: "auto" }}
          mb={{ base: "20px", md: "60px" }}
        />
        
        {/* Footer bottom section */}
        <Flex
          justify="space-between"
          align="center"
          wrap={{ base: "wrap", md: "nowrap" }}
          px={{ base: "10px", md: "40px" }}
          pb={{ base: "20px", md: "30px" }}
          gap={{ base: "15px", md: "0" }}
        >
          <Text 
            fontFamily="Nasalization" 
            fontSize={{ base: '18px', md: '24px' }} 
            color="#FFFFFF"
            order={{ base: 1, md: 1 }}
            width={{ base: "100%", md: "auto" }}
            textAlign={{ base: "center", md: "left" }}
          >
            POLITORBITAL
          </Text>
          
          <Flex 
            justify={{ base: "center", md: "flex-end" }}
            order={{ base: 2, md: 2 }}
            width={{ base: "100%", md: "auto" }}
          >
            <SocialIcons />
          </Flex>
          
          <Text 
            fontFamily="Space Grotesk" 
            fontWeight="700" 
            fontSize={{ base: '12px', md: '16px' }} 
            color="#FFFFFF"
            order={{ base: 3, md: 3 }}
            width={{ base: "100%", md: "auto" }}
            textAlign={{ base: "center", md: "right" }}
          >
            Copyright © 2024 Politorbital
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;