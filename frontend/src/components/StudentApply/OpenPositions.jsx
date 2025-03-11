import {
  Box,
  Text,
  Heading,
  VStack,
  Flex,
  Button,
  List,
  ListItem,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Container,
} from "@chakra-ui/react";
import { MdCircle } from "react-icons/md";
import PropTypes from "prop-types";
import { getColors } from "../../utils/utils";

/**
 * JobDetailSection component renders a section with a title and children content.
 * @author Licciardi Oscar
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the section.
 * @param {React.ReactNode} props.children - The content to be displayed within the section.
 * @returns {JSX.Element} The rendered JobDetailSection component.
 */
const JobDetailSection = ({ title, children }) => (
  <Box mb={4}>
    <Text fontSize="sm" fontWeight="semibold" color="gray.300" mb={2}>
      {title}
    </Text>
    {children}
  </Box>
);

JobDetailSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

/**
 * SkillsList component renders a list of skills within a JobDetailSection.
 * @author Licciardi Oscar
 * @param {Object} props - The component props.
 * @param {Array<string>} props.skills - An array of skills to be displayed.
 * @param {string} props.title - The title for the JobDetailSection.
 * @returns {JSX.Element} The rendered SkillsList component.
 */
const SkillsList = ({ skills, title }) => (
  <JobDetailSection title={title}>
    <List spacing={1}>
      {skills.map((skill, index) => (
        <ListItem key={index} display="flex" alignItems="center">
          <ListIcon as={MdCircle} color="gray.400" fontSize="0.5rem" />
          <Text color="gray.300" fontSize="sm">
            {skill}
          </Text>
        </ListItem>
      ))}
    </List>
  </JobDetailSection>
);

SkillsList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

/**
 * Component to display the job description.
 * @author Licciardi Oscar
 * @param {Object} props - The component props.
 * @param {string} props.description - The job description text.
 * @returns {JSX.Element} The rendered JobDescription component.
 */
const JobDescription = ({ description }) => (
  <JobDetailSection title="Description">
    <Text color="gray.300" fontSize="sm" lineHeight="tall">
      {description}
    </Text>
  </JobDetailSection>
);

JobDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

const LegalDisclaimer = () => (
  <Text fontSize="xs" color="gray.500" mt={2} mb={4} maxW="90%">
    Please be informed that your work will be entirely voluntary. If you are a
    student from a Politecnico di Torino, we do not offer any paid employment.
  </Text>
);

/**
 * Component representing a job position item within an accordion.
 * @author Licciardi Oscar
 * @param {Object} props - The component props.
 * @param {Object} props.position - The job position details.
 * @param {string} props.position.role - The role of the job position.
 * @param {string} props.position.subteam - The subteam of the job position.
 * @param {string} props.position.division - The division of the job position.
 * @param {string} props.position.description - The description of the job position.
 * @param {Array<string>} props.position.requiredSkills - The required skills for the job position.
 * @param {Array<string>} props.position.desiderableSkills - The desirable skills for the job position.
 * @param {boolean} props.position.showDisclaimer - Flag to show the legal disclaimer.
 * @param {boolean} props.isOpen - Flag indicating if the accordion item is open.
 * @returns {JSX.Element} The rendered job position item component.
 */
const JobPositionItem = ({ position, isOpen }) => {
  return (
    <AccordionItem
      border="none"
      mb={2}
      bg="gray.900"
      borderRadius="xl"
      overflow="hidden"
    >
      <AccordionButton
        p={4}
        _hover={{ bg: "gray.800" }}
        borderRadius={isOpen ? "xl xl 0 0" : "xl"}
      >
        <Flex width="100%" justify="space-between" align="center">
          <Text color="white" fontWeight="medium">
            {position.role}
          </Text>
          <Text color="gray.400" flex="1" textAlign="center">
            {position.subteam}
          </Text>
          <Text color="gray.400" flex="1" textAlign="center">
            {position.division}
          </Text>
          <AccordionIcon color="white" />
        </Flex>
      </AccordionButton>

      <AccordionPanel pb={6} pt={4} bg="#111827">
        <Flex direction={{ base: "column", md: "row" }} gap={6}>
          <Box flex="2">
            <Heading as="h3" size="md" color="white" mb={4}>
              {position.role}
            </Heading>
            <JobDescription description={position.description} />
          </Box>

          <Box flex="1">
            <SkillsList
              title="Required skills"
              skills={position.requiredSkills}
            />
            <SkillsList
              title="Desiderable skills"
              skills={position.desiderableSkills}
            />

            <Box mt={6} textAlign="center">
              <Button
                bg="transparent"
                color="white"
                border="1px solid white"
                borderRadius="full"
                px={8}
                py={6}
                _hover={{ bg: "whiteAlpha.100" }}
                fontFamily="sans-serif"
                letterSpacing="wide"
              >
                APPLY
              </Button>
            </Box>
          </Box>
        </Flex>

        {position.showDisclaimer && <LegalDisclaimer />}
      </AccordionPanel>
    </AccordionItem>
  );
};

JobPositionItem.propTypes = {
  position: PropTypes.shape({
    role: PropTypes.string.isRequired,
    subteam: PropTypes.string.isRequired,
    division: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    requiredSkills: PropTypes.arrayOf(PropTypes.string).isRequired,
    desiderableSkills: PropTypes.arrayOf(PropTypes.string).isRequired,
    showDisclaimer: PropTypes.bool.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool,
};

// Main component
/**
 * OpenPositions component renders a list of job positions available for application.
 *
 * This component displays a header, column headers, and a list of job positions
 * using an accordion for each position. Each job position includes details such as
 * role, subteam, division, description, required skills, and desirable skills.
 * @author Licciardi Oscar
 * @component
 * @example
 * return (
 *   <OpenPositions />
 * )
 *
 * @returns {JSX.Element} The rendered OpenPositions component.
 */
const OpenPositions = () => {
  const colors = getColors();

  // TODO - Replace with actual data
  const positions = [
    {
      role: "Sponsor Manager",
      subteam: "Name of the subteam",
      division: "Name of the division",
      description:
        "The Sponsor Manager plays a vital role in securing and managing relationships with sponsors to ensure the necessary resource support for the team's projects. This involves identifying potential sponsors, organizing presentation meetings, negotiating sponsorship and partnership agreements, and fostering long-term partnerships. The Sponsor Manager also ensures that the team fulfills its obligations to sponsors, maintaining strong and mutually beneficial relationships.",
      requiredSkills: [
        "Effective communication",
        "Negotiation",
        "Attention to details",
      ],
      desiderableSkills: [
        "Effective communication",
        "Negotiation",
        "Attention to details",
      ],
      showDisclaimer: true,
    },
    {
      role: "Name of the role",
      subteam: "Name of the subteam",
      division: "Name of the division",
      description: "Job description goes here...",
      requiredSkills: ["Skill 1", "Skill 2", "Skill 3"],
      desiderableSkills: ["Skill 1", "Skill 2", "Skill 3"],
      showDisclaimer: false,
    },
    {
      role: "Name of the role",
      subteam: "Name of the subteam",
      division: "Name of the division",
      description: "Job description goes here...",
      requiredSkills: ["Skill 1", "Skill 2", "Skill 3"],
      desiderableSkills: ["Skill 1", "Skill 2", "Skill 3"],
      showDisclaimer: false,
    },
    {
      role: "Name of the role",
      subteam: "Name of the subteam",
      division: "Name of the division",
      description: "Job description goes here...",
      requiredSkills: ["Skill 1", "Skill 2", "Skill 3"],
      desiderableSkills: ["Skill 1", "Skill 2", "Skill 3"],
      showDisclaimer: false,
    },
  ];

  return (
    <Box
      py={12}
      px={4}
      width="100%"
    >
      <Container maxW="1200px">
        <VStack align="flex-start" spacing={8} width="100%">
          {/* Header */}
          <Box mb={2}>
            <Text
              color="gray.400"
              textTransform="uppercase"
              fontWeight="bold"
              mb={1}
            >
              OPEN POSITIONS
            </Text>
            <Heading
              as="h2"
              color="white"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="medium"
            >
              New challenges are waiting for you!
            </Heading>
          </Box>

          {/* Column Headers */}
          <Flex width="100%" mb={2} px={4}>
            <Text color="gray.400" width="25%" fontWeight="medium">
              Role
            </Text>
            <Text
              color="gray.400"
              width="37.5%"
              textAlign="center"
              fontWeight="medium"
            >
              Subteam
            </Text>
            <Text
              color="gray.400"
              width="37.5%"
              textAlign="center"
              fontWeight="medium"
            >
              Division
            </Text>
          </Flex>

          {/* Job Listings */}
          <Accordion allowToggle width="100%">
            {positions.map((position, index) => (
              <JobPositionItem key={index} position={position} />
            ))}
          </Accordion>
        </VStack>
      </Container>
    </Box>
  );
};

export default OpenPositions;
