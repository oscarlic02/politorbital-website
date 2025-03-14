import { useState } from 'react';
import { Box, Flex, Button, Heading, useDisclosure } from '@chakra-ui/react';
import { ViewIcon, InfoIcon } from '@chakra-ui/icons';

import GalleryView from './GalleryView';
import InfoTabs from './InfoTabs';
import ThreeDView from './TreeDView';
import SpecificationsDrawer from './SpecificationDrawer';

/**
 * ProjectGallery component renders a gallery view for a project with options to toggle between 2D and 3D views.
 * It also includes a header with controls to switch views and open a specifications drawer.
 * The component uses the spacecraftData object to render the project details.
 * The spacecraftData object contains the project overview, stats, technologies, specifications, and views.
 * The views data includes images and descriptions of the project from different angles.
 * The component uses the GalleryView, ThreeDView, InfoTabs, and SpecificationsDrawer components to render the project details.
 * @author Licciardi Oscar
 * @component
 * @example
 * return (
 *   <ProjectGallery />
 * )
 *
 * @returns {JSX.Element} The rendered ProjectGallery component.
 */


// TODO Replace this with your actual spacecraft data
const spacecraftData = {
    modelPath: "assets/Projects/Zephyr/zephyr.gltf",
    views: [
      {
        image: "assets/Projects/Zephyr/overview.jpg",
        title: "Overview",
        description: "Aerodynamic profile designed for atmospheric re-entry and optimal heat dissipation during high-velocity descent."
      },
      {
        image: "assets/Projects/Zephyr/side.jpg",
        title: "Side View",
        description: "Aerodynamic profile designed for atmospheric re-entry and optimal heat dissipation during high-velocity descent."
      },
      {
        image: "assets/Projects/Zephyr/top.jpg",
        title: "Top View",
        description: "Optimized wing configuration provides stability during orbital maneuvers and controlled glide capabilities."
      },
      {
        image: "assets/Projects/Zephyr/bottom.jpg",
        title: "Bottom View",
        description: "Optimized wing configuration provides stability during orbital maneuvers and controlled glide capabilities."
      },
      {
        image: "assets/Projects/Zephyr/front.jpg",
        title: "Front View",
        description: "Heat-resistant shell design with integrated radiation shielding and sensor array for navigation."
      },
      {
        image: "assets/Projects/Zephyr/back.jpg",
        title: "Back View",
        description: "Aerodynamic profile designed for atmospheric re-entry and optimal heat dissipation during high-velocity descent."
      },
    ],
    overview: "The SALTO (Strategic Atmospheric Lightweight Transport Orbiter) represents the next generation in versatile spacecraft design. Combining the capabilities of an orbital vehicle with atmospheric flight characteristics, SALTO enables seamless transitions between space operations and controlled atmospheric re-entry.",
    stats: [
      {
        label: "Mass",
        value: "6,420 kg",
        helpText: "Unloaded"
      },
      {
        label: "Crew",
        value: "0-2",
        helpText: "Autonomous capable"
      },
      {
        label: "Payload",
        value: "1,200 kg",
        helpText: "Max capacity"
      }
    ],
    technologies: [
      {
        title: "Materials",
        color: "blue.300",
        description: "Carbon-ceramic composite hull with ablative heat shielding capable of withstanding temperatures up to 1,800°C during atmospheric re-entry."
      },
      {
        title: "Propulsion System",
        color: "teal.300",
        description: "Hybrid propulsion combining high-efficiency ion thrusters for space maneuvers with chemical rockets for rapid acceleration when needed."
      },
      {
        title: "Navigation",
        color: "purple.300",
        description: "Multi-modal guidance system using quantum-assisted stellar positioning in space and advanced GPS/terrain recognition during atmospheric flight."
      },
      {
        title: "Power Generation",
        color: "orange.300",
        description: "Triple-junction solar arrays with 34% efficiency, coupled with next-gen lithium-polymer battery storage for eclipse operations."
      }
    ],
    specifications: {
      dimensions: {
        length: "14.8 meters",
        width: "9.2 meters",
        height: "4.5 meters"
      },
      performance: {
        maxSpeed: "27,500 km/h",
        maxAltitude: "450 km",
        maxRange: "2,300 km"
      },
      systems: {
        propulsion: "Dual ion thrusters with emergency chemical backup",
        navigation: "Quantum-assisted stellar positioning",
        communications: "Laser-based data transmission at 15 Tbps"
      },
      materials: {
        primaryHull: "Carbon-ceramic composite matrix",
        thermalShield: "Multi-layer insulation with ablative coating",
        windows: "Transparent aluminum-oxynitride"
      }
    }
  };
const ProjectGallery = () => {
  const [is3DMode, setIs3DMode] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggle3DMode = () => setIs3DMode(prevMode => !prevMode);

  return (
    <Box
      w="full"
      borderRadius="md"
      overflow="hidden"
      position="relative"
      bg="transparent"
    >
      {/* Gradient Background */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(to-b, #0a1929, #061018)"
        zIndex="-1"
      />

      {/* Header with Title and Controls */}
      <Flex 
        justify="space-between" 
        align="center" 
        px={6} 
        py={4}
      >
        <Heading
          fontSize="2xl"
          color="yellow.300"
          fontWeight="medium"
        >
          ZEPHYR (2022)
        </Heading>
        
        <Flex gap={2}>
          <Button
            size="sm"
            variant="outline"
            colorScheme="blue"
            leftIcon={<ViewIcon />}
            onClick={toggle3DMode}
          >
            {is3DMode ? "2D View" : "3D View"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            colorScheme="teal"
            leftIcon={<InfoIcon />}
            onClick={onOpen}
          >
            Specifics
          </Button>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Box>
        {is3DMode ? (
          <Box p={4}>
            <ThreeDView modelPath={spacecraftData.modelPath} />
            </Box>
        ) : (
          <GalleryView views={spacecraftData.views} />
        )}

        {/* Tabs for Additional Information */}
        <Box px={6} pb={6}>
          <InfoTabs 
            overview={spacecraftData.overview} 
            stats={spacecraftData.stats} 
            technologies={spacecraftData.technologies} 
          />
        </Box>
      </Box>

      {/* Specifications Drawer */}
      <SpecificationsDrawer 
        isOpen={isOpen} 
        onClose={onClose} 
        specifications={spacecraftData.specifications} 
      />
    </Box>
  );
};

export default ProjectGallery;