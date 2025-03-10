import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DivisionGeneral from "../components/Meet-Us/DivisionGeneral";
const HomePage = () => {
  return (
    <Box>
      <Header />
      <DivisionGeneral/>
      <Footer/>
    </Box>
  );
};

export default HomePage;
