import { useState } from "react";
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  Circle,
  HStack,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";

const ProjectButton = ({ name, isActive, onClick }) => {
  const bgColor = useColorModeValue(
    "rgba(7, 20, 48, 0.8)",
    "rgba(7, 20, 48, 0.8)"
  );
  const activeBgColor = useColorModeValue(
    "rgba(26, 54, 93, 0.9)",
    "rgba(26, 54, 93, 0.9)"
  );
  const borderColor = useColorModeValue(
    "rgba(255, 215, 0, 0.3)",
    "rgba(255, 215, 0, 0.3)"
  );

  return (
    <Button
      variant="unstyled"
      bg={isActive ? activeBgColor : bgColor}
      color="white"
      borderRadius="full"
      py={2}
      px={6}
      minW={{ base: "80px", md: "100px" }}
      fontSize={{ base: "xs", md: "sm" }}
      fontWeight="normal"
      letterSpacing="1px"
      textTransform="uppercase"
      border={isActive ? "1px solid" : "1px solid transparent"}
      borderColor={borderColor}
      boxShadow={isActive ? "0 0 10px rgba(255, 215, 0, 0.2)" : "none"}
      transition="all 0.3s ease"
      _hover={{
        bg: activeBgColor,
        transform: "translateY(-2px)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

ProjectButton.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

/**
 * OurProjects component renders a section displaying various projects with a selector to switch between them.
 * The selected project is highlighted, and the component includes a heading, subheading, and some decorative elements.
 * @author Licciardi Oscar 
 * @component
 * @example
 * return (
 *   <OurProjects />
 * )
 * 
 * @returns {JSX.Element} The rendered component.
 * 
 * @description
 * This component displays a list of projects and allows the user to select a project by clicking on the corresponding button.
 * The selected project is highlighted. The component also includes a heading, subheading, and some decorative elements.
 * 
 * @function
 * @name OurProjects
 * 
 * @property {string} activeProject - The currently selected project.
 * @property {function} setActiveProject - Function to set the currently selected project.
 * @property {Array} projects - List of project objects with id and name properties.
 * @property {function} handleProjectClick - Function to handle the click event on a project button.
 */
const OurProjects = () => {
  const [activeProject, setActiveProject] = useState("SALTO");
  const bgColor = useColorModeValue("rgb(3, 9, 23)", "rgb(3, 9, 23)");
  const headingColor = useColorModeValue("white", "white");
  const subheadingColor = useColorModeValue("gray.300", "gray.300");

  const projects = [
    { id: 1, name: "SALTO" },
    { id: 2, name: "Elysium" },
    { id: 3, name: "Zephyr" },
  ];

  const handleProjectClick = (projectName) => {
    setActiveProject(projectName);
  };

  return (
    <Box
      bg={bgColor}
      py={{ base: 10, md: 16 }}
      position="relative"
      backgroundImage="radial-gradient(circle at 50% 50%, rgba(25, 60, 100, 0.2) 0%, rgba(3, 9, 23, 0.9) 70%)"
    >
      {/* Glow effects */}
      <Box
        position="absolute"
        top="15%"
        left="50%"
        transform="translateX(-50%)"
        width="150px"
        height="150px"
        borderRadius="full"
        background="radial-gradient(circle, rgba(30, 144, 255, 0.1) 0%, rgba(30, 144, 255, 0) 70%)"
      />

      <Container maxW="container.md" centerContent>
        <VStack spacing={{ base: 6, md: 10 }}>
          {/* Circle logo */}
          <Circle
            size={{ base: "80px", md: "100px" }}
            bg="gray.200"
            mb={{ base: 2, md: 4 }}
          />

          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="wide"
            textAlign="center"
          >
            OUR PROJECTS
          </Heading>

          <Text
            color={subheadingColor}
            fontSize={{ base: "sm", md: "md" }}
            letterSpacing="wider"
            textTransform="uppercase"
            mb={{ base: 6, md: 8 }}
          >
            THROUGHOUT THE YEARS
          </Text>

          {/* Project selector buttons */}
          <HStack
            spacing={{ base: 2, md: 4 }}
            mt={{ base: 4, md: 6 }}
            justifyContent="center"
            flexWrap={{ base: "wrap", md: "nowrap" }}
          >
            {projects.map((project) => (
              <ProjectButton
                key={project.id}
                name={project.name}
                isActive={activeProject === project.name}
                onClick={() => handleProjectClick(project.name)}
              />
            ))}
          </HStack>

        </VStack>
        <Divider
          height="1px"
          bg="linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)"
          width="100%"
          mt={{ base: 8, md: 12 }}
        />
      </Container>
    </Box>
  );
};

export default OurProjects;
