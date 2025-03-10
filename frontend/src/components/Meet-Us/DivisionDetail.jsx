import { useParams, Navigate } from "react-router-dom";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Heading,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { getColors } from "../../utils/utils";

// TEST DATA TODO replace with actual data
const VALID_DIVISIONS = {
  MANAGEMENT: {
    description:
      "The Management Subdivision oversees project coordination, team organization, and resource allocation. We ensure smooth communication, track progress, and keep the team aligned with our goals to deliver successful outcomes.",
    members: [
      "Alessandro Rossi",
      "Giulia Bianchi",
      "Matteo Ricci",
      "Sofia Greco",
      "Lorenzo Esposito",
      "Martina Conti",
      "Giovanni Romano",
      "Chiara Gallo",
      "Marco De Luca",
    ],
  },
  OUTREACH: {
    description:
      "The Outreach Subdivision focuses on community engagement, public relations, and collaboration with external organizations. We promote our projects and build connections to expand our influence.",
    members: [
      "Elena Moretti",
      "Riccardo Ferrari",
      "Francesca Russo",
      "Giovanni Bianchi",
      "Marta Lombardi",
      "Stefano Conti",
      "Valeria Romano",
      "Davide Greco",
      "Claudia Esposito",
    ],
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
  const { description, members } = VALID_DIVISIONS[upperCaseDivision];
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
          <Text fontSize="5xl" fontWeight="bold">
            PHOTO
          </Text>
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
