import React from 'react';
import { ChakraProvider, Box, Container, Heading } from '@chakra-ui/react';
import MissionsPage from './pages/MissionsPage';
import DivisionExplanation from './components/DivisionExplanation';

const App = () => {
  return (
    <ChakraProvider>
      <DivisionExplanation/>
      {/* <Box minH="100vh" bg="gray.50">
        <Box borderBottom="1px" borderColor="gray.200" bg="white">
          <Container maxW="container.xl" py={4}>
            <Heading size="lg">Space Mission Dashboard</Heading>
          </Container>
        </Box>
        <MissionsPage />
      </Box> */}
    </ChakraProvider>
  );
};

export default App;