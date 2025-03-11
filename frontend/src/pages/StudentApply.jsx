import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FAQs from "../components/StudentApply/Faqs";
import Introduction from "../components/StudentApply/Introduction";
import OpenPositions from "../components/StudentApply/OpenPositions";

const StudentApply = () => {
  return (
    <Box>
      <Header />
      <Introduction />
      <OpenPositions />
      <FAQs />
      <Footer />
    </Box>
  );
};

export default StudentApply;
