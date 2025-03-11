import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  VStack,
  Link,
  useBreakpointValue,
  useColorModeValue,
  Grid,
  Heading,
  useToast,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import PropTypes from 'prop-types';
import { useState } from "react";

/**
 * @description Returns an object containing color values used in the application.
 * @author Licciardi Oscar
 * @returns {Object} An object with color properties.
 * @property {string} black - Hex code for black color.
 * @property {string} applyButton - Hex code for the apply button color.
 * @property {string} primary - Hex code for the primary background button color.
 */
export const getColors = () => ({
  black: "#000000", // Black
  applyButton: "#13263C", // Button Apply
  primary: "#13263C", // Primary Background Button
});

/* --------------------- FOOTER ---------------------------- */
/**
 * @description SocialIcons component renders a set of social media icons with links.
 * The icon size and gap between icons adjust based on the screen size.
 *
 * @returns {JSX.Element} A Flex container with social media icons as links.
 */
export const SocialIcons = () => {
  const iconSize = useBreakpointValue({ base: "24px", md: "2vw" });
  const socialLinks = [
    {
      href: "https://de.linkedin.com/company/politorbital",
      icon: "src/assets/icons/linkedin.svg",
      alt: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/politorbital_team/profilecard/?igsh=bnl4cTUyNGtlem85",
      icon: "src/assets/icons/instagram.svg",
      alt: "Instagram",
    },
    {
      href: "https://www.tiktok.com",
      icon: "src/assets/icons/tiktok.svg",
      alt: "TikTok",
    },
  ];

  return (
    <Flex align="center" gap={{ base: "15px", md: "2vw" }}>
      {socialLinks.map((social, index) => (
        <Link key={index} href={social.href} isExternal>
          <Box
            as="img"
            src={social.icon}
            alt={social.alt}
            width={iconSize}
            height={iconSize}
          />
        </Link>
      ))}
    </Flex>
  );
};

/**
 * @description AwardPlaceholders component renders a placeholder layout for award recognition.
 *
 * @returns {JSX.Element} A vertical stack containing a title and a grid of placeholder boxes.
 */
export const AwardPlaceholders = () => {
  return (
    <VStack align="flex-start" width="100%" spacing="2vh">
      <Text
        fontFamily="Nasalization"
        fontSize={{ base: "18px", md: "2vw" }}
        color="#FFFFFF"
      >
        Award recognition
      </Text>
      <Flex flexWrap="wrap" gap="10px" width="100%" justify="space-between">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <Box
              key={i}
              width={{ base: "calc(50% - 5px)", md: "8vw" }}
              height={{ base: "70px", md: "10vh" }}
              bg="#D9D9D9"
              mb={{ base: "10px", md: 0 }}
            />
          ))}
      </Flex>
    </VStack>
  );
};

/**
 * @description ContactForm component renders a contact form with an email input, a send button, and a message input box.
 *
 * @returns {JSX.Element} The rendered contact form component.
 */
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', message: '' };
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: 'Error',
        description: 'Please complete all required fields correctly.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
      });
      return;
    }
    
    setIsSubmitting(true);
    // TPDO - Submit form data to backend
    // This is a fake API call to simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
     
      toast({
        title: 'Message sent!',
        description: "We'll get back to you as soon as possible.",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
        variant: 'solid'
      });
      
      setFormData({
        email: '',
        message: ''
      });
    } catch {
      toast({
        title: 'Error sending message',
        description: "Please try again later.",
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <VStack 
      as="form" 
      onSubmit={handleSubmit}
      align="flex-start" 
      width="100%" 
      spacing="2vh"
      id="contact-section"
    >
      <Text
        fontFamily="Nasalization"
        fontSize={{ base: "18px", md: "2vw" }}
        color="#FFFFFF"
      >
        Contact us
      </Text>
      
      <Flex
        width="100%"
        flexDir={{ base: "column", md: "row" }}
        gap={{ base: "10px", md: "1vw" }}
      >
        <FormControl isInvalid={errors.email} flex="1">
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            height={{ base: "50px", md: "6vh" }}
            bg="#FFFFFF"
            borderRadius={{ base: "25px", md: "2vw" }}
            fontFamily="Space Grotesk"
            fontSize={{ base: "14px", md: "1.2vw" }}
            color="#000000"
            _placeholder={{ color: "#D8D8D8" }}
            borderColor={errors.email ? "red.500" : "transparent"}
            _hover={{ borderColor: errors.email ? "red.500" : "gray.300" }}
          />
          {errors.email && (
            <FormErrorMessage fontSize={{ base: "12px", md: "0.8vw" }}>
              {errors.email}
            </FormErrorMessage>
          )}
        </FormControl>
        
        <Button
          type="submit"
          width={{ base: "100%", md: "12vw" }}
          height={{ base: "50px", md: "6vh" }}
          bg="#13263C"
          border="1px solid white"
          borderRadius={{ base: "25px", md: "2vw" }}
          fontFamily="Nasalization"
          fontSize={{ base: "14px", md: "1.2vw" }}
          color="#FFFFFF"
          textTransform="uppercase"
          isLoading={isSubmitting}
          loadingText="Sending"
          _hover={{ bg: "#1d3b5c" }}
          _active={{ bg: "#0e1a29" }}
        >
          Send
        </Button>
      </Flex>
      
      <FormControl isInvalid={errors.message}>
        <Box
          width="100%"
          height={{ base: "120px", md: "15vh" }}
          bg="#FFFFFF"
          borderRadius={{ base: "15px", md: "2vw" }}
          p={{ base: "15px", md: "3vh 3vh 1vh" }}
          borderColor={errors.message ? "red.500" : "transparent"}
          borderWidth={errors.message ? "1px" : "0"}
        >
          <Input
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            width="100%"
            height="100%"
            fontFamily="Space Grotesk"
            fontSize={{ base: "14px", md: "1.2vw" }}
            color="#000000"
            border="none"
            _placeholder={{ color: "#D8D8D8" }}
          />
        </Box>
        {errors.message && (
          <FormErrorMessage fontSize={{ base: "12px", md: "0.8vw" }}>
            {errors.message}
          </FormErrorMessage>
        )}
      </FormControl>
    </VStack>
  );
};
/* --------------------- DIVISION DETAILS ---------------------------- */
const colors = {
  primary: getColors().primary,
  black: getColors().black,
};

export const renderHeading = () => (
  <Text
    fontFamily="Nasalization"
    fontWeight="400"
    fontSize={["6vw", "4vw", "2.5vw"]}
    lineHeight={["7vw", "5vw", "3.24vw"]}
    color="#FFFFFF"
    textAlign="left"
    mb="1rem"
  >
    MANAGEMENT
  </Text>
);

export const renderImageBox = () => (
  <Box bg={colors.black}>
    <Text
      color="#FFFFFF"
      fontFamily="Space Grotesk"
      fontSize={["5vw", "4vw", "2vw"]}
      fontWeight="700"
      textAlign="center"
    >
      PHOTO
    </Text>
  </Box>
);
// TODO Replace test text with actual data
export const renderDescription = () => (
  <Text
    fontFamily="Space Grotesk"
    fontWeight="400"
    fontSize={["4vw", "3vw", "1.39vw"]}
    lineHeight={["5vw", "4vw", "1.81vw"]}
    textAlign="left"
    color="#FFF8F8"
    mb="1rem"
    width={["100%", "80%", "50%"]}
  >
    The Management Subdivision oversees project coordination, team organization,
    and resource allocation. We ensure smooth communication, track progress, and
    keep the team aligned with our goals to deliver successful outcomes.
  </Text>
);

export const renderMembersGrid = () => {
  const members = [
    "MEMBERS",
    "",
    "",
    "Alessandro Rossi",
    "Giulia Bianchi",
    "Matteo Rossi",
    "Sofia Russo",
    "Lorenzo Esposito",
    "Martina Conti",
    "Alessandro Romano",
    "Chiara Gallo",
    "Marco De Luca",
  ];

  return (
    <Box
      bg={colors.black}
      borderRadius="1rem"
      padding="1rem"
      mb="2rem"
      width={["100%", "70%", "40%"]}
    >
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]}
        gap={2}
        width="100%"
      >
        {members.map((name, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="0.5rem"
          >
            <Text
              color="#FFFFFF"
              fontFamily="Space Grotesk"
              fontSize={["4vw", "2.5vw", "1vw"]}
              fontWeight={index === 0 ? "700" : "400"}
              textAlign={index === 0 ? "left" : "center"}
              width="100%"
            >
              {name}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

/* --------------------- WORK WITH US PAGE ---------------------------- */
/**
 * ValueCard component displays a card with a number and description.
 * @author Licciardi Oscar
 * @param {Object} props - The properties object.
 * @param {number} props.number - The number to display in the card.
 * @param {string} props.description - The description to display in the card.
 * @returns {JSX.Element} The rendered ValueCard component.
 */

export const ValueCard = ({ number, description }) => {
  const bgColor = useColorModeValue("gray.800", "gray.700");
  const textColor = useColorModeValue("gray.300", "gray.200");

  return (
    <Box p={6} bg={bgColor} color={textColor} borderRadius="md" height="100%">
      <Heading as="h3" size="md" mb={4} color="white">
        VALUE {number}
      </Heading>
      <Text fontSize="sm">{description}</Text>
    </Box>
  );
};

ValueCard.propTypes = {
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

/**
 * AboutSection component renders a section with a heading and a subtext.
 * @author Licciardi Oscar
 * @param {Object} props - The properties object.
 * @param {string} props.aboutText - The main text to be displayed as the heading.
 * @param {string} props.subText - The subtext to be displayed below the heading.
 * @returns {JSX.Element} The rendered AboutSection component.
 */
export const AboutSection = ({ aboutText, subText }) => {
  return (
    <VStack align="start" spacing={2} mb={8}>
      <Heading
        as="h2"
        size="xl"
        color="white"
        fontWeight="medium"
        lineHeight="1.2"
      >
        {aboutText}
      </Heading>
      <Text color="gray.300" fontSize="sm">
        {subText}
      </Text>
    </VStack>
  );
};


AboutSection.propTypes = {
  aboutText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
};