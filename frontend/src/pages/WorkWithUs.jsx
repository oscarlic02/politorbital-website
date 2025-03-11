import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Values from "../components/Work-With-Us/Values";
import TrustedByGallery from "../components/Work-With-Us/TrustedByGallery";
import ApplyForm from "../components/Work-With-Us/ApplyForm";
const HomePage = () => {
  return (
    <Box>
      <Header />
      <Values />
      <TrustedByGallery />
      <ApplyForm />
      <Footer />
    </Box>
  );
};

export default HomePage;
