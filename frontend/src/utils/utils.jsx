
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  VStack,
  Link,
  useBreakpointValue,
  Grid,
} from '@chakra-ui/react';  

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
    primary:'#13263C' // Primary Background Button
  });
  


/* --------------------- FOOTER ---------------------------- */
/**
 * @description SocialIcons component renders a set of social media icons with links.
 * The icon size and gap between icons adjust based on the screen size.
 *
 * @returns {JSX.Element} A Flex container with social media icons as links.
 */
export const SocialIcons = () => {
  const iconSize = useBreakpointValue({ base: '24px', md: '2vw' });
  const socialLinks = [
    { href: "https://de.linkedin.com/company/politorbital", icon: "src/assets/icons/linkedin.svg", alt: "LinkedIn" },
    { href: "https://www.instagram.com/politorbital_team/profilecard/?igsh=bnl4cTUyNGtlem85", icon: "src/assets/icons/instagram.svg", alt: "Instagram" },
    { href: "https://www.tiktok.com", icon: "src/assets/icons/tiktok.svg", alt: "TikTok" },
  ];

  return (
    <Flex align="center" gap={{ base: "15px", md: "2vw" }}>
      {socialLinks.map((social, index) => (
        <Link key={index} href={social.href} isExternal>
          <Box as="img" src={social.icon} alt={social.alt} width={iconSize} height={iconSize} />
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
      <Text fontFamily="Nasalization" fontSize={{ base: "18px", md: "2vw" }} color="#FFFFFF">
        Award recognition
      </Text>
      <Flex flexWrap="wrap" gap="10px" width="100%" justify="space-between">
        {Array(8).fill(0).map((_, i) => (
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
  return (
    <VStack align="flex-start" width="100%" spacing="2vh">
      <Text fontFamily="Nasalization" fontSize={{ base: "18px", md: "2vw" }} color="#FFFFFF">
        Contact us
      </Text>
      <Flex 
        width="100%" 
        flexDir={{ base: "column", md: "row" }}
        gap={{ base: "10px", md: "1vw" }}
      >
        <Input
          placeholder="Enter your email"
          flex="1"
          height={{ base: "50px", md: "6vh" }}
          bg="#FFFFFF"
          borderRadius={{ base: "25px", md: "2vw" }}
          fontFamily="Space Grotesk"
          fontSize={{ base: "14px", md: "1.2vw" }}
          color="#D8D8D8"
        />
        <Button
          width={{ base: "100%", md: "12vw" }}
          height={{ base: "50px", md: "6vh" }}
          bg="#13263C"
          border="1px solid white"
          borderRadius={{ base: "25px", md: "2vw" }}
          fontFamily="Nasalization"
          fontSize={{ base: "14px", md: "1.2vw" }}
          color="#FFFFFF"
          textTransform="uppercase"
        >
          Send
        </Button>
      </Flex>
      <Box
        width="100%"
        height={{ base: "120px", md: "15vh" }}
        bg="#FFFFFF"
        borderRadius={{ base: "15px", md: "2vw" }}
        p={{ base: "15px", md: "3vh 3vh 1vh" }}
      >
        <Input
          placeholder="Enter your message"
          width="100%"
          height="100%"
          fontFamily="Space Grotesk"
          fontSize={{ base: "14px", md: "1.2vw" }}
          color="#D8D8D8"
          border="none"
          _placeholder={{ color: '#D8D8D8' }}
        />
      </Box>
    </VStack>
  );
};


/* --------------------- DIVISION DETAILS ---------------------------- */
const colors = {
  primary: getColors().primary,
  black: getColors().black
};

export const renderHeading = () => (
  <Text
    fontFamily="Nasalization"
    fontWeight="400"
    fontSize={['6vw', '4vw', '2.5vw']}
    lineHeight={['7vw', '5vw', '3.24vw']}
    color="#FFFFFF"
    textAlign="left"
    mb="1rem"
  >
    MANAGEMENT
  </Text>
);

export const renderImageBox = () => (
  <Box
    bg={colors.black}
  >
    <Text
      color="#FFFFFF"
      fontFamily="Space Grotesk"
      fontSize={['5vw', '4vw', '2vw']}
      fontWeight="700"
      textAlign="center"
    >
      PHOTO
    </Text>
  </Box>
);

export const renderDescription = () => (
  <Text
    fontFamily="Space Grotesk"
    fontWeight="400"
    fontSize={['4vw', '3vw', '1.39vw']}
    lineHeight={['5vw', '4vw', '1.81vw']}
    textAlign="left"
    color="#FFF8F8"
    mb="1rem"
    width={['100%', '80%', '50%']}
  >
    The Management Subdivision oversees project coordination, team organization, and resource allocation. We ensure smooth communication, track progress, and keep the team aligned with our goals to deliver successful outcomes.
  </Text>
);

export const renderMembersGrid = () => {
  const members = [
    'MEMBERS', '', '', 
    'Alessandro Rossi', 'Giulia Bianchi', 'Matteo Rossi',
    'Sofia Russo', 'Lorenzo Esposito', 'Martina Conti',
    'Alessandro Romano', 'Chiara Gallo', 'Marco De Luca'
  ];

  return (
    <Box
      bg={colors.black}
      borderRadius="1rem"
      padding="1rem"
      mb="2rem"
      width={['100%', '70%', '40%']}
    >
      <Grid
        templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']}
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
              fontSize={['4vw', '2.5vw', '1vw']} 
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