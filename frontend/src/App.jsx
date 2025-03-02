import { ChakraProvider, Box, Container, Heading } from '@chakra-ui/react';
import HomePage from './pages/HomePage';
const App = () => {
  return (
    <ChakraProvider>
      <Box minH="100vh" bg="gray.50">
        <Box borderBottom="1px" borderColor="gray.200" bg="white">
          <Container maxW="container.xl" py={4}>
            <Heading size="lg">Politorbital Website</Heading>
          </Container>
        </Box>
        <HomePage />
      </Box>
    </ChakraProvider>
  );
};

export default App;