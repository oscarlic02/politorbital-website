import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import './fonts.css';
import AppRouter from './components/Router';
const App = () => {
  return (
    <ChakraProvider theme={theme}>
        <AppRouter />
    </ChakraProvider>
  );
};

export default App;