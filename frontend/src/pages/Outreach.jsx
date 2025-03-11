import { Box } from "@chakra-ui/react";
import MagazineGrid from "../components/Outreach/MagazineGrid";
import Footer from "../components/Footer";
import Header from "../components/Header";
const Outreach = () => {
  return (
    <Box>
      <Header />
      <MagazineGrid />
      <Footer />
    </Box>
  );
};

export default Outreach;
