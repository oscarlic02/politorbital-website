import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectGallery from "../components/Projects/ProjectGallery";
import OurProjects from "../components/Projects/OurProjects";
const Project = () => {
  return (
    <Box>
      <Header />
      <OurProjects/>
      <ProjectGallery />
      <Footer />
    </Box>
  );
};

export default Project;
