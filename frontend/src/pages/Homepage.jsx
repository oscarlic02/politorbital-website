import { Box } from "@chakra-ui/react";
import FlashNews from "../components/Homepage/FlashNews";
import About from "../components/Homepage/About";
import Footer from "../components/Footer";
import Timeline from "../components/Homepage/Timeline";
import DiscoverIdeas from "../components/Homepage/Discover";
import Header from "../components/Header";
const HomePage = () => {
  return (
    <Box>
      <Header />
      <DiscoverIdeas />
      <FlashNews />
      <About />
      <Timeline />
      <Footer />
    </Box>
  );
};

export default HomePage;
