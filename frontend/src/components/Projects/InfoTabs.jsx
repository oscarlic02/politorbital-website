import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Grid, Stat, StatLabel, StatNumber, StatHelpText, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

/**
 * InfoTabs component renders a tabbed interface with two tabs: Overview and Technology.
 * The Overview tab displays an overview text and a set of statistics.
 * The Technology tab displays a list of technologies used in the project.
 * The component receives the overview text, statistics, and technologies as props.
 * @summary Renders a tabbed interface with two tabs: Overview and Technology.
 * @author Licciardi Oscar
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.overview - The overview text to display in the Overview tab.
 * @param {Array} props.stats - An array of statistics to display in the Overview tab.
 * @param {Array} props.stats[].label - The label for the statistic.
 * @param {Array} props.stats[].value - The value of the statistic.
 * @param {Array} props.stats[].helpText - Additional help text for the statistic.
 * @param {Array} props.technologies - An array of technologies to display in the Technology tab.
 * @param {string} props.technologies[].title - The title of the technology.
 * @param {string} props.technologies[].description - A brief description of the technology.
 * @param {string} props.technologies[].color - The color to use for the technology title.
 * 
 * @returns {JSX.Element} The rendered InfoTabs component.
 */
const InfoTabs = ({ overview, stats, technologies }) => {
  return (
    <Tabs variant="enclosed" colorScheme="blue" size="sm">
      <TabList borderBottomColor="gray.700">
        <Tab color="gray.300" _selected={{ color: "white", bg: "gray.700" }}>Overview</Tab>
        <Tab color="gray.300" _selected={{ color: "white", bg: "gray.700" }}>Technology</Tab>
      </TabList>
      
      <TabPanels>
        {/* Overview Tab */}
        <TabPanel>
          <Text color="gray.300" fontSize="sm">
            {overview}
          </Text>
          
          <Grid templateColumns="repeat(3, 1fr)" gap={4} mt={4}>
            {stats.map((stat, index) => (
              <Stat key={index}>
                <StatLabel color="gray.400">{stat.label}</StatLabel>
                <StatNumber color="white" fontSize="md">{stat.value}</StatNumber>
                <StatHelpText color="gray.400">{stat.helpText}</StatHelpText>
              </Stat>
            ))}
          </Grid>
        </TabPanel>
        
        {/* Technology Tab */}
        <TabPanel>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {technologies.map((tech, index) => (
              <Box key={index} p={3} bg="gray.800" borderRadius="md">
                <Text color={tech.color} fontSize="sm" fontWeight="medium" mb={1}>{tech.title}</Text>
                <Text color="gray.300" fontSize="xs">
                  {tech.description}
                </Text>
              </Box>
            ))}
          </Grid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

InfoTabs.propTypes = {
  overview: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      helpText: PropTypes.string
    })
  ).isRequired,
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      color: PropTypes.string
    })
  ).isRequired
};

export default InfoTabs;
