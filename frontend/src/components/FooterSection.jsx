import React from 'react';
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  VStack,
  HStack,
  Link,
  Icon,
  Center,
} from '@chakra-ui/react';

const SocialIcons = () => {
  return (
    <Box display="flex" alignItems="center" gap="2vw">
      <Link href="https://www.instagram.com/politorbital_team/profilecard/?igsh=bnl4cTUyNGtlem85" isExternal>
        <Icon as={() => <img src="/icons/instagram-fill.svg" alt="Instagram" />} boxSize="2vw" />
      </Link>
      <Link href="https://www.linkedin.com/company/politorbital/" isExternal>
        <Icon as={() => <img src="/icons/linkedin-in.svg" alt="LinkedIn" />} boxSize="2vw" />
      </Link>
      <Link href="https://www.tiktok.com" isExternal>
        <Icon as={() => <img src="/icons/tiktok.svg" alt="TikTok" />} boxSize="2vw" />
      </Link>
    </Box>
  );
};

const FooterSection = () => {
  return (
    <Box
      position="relative"
      width="100vw"
      maxW="1440px"
      height={{ base: 'auto', md: '513px' }}
      bg="#13263C"
      overflow="hidden"
      p={{ base: '2vw', md: '0' }}
    >
      {/*Background*/}
      <Box
        position="absolute"
        width="1440px"
        height="863px"
        left="calc(50% - 1440px/2 + 1440px)"
        top="calc(50% - 863px/2 + 116px)"
        bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 55.45%, #000000 82.6%), linear-gradient(180deg, rgba(0, 0, 0, 0.9) -7.68%, rgba(0, 0, 0, 0) 100%)"
        transform="matrix(-1, 0, 0, 1, 0, 0)"
      />

      
      <Box
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
        position="absolute"
        width="466px"
        height="460px"
        left="1057px"
        top="100.14px"
        bg="radial-gradient(61.59% 65.18% at 50% 50%, #509DC4 6%, #2984BD 19%, #215B88 42%, #1C466D 57%, #183152 75%)"
        opacity="0.71"
        filter="blur(17.3px)"
        transform="rotate(-12.41deg)"
      />

      {/*Lines*/}
      <Box
        position="absolute"
        width={{ base: '90%', md: '1140px' }}
        height="0px"
        left="50%"
        top="30px"
        border="1px solid #FFFFFF"
        transform="translateX(-50%)"
      />
      <Box
        position="absolute"
        width={{ base: '90%', md: '1140px' }}
        height="0px"
        left="50%"
        top="399px"
        border="1px solid #FFFFFF"
        transform="translateX(-50%)"
      />

      {/*POLITORBITAL Text, Social Icons, and Copyright Text*/}
      <Flex
        position="absolute"
        left="50%"
        top="453px"
        alignItems="center"
        gap="40px"
        transform="translateX(-50%)"
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
      >
        <Text fontFamily="Nasalization" fontSize={{ base: '20px', md: '24px' }} color="#FFFFFF">
          POLITORBITAL
        </Text>
        <SocialIcons />
        <Text fontFamily="Space Grotesk" fontWeight="700" fontSize={{ base: '12px', md: '16px' }} color="#FFFFFF">
          Copyright © 2024 Politorbital
        </Text>
      </Flex>

      {/*Contact us Form*/}
      <Center>
        <HStack position="absolute" top="136px" spacing="2vw">
          <VStack width={{ base: '90vw', md: '35vw' }}>
            <Text marginLeft="0" marginRight="auto" fontFamily="Nasalization" fontSize="2vw" color="#FFFFFF">
              Contact us
            </Text>
            <HStack spacing="1vw" width="100%">
              <Input
                placeholder="Enter your email"
                width="100%"
                height="6vh"
                bg="#FFFFFF"
                borderRadius="2vw"
                fontFamily="Space Grotesk"
                fontSize="1.2vw"
                color="#D8D8D8"
              />
              <Button
                width="12vw"
                height="6vh"
                bg="#13263C"
                borderRadius="2vw"
                fontFamily="Nasalization"
                fontSize="1.2vw"
                color="#FFFFFF"
                textTransform="uppercase"
              >
                Submit
              </Button>
            </HStack>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              padding="3vh 3vh 1vh"
              gap="1vw"
              width="100%"
              height="15vh"
              bg="#FFFFFF"
              borderRadius="2vw"
            >
              <Input
                placeholder="Enter your message"
                width="100%"
                height="2vh"
                fontFamily="Space Grotesk"
                fontStyle="normal"
                fontWeight="400"
                fontSize="1.2vw"
                lineHeight="1.2vw"
                color="#D8D8D8"
                border="none"
                _placeholder={{ color: '#D8D8D8' }}
              />
            </Box>
          </VStack>
          <VStack>
            {/*Placeholders for Images*/}
            <Box width="35vw" height="12vh" marginBottom="6vh">
              <Text marginBottom="1vh" marginLeft="0" marginRight="auto" fontFamily="Nasalization" fontSize="2vw" color="#FFFFFF">
                Award recognition
              </Text>
              <HStack spacing="2vw">
                <Box width="8vw" height="10vh" bg="#D9D9D9" />
                <Box width="8vw" height="10vh" bg="#D9D9D9" />
                <Box width="8vw" height="10vh" bg="#D9D9D9" />
                <Box width="8vw" height="10vh" bg="#D9D9D9" />
              </HStack>
            </Box>
            <Box width="35vw" height="12vh">
              <HStack spacing="2vw">
                <Box width="8vw" height="10vh" bg="#D9D9D9" />
                <Box width="8vw" height="10vh" bg="#D9D9D9" />
                <Box width="8vw" height="10vh" bg="#D9D9D9" />
                <Box width="8vw" height="10vh" bg="#D9D9D9" />
              </HStack>
            </Box>
          </VStack>
        </HStack>
      </Center>
    </Box>
  );
};

export default FooterSection;


