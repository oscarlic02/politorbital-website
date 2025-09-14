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
const spacecraftDataArray = [
  {
    title: "Zephyr",
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
    overview: "Zephyr is an orbital spacecraft that aims to reach up to 1000 Km of altitude with up to 7 non professional passengers. This spacecraft has been developed by Challenge Division in occasion for the Student Aerospace Challenge 2024. The vehicle was so good that the Medical division won one prize. It’s also for this reason that Zephyr it’s the first vehicle of the team that is still in development for its optimisation after the Challenge. In 2024 PoliTOrbital decided to open the new “Zephyr Division” , who will manage the project. Zephyr, unlike the other vehicles of the team, will be printed in a larger size and will show every part of the inside of the vehicle and not just the exterior design.",
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
        title: "Aerothermodynamics",
        color: "blue.300",
        description: "Aerothermodynamics section had 2 roles: Imanaging the concept of the orbital vehicle: designing the exterior of the vehicle following the requirements imposed by the challenge and the literature. They choose the airfoil, the wing shape, the nose and the fuselage. They also dimensioned the thermal protection system using CFD analysis The concept of the mission profile: designing the mission profile of the vehicle, choosing to split it into two missions: one tourist at 400 Km for the ISS, and one for only Cargo at 1000 Km. They calculated the deltaV for both missions and designed the trajectories. They also calculated and designed the re-entry corridor."
      },
      {
        title: "Propulsion",
        color: "teal.300",
        description: "Propulsion section managed the propulsion system by designing the internal Tank for the propulsion systems, the attitude and control system with mini-thrusters, and the external nozzles. They decided on both the propellants for the launcher (Ariane Next) and the vehicle. The propellant will be used by the main engine and the mini-thrusters."
      },
      {
        title: "Structure & Materials",
        color: "purple.300",
        description: "Structure and materials section designed the Thermal Protection System based on the dimensioning calculations provided by Aerothermodynamnics. They also choose the propellants with Propulsion and decide every material that composes the structure of Zephyr."
      },
      {
        title: "Medical Aspects",
        color: "orange.300",
        description: "Medical Aspects section designed three types of devices used by the non-professional passengers of Zephyr that will monitor their health status. The system is composed of a suite that is connected to five electrodes attached to the body of the passenger. These electrodes communicate with a watch that shows instructions for the passengers based on the data obtained by the electrodes using an AI."
      },
      {
        title: "Market Analisys",
        color: "red.300",
        description: "Market Analysis section analized the competitors and the space in order to decide the ticket pricing for a single passenger and for 1 Kg of cargo. (Around 10K$)"
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
  },
  {
    title: "Salto",
    modelPath: "assets/Projects/Zephyr/zephyr.gltf",
    views: [
      {
        image: "assets/Projects/Salto/overview.jpg",
        title: "Overview",
        description: "Aerodynamic profile designed for atmospheric re-entry and optimal heat dissipation during high-velocity descent."
      },
      {
        image: "assets/Projects/Salto/side.png",
        title: "Side View",
        description: "Aerodynamic profile designed for atmospheric re-entry and optimal heat dissipation during high-velocity descent."
      }
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
  },
  {
    title: "Elysium",
    modelPath: "assets/Projects/Zephyr/zephyr.gltf",
    views: [
      {
        image: "assets/Projects/Elysium/overview.jpg",
        title: "Overview",
        description: "Aerodynamic profile designed for atmospheric re-entry and optimal heat dissipation during high-velocity descent."
      },
      {
        image: "assets/Projects/Elysium/side.png",
        title: "Side View",
        description: "Aerodynamic profile designed for atmospheric re-entry and optimal heat dissipation during high-velocity descent."
      },
      {
        image: "assets/Projects/Elysium/top.png",
        title: "Top View",
        description: "Optimized wing configuration provides stability during orbital maneuvers and controlled glide capabilities."
      },
      {
        image: "assets/Projects/Elysium/bottom.jpg",
        title: "Bottom View",
        description: "Optimized wing configuration provides stability during orbital maneuvers and controlled glide capabilities."
      },
      {
        image: "assets/Projects/Elysium/front.png",
        title: "Front View",
        description: "Heat-resistant shell design with integrated radiation shielding and sensor array for navigation."
      },
      {
        image: "assets/Projects/Elysium/back.png",
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
  },
  {
    title: "Antares",
    modelPath: "assets/Projects/Zephyr/zephyr.gltf",
    views: [
      {
        image: "assets/Projects/Antares/overview.png",
        title: "Overview",
        description: "Aerodynamic profile designed for atmospheric re-entry and optimal heat dissipation during high-velocity descent."
      }
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
        title: "Mission profile and concept",
        color: "blue.300",
        description: "Mission profile and concept provided the mission design of ANTARES and its concepts based on aerodynamic sizings. The vehicle can remain in free flight for one week or dock with the ISS for a mission lasting up to six months. In the case of free flight the cost of station keeping, considering typical LEO perturbations, is 1.10e-4 m/s. The capsule dimensions are 13.25 meters in height and 4.9 meters in diameter, with a mass at full capacity of 20.36 tons. To control attitude and reentry, grid fins and back wings have been integrated as control surfaces—the former used primarily in the atmosphere and the latter during hypersonic flight. All subsystems have been dimensioned and arranged within the capsule."
      },
      {
        title: "Propulsion",
        color: "teal.300",
        description: "Propulsion section designed the engine of ANTARES: it is designed to power a reusable capsule performing a deorbit manoeuvre and vertical landing during atmospheric re-entry. The Propellants are LOX/CH4. The selection was driven by considerations related to reusability, environmental sustainability and performance (I ≈300 s). The configuration is a Three atmospheric-optimized engines arranged in a triangular layout plus one central engine optimized for vacuum conditions The configuration is a Three atmospheric-optimized engines arranged in a triangular layout plus one central engine optimized for vacuum conditions."
      },
      {
        title: "Structure & Materials",
        color: "purple.300",
        description: "Structures & Materials section have dimensioned the tanks of ANTARES, using Al-Li 8090 T851 alloy, optimized with FEM analysis for static and vibrational loads. Thermal insulation is provided by MLI and cryocooler systems, capable of reducing boil-off to negligible values for a 3-month mission. CFRP was selected for the internal structure, with a study of the production cycle and recycling possibilities. Low-impact materials were also used for thermal-acoustic insulation (RPUF), radiation shielding (ceramic paint), titanium legs, and reinforced quartz and coated polycarbonate windows."
      },
      {
        title: "Medical Aspects",
        color: "orange.300",
        description: "The system developed Medical Aspects section is called STaR-ADEM and features a minimalist electrode array of just 8 to 16 strategically placed sensors, providing accurate sleep stage analysis without the complexity of full-scale EEG caps. These dry electrodes are made from MXene–PEDOT: PSS composites, combining excellent conductivity, flexibility, and biocompatibility for comfortable, gel- free, and reusable monitoring, ideal for extended missions. STar-ADEM is a lightweight, low- power EEG system designed for sleep monitoring in orbit. It uses Visible Light Communication (VLC) instead of conventional radio frequencies, eliminating electromagnetic interference and ensuring compatibility with onboard medical and electronic systems."
      },
      {
        title: "Market Analysis",
        color: "red.300",
        description: "Market analysis section performed different types of analysis for ANTARES: a SWOT analysis to outline the strengths, weaknesses, opportunities, and threats within the space tourism sector. The PESTLE and Fault Tree analysis further explore external factors and potential risks influencing the market. The business model for space tourism is analyzed using Porter’s Five Forces, cost-benefit differentiation, and a Business Model Canvas. The analysis emphasizes the importance of product differentiation in value creation."
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
  }
];
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
      {spacecraftDataArray.map((spacecraftData, index) => (<>
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
          id={`project-${spacecraftData.title}`}
        >
          <Heading
            fontSize="2xl"
            color="yellow.300"
            fontWeight="medium"
          >
            {spacecraftData.title}
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
        </>
      ))}
    </Box>
  );
};

export default ProjectGallery;