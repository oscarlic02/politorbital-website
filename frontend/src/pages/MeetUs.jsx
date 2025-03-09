import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DivisionDetail from "../components/Meet-Us/DivisionDetail";
const HomePage = () => {
  return (
    <Box>
      <Header />
      <DivisionDetail/>
      <Footer/>
    </Box>
  );
};

export default HomePage;
