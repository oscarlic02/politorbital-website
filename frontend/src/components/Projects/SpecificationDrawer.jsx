import { 
    Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, 
    DrawerHeader, DrawerBody, Tabs, TabList, TabPanels, Tab, 
    TabPanel, Grid, Box, Text, Image, Accordion, AccordionItem, 
    AccordionButton, AccordionPanel, AccordionIcon, Button 
  } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';
  
/**
 * SpecificationsDrawer component renders a drawer with tabs to display various specifications of a project.
 * The component receives the specifications data as props and renders the data in a structured format.
 * The drawer can be opened and closed using the isOpen and onClose props.
 * The specifications data is structured as an object with three keys: dimensions, performance, and systems.
 * Each key contains an object with the respective specifications data.
 * 
 * @author Licciardi Oscar
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Determines if the drawer is open.
 * @param {function} props.onClose - Function to close the drawer.
 * @param {Object} props.specifications - The specifications data to display.
 * @param {Object} props.specifications.dimensions - Dimensions specifications.
 * @param {Object} props.specifications.performance - Performance specifications.
 * @param {Object} props.specifications.systems - Systems specifications.
 * 
 * @returns {JSX.Element} The rendered SpecificationsDrawer component.
 */

  const SpecificationsDrawer = ({ isOpen, onClose, specifications }) => {
    return (
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent bg="gray.900" color="white">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" borderColor="gray.700">
            Zephyr Specifics
          </DrawerHeader>
          <DrawerBody>
            <Tabs variant="soft-rounded" colorScheme="blue" size="sm" isFitted>
              <TabList mb={4}>
                <Tab>Dimensions</Tab>
                <Tab>Performance</Tab>
                <Tab>Systems</Tab>
              </TabList>
              
              <TabPanels>
                {/* Dimensions Tab */}
                <TabPanel>
                  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    {Object.entries(specifications.dimensions).map(([key, value]) => (
                      <Box 
                        key={key}
                        p={3} 
                        bg="gray.800" 
                        borderRadius="md"
                      >
                        <Text color="gray.400" textTransform="capitalize">{key}</Text>
                        <Text fontWeight="bold">{value}</Text>
                      </Box>
                    ))}
                  </Grid>
                  <Image 
                    src="assets/Projects/Zephyr/dimensions.jpg" 
                    alt="SALTO dimensions diagram" 
                    mt={6}
                    mx="auto"
                  />
                </TabPanel>
                
                {/* Performance Tab */}
                <TabPanel>
                  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    {Object.entries(specifications.performance).map(([key, value]) => (
                      <Box 
                        key={key}
                        p={3} 
                        bg="gray.800" 
                        borderRadius="md"
                      >
                        <Text color="gray.400" textTransform="capitalize">{formatKey(key)}</Text>
                        <Text fontWeight="bold">{value}</Text>
                      </Box>
                    ))}
                  </Grid>
                </TabPanel>
                
                {/* Systems Tab */}
                <TabPanel>
                  <Accordion allowToggle>
                    {Object.entries(specifications.systems).map(([key, value]) => (
                      <AccordionItem key={key} border="none" mb={2}>
                        <AccordionButton 
                          _hover={{ bg: "gray.700" }}
                          bg="gray.800" 
                          borderRadius="md"
                        >
                          <Box flex="1" textAlign="left" textTransform="capitalize">
                            {formatKey(key)}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} pt={2}>
                          {value}
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabPanel>
              </TabPanels>
            </Tabs>
            
            <Button 
              leftIcon={<DownloadIcon />}
              colorScheme="blue"
              variant="outline"
              mt={8}
              size="sm"
              w="full"
            >
              Download Complete Specifications
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  };
  
  const formatKey = (key) => {
    return key.replace(/([A-Z])/g, ' $1').trim();
  };

  SpecificationsDrawer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    specifications: PropTypes.shape({
      dimensions: PropTypes.object.isRequired,
      performance: PropTypes.object.isRequired,
      systems: PropTypes.object.isRequired,
    }).isRequired,
  };

  export default SpecificationsDrawer;