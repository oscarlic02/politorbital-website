import React from 'react';
import { Box, Text, Grid, Image } from '@chakra-ui/react';

const DivisionExplanation = () => {
  return (
    <Box
      position="relative"
      width="1440px"
      height="1311px"
      bg="#000000"
      left="0px"
      top="150px"
    >
      
      <Box
        width="1440px"
        height="1311px"
        bg="#13263C"
      >
        {/*=Background*/}
        <Box
          position="absolute"
          width="1440px"
          height="1814px"
          left="calc(50% - 1440px/2 + 1440px)"
          top="calc(50% - 1814px/2 + 247.5px)"
          bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 55.45%, #000000 82.6%), linear-gradient(180deg, rgba(0, 0, 0, 0.9) -7.68%, rgba(0, 0, 0, 0) 100%)"
          transform="matrix(-1, 0, 0, 1, 0, 0)"
        />

        
        <Box
          position="absolute"
          width="628px"
          height="620px"
          left="128px"
          top="764px"
          bg="radial-gradient(61.59% 65.18% at 50% 50%, #509DC4 6%, #2984BD 19%, #215B88 42%, #1C466D 57%, #183152 75%)"
          opacity="0.71"
          filter="blur(17.3px)"
          transform="rotate(-12.41deg)"
        />

        
        <Box
          position="absolute"
          width="466px"
          height="460px"
          left="824px"
          top="-132px"
          bg="radial-gradient(61.59% 65.18% at 50% 50%, #509DC4 6%, #2984BD 19%, #215B88 42%, #1C466D 57%, #183152 75%)"
          opacity="0.71"
          filter="blur(17.3px)"
          transform="rotate(-12.41deg)"
        />

        
        <Box
          position="absolute"
          width="79.17vw"
          height="83.4vh"
          left="10.42vw"
          top="41.26vh"
          bg="rgba(217, 217, 217, 0.09)"
          borderRadius="1.39vw"
        >
          {/*Heading*/}
          <Text
            position="absolute"
            left="71.18%"
            right="5.97%"
            top="25.84%"
            bottom="59.73%"
            fontFamily="Nasalization"
            fontWeight="400"
            fontSize="2.5vw"
            lineHeight="3.24vw"
            color="#FFFFFF"
          >
            Heading
          </Text>

          {/*Image Box*/}
          <Box
            position="absolute"
            left="2%"
            right="44.89%"
            top="3%"
            bottom="40%"
            bg="#030303"
            borderRadius="0.8vw"
            overflow="hidden"
          >
            
            <Image
              src="/image/image.jpg" 
              alt="Team Photo"
              position="absolute"
              width="95%"
              height="90%"
              top="5%"
              left="2.5%"
              objectFit="cover"
            />
          </Box>
          
          {/*names of members*/}
          <Box
            position="absolute"
            left="2%"
            right="44.89%"
            top="63%"
            bottom="3%"
            bg="#030303"
            borderRadius="0.8vw"
          >
            <Grid
              templateColumns="repeat(3, 1fr)"
              templateRows="repeat(4, 1fr)"
              gap={4}
              width="100%"
              height="100%"
            >
              {['MEMBERS', '', '', 'Giovanni Romano', 'Chiara Gallo', 'Lorenzo Esposito', 'Martina Conti', 'Marco De Luca', 'Matteo Ricci', 'Elena Rossi', 'Andrea Verdi', 'Luca Bianchi'].map((name, index) => (
                <Box
                  key={index}
                  bg="#030303"
                  borderRadius="0.5vw"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text color="#FFFFFF" fontFamily="Space Grotesk" fontSize="1vw" fontWeight="700">
                    {name}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Box>
        

          {/*Description*/}
          <Text
            position="absolute"
            width="21.94vw"
            height="22.81vh"
            left="50.04vw"
            top="40.02vh"
            fontFamily="Space Grotesk"
            fontWeight="400"
            fontSize="1.39vw"
            lineHeight="1.81vw"
            textAlign="center"
            color="#FFF8F8"
          >
            The Management Subdivision oversees project coordination, team organization, and resource allocation. We ensure smooth communication, track progress, and keep the team aligned with our goals to deliver successful outcomes.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default DivisionExplanation;
