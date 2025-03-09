import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './pages/HomePage';
import MeetUs from './pages/MeetUs';
import theme from './theme';
import './fonts.css';
const App = () => {
  return (
    <ChakraProvider theme={theme}>
        <MeetUs />
    </ChakraProvider>
  );
};

export default App;