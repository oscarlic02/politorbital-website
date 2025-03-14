import { useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  IconButton,
  SlideFade,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { getColors } from "../../utils/utils";

/**
 *
 * @author Licciardi Oscar
 * DivisionGeneral component renders a sectioned team display with navigation.
 * This component displays multiple sections of team data, each containing a list of teams.
 * Users can navigate between sections using the provided navigation arrows.
 *
 * @component
 * @example
 * return (
 *   <DivisionGeneral />
 * )
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @function
 * @name DivisionGeneral
 *
 * @description
 * - Uses `useState` to manage the current section index.
 * - `teamSections` array contains the data for each section.
 * - Pure functions are used for component generation following functional programming principles.
 * - Optimized for mobile with responsive spacing, sizing, and navigation controls.
 * - Uses React hooks like useCallback and useMemo for performance optimization.
 */

const DivisionGeneral = () => {
  const colors = getColors();
  const [currentSection, setCurrentSection] = useState(0);

  const headingSize = useBreakpointValue({ base: "3xl", md: "4xl", lg: "5xl" });
  const cardTextSize = useBreakpointValue({ base: "lg", md: "xl", lg: "2xl" });
  const cardHeight = useBreakpointValue({
    base: "200px",
    md: "250px",
    lg: "300px",
  });
  const spacing = useBreakpointValue({ base: 4, md: 6, lg: 8 });
  const navigationSize = useBreakpointValue({ base: 8, md: 10 });
  const navigationSpacing = useBreakpointValue({ base: 3, md: 6 });

  const teamSections = useMemo(
    () => [
      {
        title: "WE ARE POLITORBITAL",
        teams: ["BIOMEDICAL", "PROPULSION", "MANAGEMENT", "CAD"],
      },
      {
        title: "WE ARE POLITORBITAL",
        teams: ["AERODYNAMICS", "MATERIALS", "ELECTRONICS", "SOFTWARE"],
      },
      {
        title: "WE ARE POLITORBITAL",
        teams: ["MANAGEMENT", "MARKETING", "FINANCE", "OUTREACH"],
      },
    ],
    []
  );

  const createTeamCard = useCallback(
    (title, highlighted = false) => (
      <Link to={`/meet-us/${title.toLowerCase()}`}>
        <Flex
          as="a"
          direction="column"
          bg="#2a3544"
          borderRadius="lg"
          alignItems="center"
          border={highlighted ? `2px solid ${colors.primary}` : "none"}
          transition="transform 0.2s, box-shadow 0.2s"
          _hover={{
            transform: "translateY(-5px)",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
          }}
          position="relative"
          overflow="hidden"
          height="90%"
          width="100%"
        >
          <Box w="90%" h="90%" bg="black" borderRadius="md" mt={4} />
          <Text
            color="white"
            fontSize={cardTextSize}
            fontFamily="sans-serif"
            letterSpacing="1px"
            textTransform="uppercase"
            fontWeight="bold"
            mt={6}
            mb={3}
            textAlign="center"
            px={2}
          >
            {title}
          </Text>
        </Flex>
      </Link>
    ),
    [colors.primary, cardTextSize]
  );

  const navigateToSection = useCallback(
    (direction) => {
      setCurrentSection((prevSection) => {
        const nextIndex = prevSection + direction;
        return nextIndex >= 0 && nextIndex < teamSections.length
          ? nextIndex
          : prevSection;
      });
    },
    [teamSections.length]
  );

  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.touches[0].clientY);
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      if (!touchStart) return;

      const touchEnd = e.changedTouches[0].clientY;
      const diff = touchStart - touchEnd;

      if (Math.abs(diff) > 40) {
        navigateToSection(diff > 0 ? 1 : -1);
      }

      setTouchStart(null);
    },
    [touchStart, navigateToSection]
  );

  const currentSectionData = useMemo(
    () => teamSections[currentSection],
    [teamSections, currentSection]
  );

  return (
    <Box
      bgGradient={'black'}
      position="relative"
      overflow="hidden"
      width="100%"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH={{ base: "60vh", md: "70vh" }}
        w="100%"
        px={{ base: 4, md: 6 }}
      >
        <SlideFade in={true} offsetY="20px" key={currentSection}>
          <Text
            color="white"
            fontSize={headingSize}
            fontWeight="bold"
            mb={{ base: 4, md: 6 }}
            mt={{ base: 4, md: 6 }}
            letterSpacing={{ base: "1px", md: "2px" }}
            textAlign="center"
          >
            {currentSectionData.title}
          </Text>

          <SimpleGrid
            columns={{ base: 1, sm: 2 }}
            spacing={spacing}
            maxW="1200px"
            w="100%"
          >
            {currentSectionData.teams.map((team, teamIndex) => (
              <Box key={teamIndex} h={cardHeight} w="100%">
                {createTeamCard(team, teamIndex === 2 && currentSection === 0)}
              </Box>
            ))}
          </SimpleGrid>
        </SlideFade>
      </Flex>

      <Flex
        position="absolute"
        bottom={{ base: "20px", md: "30px" }}
        width="100%"
        justifyContent="center"
        zIndex={10}
      >
        <IconButton
          icon={<ChevronUpIcon boxSize={navigationSize} />}
          onClick={() => navigateToSection(-1)}
          isDisabled={currentSection === 0}
          variant="ghost"
          colorScheme="whiteAlpha"
          aria-label="Previous section"
          mr={navigationSpacing}
          size={useBreakpointValue({ base: "md", md: "lg" })}
          isRound
          _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
          _active={{ bg: "rgba(255, 255, 255, 0.3)" }}
        />
        <IconButton
          icon={<ChevronDownIcon boxSize={navigationSize} />}
          onClick={() => navigateToSection(1)}
          isDisabled={currentSection === teamSections.length - 1}
          variant="ghost"
          colorScheme="whiteAlpha"
          aria-label="Next section"
          size={useBreakpointValue({ base: "md", md: "lg" })}
          isRound
          _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
          _active={{ bg: "rgba(255, 255, 255, 0.3)" }}
        />
      </Flex>

      <Flex
        position="absolute"
        bottom="5px"
        width="100%"
        justifyContent="center"
        display={{ base: "flex", md: "none" }}
      >
        {teamSections.map((_, index) => (
          <Box
            key={index}
            h="8px"
            w="8px"
            borderRadius="full"
            bg={currentSection === index ? "white" : "whiteAlpha.500"}
            mx="4px"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default DivisionGeneral;
