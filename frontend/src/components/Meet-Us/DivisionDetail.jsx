import { useParams, Navigate } from "react-router-dom";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Heading,
  Flex,
  useBreakpointValue,
  Image
} from "@chakra-ui/react";
import { getColors } from "../../utils/utils";

// TEST DATA TODO replace with actual data
const VALID_DIVISIONS = {
  STRUCTURES: {
    description:
      "We’re a team of 5 passionate students designing a spacecraft for tourism and research with sustainability at its core. Our mission? Build a safe, reusable, and eco-friendly capsule that withstands reentry, minimizes environmental impact, and pushes the boundaries of innovation. Here’s what we’re working on: ● Advanced materials to handle extreme temperatures. ● Cryogenic cooling systems for thermal stability. ● Recyclable components for a low-carbon footprint. ● Lightweight, aerodynamic design for maximum efficiency. With every detail, we’re proving that the future of space travel can be sustainable and groundbreaking. Meet the team: Sofia, Simone, Giuseppe, Dario, and Giovanni—bringing together expertise in aerospace and materials engineering to make this dream a reality.",
    members: [
      "First name Last name",
    ],
    image: "/assets/MeetUs/cad.jpeg",
  },
  MARKETANALYSIS: {
    description:
      "Our mission? Ensuring the Low Earth Orbit (LEO) vehicle is not only groundbreaking but also economically viable and aligned with the Student Aerospace Challenge requirements. With cross-team collaboration and a strategic approach, we’re shaping a vehicle that’s innovative, accessible, and sustainable. Key Focus Areas: ● Aerospace Market Analysis: Evaluating investments, costs, opportunities, and competitors. ● Risk Management: Applying Fault Tree Analysis (FTA) to identify and mitigate risks. ● Trends & Preferences: Understanding user needs for performance, cost, and accessibility. ● Sustainability: Exploring eco-friendly solutions while adhering to regulations.",
    members: [
      "Alessandro Santoro: Forecasting market growth trends and collaborating with the Medical Aspects team.",
      "Maria Castagna: Analyzing key components of the aerospace market while supporting Structure & Materials",
      "Cemre Samur: Conducting SWOT analysis and working with the Propulsion team.",
      "Helia Shooshtari: Leading demand analysis, studying customer behavior, and coordinating with other sections.",
    ],
    image: "/assets/MeetUs/marketing.jpeg",
  },
  MEDICALASPECTS: {
    description:
      "Our mission? Developing a cutting-edge device and web application to monitor passengers’ neurological and muscular health during spaceflights. Key Goals: ● EEG & EMG Monitoring: Designing a device to capture and analyze brain and muscle activity, tracking sleep quality and potential epilepsy episodes. ● User-Friendly Web App ● Data Access: Passengers can view EEG/EMG insights. ● Symptom Logging: Identify patterns and triggers by logging symptoms. ● Intuitive Interface: Accessible for all users, regardless of tech expertise.",
    members: [
      "Aarish Syed: Focused on electrode materials for comfort and precise data.",
      "Delaram Dinian: Developing the web app and ensuring device integration.",
      "Giulia Bandiera: Bridging biomedical needs with tech solutions.",
      "Simone Orlandini: Supporting web app and device configuration.",
      "Mohammadamin Nourì Uoshanloei: Innovating electrode materials for accuracy and user comfort."
    ],
    image: "/assets/MeetUs/biomedical.jpeg",
  },
  PROPULSION: {
    description:
      "Mission: Designing a cutting-edge propulsion system that’s sustainable, reusable, and high-performing! Highlights include: ● Retro-propulsion engines for maximum passenger comfort ● Redundant thrusters for full attitude control with minimal propellant usage ● Four main engines optimized for atmospheric re-entry and a vacuum-specific engine for space Innovative Systems: A turbopump-driven feed system with backup lines and battery-powered redundancy ensures reliability for all missions. Future steps include testing experimental propellants to further reduce space travel’s carbon footprint!",
    members: [
      "Irene Caracciolo: Working on retro-propulsion thrust for smoother landings.",
      "Alberto Fanari: Focused on the design and dimensioning of the main engine.",
      "Mnar Abdulaal: Designing reliable thrusters, engines, and feed systems.",
      "Lorenzo: Specializing in secondary thrusters and attitude control systems.",
      "Panagiotis Argyris: Gaining hands-on propulsion design experience while collaborating on system integration."
    ],
    image: "/assets/MeetUs/propulsion.jpeg",
  },
  MISSIONPROFILE: {
    description:
      "Our mission? Developing a spacecraft designed for tourism and commercial applications, balancing operational needs with thermal efficiency for optimal performance and passenger comfort. Key Areas of Focus: ● Mission Profile: Analyzing critical flight phases to optimize efficiency, safety, and performance. ● Requirements Definition: Establishing clear objectives to guide the spacecraft’s design. ● Design Development: Crafting the geometry and thermal systems to meet performance and comfort goals.",
    members: [
      "Alberto, Federico, Asia: Working on preliminary spacecraft sizing, including mass breakdown and dimensions.",
      "Andrea, Giovanna: Calculating impulse requirements for a smooth reentry and safe gliding landing.",
    ],
    image: "/assets/MeetUs/mission profile.jpeg",
  },
  ZEPHYR: {
    description:
      "Aerothermodynamics Section: Shaping Zephyr for success! The team is optimizing the spacecraft’s aerodynamic design to fit Ariane Next’s payload fairing. Through advanced CFD simulations, they’re testing airfoils and wing shapes for different re-entry conditions. The section is also designing and testing a Thermal Protection System to ensure safe atmospheric re-entry. Next steps? Full CFD analysis of the Zephyr model and Wind Gallery tests on a 3D-printed prototype! CAD & 3D Printing Section: Crafting Zephyr in detail! Using SolidWorks, the team is refining the spacecraft’s fuselage, wings, nose, engine, and interior to balance aerodynamics and passenger comfort. The design is scaled for a 1:10 3D print, featuring intricate internal details and optimized for testing.",
    members: [
      "first name last name",
    ],
    image: "/assets/MeetUs/zephyr.jpeg",
  },
};

/**
 * DivisionDetail component displays detailed information about a specific division.
 * It fetches the division name from the URL parameters, converts it to uppercase,
 * and checks if the division exists in the VALID_DIVISIONS object.
 * If the division does not exist, it redirects to a "Not Found" page.
 *
 * The component is responsive and adjusts its layout based on the screen size.
 * It displays the division name, description, and a list of members.
 *
 * "DivisionDetail" is a child component used by the "MeetUs" parent component.
 * @author Licciardi Oscar
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * // Example usage:
 * <Route path="/division/:divisionName" element={<DivisionDetail />} />
 *
 * @requires useParams from 'react-router-dom'
 * @requires Navigate from 'react-router-dom'
 * @requires Box from '@chakra-ui/react'
 * @requires Flex from '@chakra-ui/react'
 * @requires Text from '@chakra-ui/react'
 * @requires Heading from '@chakra-ui/react'
 * @requires Grid from '@chakra-ui/react'
 * @requires GridItem from '@chakra-ui/react'
 * @requires useBreakpointValue from '@chakra-ui/react'
 * @requires getColors from 'path/to/color/utils'
 * @requires VALID_DIVISIONS from 'path/to/valid/divisions'
 */
const DivisionDetail = () => {
  const { divisionName } = useParams();
  const upperCaseDivision = divisionName.toUpperCase();

  const containerDirection = useBreakpointValue({ base: "column", md: "row" });
  const textAlign = useBreakpointValue({ base: "center", md: "left" });
  const membersGridColumns = useBreakpointValue({ base: 1, sm: 2, md: 3 });

  if (!VALID_DIVISIONS[upperCaseDivision]) {
    return <Navigate to="/not-found" replace />;
  }
  const { description, members, image } = VALID_DIVISIONS[upperCaseDivision];
  return (
    <Box
      position="relative"
      width="100%"
      minHeight="80vh"
      paddingY={{ base: "2vh", md: "5vh" }}
      paddingX={{ base: "4", md: "8" }}
      bg={getColors().black}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="white"
      borderRadius="lg"
      margin={{ base: "2", md: "4" }}
    >
      <Flex
        direction={containerDirection}
        width="100%"
        justifyContent="space-between"
        alignItems="stretch"
        gap={{ base: "6", md: "8" }}
        mb={{ base: "8", md: "10" }}
      >
        <Box
          bg="black"
          borderRadius="md"
          width={{ base: "100%", md: "45%" }}
          height={{ base: "300px", md: "auto" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
        >
          <Image
            src={image}
            alt={`${upperCaseDivision} Team`}
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>

        <Box
          width={{ base: "100%", md: "50%" }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems={{ base: "center", md: "flex-start" }}
          padding={{ base: "4", md: "6" }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            letterSpacing="wider"
            mb="6"
            textAlign={textAlign}
          >
            {upperCaseDivision}
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            textAlign={textAlign}
            opacity="0.9"
          >
            {description}
          </Text>
        </Box>
      </Flex>

      <Box
        width="100%"
        mt={{ base: "6", md: "4" }}
        bg="black"
        borderRadius="md"
        overflow="hidden"
      >
        <Box
          bg="black"
          py="2"
          px="4"
          borderBottomWidth="1px"
          borderBottomColor="gray.700"
        >
          <Text fontSize="sm" fontWeight="medium">
            &gt; MEMBERS
          </Text>
        </Box>

        <Grid
          templateColumns={`repeat(${membersGridColumns}, 1fr)`}
          gap="4"
          p="4"
        >
          {members.map((member, index) => (
            <GridItem key={index}>
              <Text fontSize="sm" opacity="0.9">
                {member}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DivisionDetail;
