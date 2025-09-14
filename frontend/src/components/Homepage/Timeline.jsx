import { Box, Flex, Text, VStack, Center } from "@chakra-ui/react";
import PropTypes from 'prop-types';
import React from "react";

/**
 * TimelineItem component renders a timeline item with a year, title, description, and a "LEARN MORE" link.
 * It displays the item on the left or right side based on the `isLeft` prop and adds a connecting line if it's not the last item.
 * @author Licciardi Oscar
 * @param {Object} props - The properties object.
 * @param {string} props.year - The year to display.
 * @param {string} props.title - The title to display.
 * @param {string} props.description - The description to display.
 * @param {boolean} props.isLeft - Determines if the item should be aligned to the left.
 * @param {boolean} props.isLast - Determines if the item is the last in the timeline.
 * @returns {JSX.Element} The rendered TimelineItem component.
 */
const TimelineItem = ({ year, title, description, isLeft, isLast }) => {
  const [openDescriptions, setOpenDescriptions] = React.useState({});

  return (
    <Flex position="relative" w="full" justify="center" py={12}>
      {!isLast && (
        <Box
          position="absolute"
          top="50%"
        left="50%"
        transform="translateX(-50%)"
        width="2px"
        height="120%" 
        bg="rgba(255,255,255,0.3)"
        zIndex={1}
      />
    )}
    
    <Flex w="full" justify="space-between" align="center" position="relative">
      <Box w="45%" textAlign={isLeft ? "right" : "center"} pr={isLeft ? 6 : 0} visibility={isLeft ? "visible" : "hidden"}>
        <Text fontSize="lg" fontWeight="bold" color="white">
          {year} - {title}
        </Text>
        <Text color="gray.300" fontSize="sm" mt={1}>
          {openDescriptions[title] ? description : `${description.substring(0, 100)}...`}
        </Text>
        <Text color="yellow.400" fontSize="xs" fontWeight="bold" mt={2} cursor="pointer" onClick={() => setOpenDescriptions((prev) => ({ ...prev, [title]: !prev[title] }))}>
          LEARN MORE
        </Text>
      </Box>
      
      <Center position="relative" w="10%" zIndex={2}>
        <Box 
          w="10px" 
          h="10px" 
          borderRadius="full" 
          bg="white" 
          position="relative" 
          zIndex={3}
          boxShadow="0 0 0 2px rgba(255,255,255,0.2)"
        />
        
        <Box
          position="absolute"
          top="50%"
          width="50px"
          height="2px"
          bg="rgba(255,255,255,0.3)"
          transform="translateY(-50%)"
          left={isLeft ? "auto" : "50%"}
          right={isLeft ? "50%" : "auto"}
        />
      </Center>

      <Box w="45%" textAlign={!isLeft ? "left" : "center"} pl={!isLeft ? 6 : 0} visibility={!isLeft ? "visible" : "hidden"}>
        <Text fontSize="lg" fontWeight="bold" color="white">
          {year} - {title}
        </Text>
        <Text color="gray.300" fontSize="sm" mt={1}>
          {openDescriptions[title] ? description : `${description.substring(0, 100)}...`}
        </Text>
        <Text color="yellow.400" fontSize="xs" fontWeight="bold" mt={2} cursor="pointer" onClick={() => setOpenDescriptions((prev) => ({ ...prev, [title]: !prev[title] }))}>
          LEARN MORE
        </Text>
      </Box>
    </Flex>
  </Flex>
);
}

const Timeline = () => {
  const events = [
    { year: "2019", title: "The creation of the team", description: "Born in 2019, PoliTOrbital began its journey into orbit. During the 2019/2020 academic year, a group of students discovered the Aerospace Student Challenge in Paris and, driven bytheir enthusiasm, created PoliTOrbital", isLeft: true },
    { year: "November 2020", title: "First challenge", description: "Every year in June, the team participates in the Student Aerospace Challenge, aiming to win with a new concept developed by team members across multiple areas. At the beginning, our sections weren't the same as the ones you can apply to today, but the spirit of the team remained unchanged. This was our first challenge, and although we were inexperienced, we proudly brought the first versions of different spacecrafts to Paris, one concept for each section.", isLeft: false },
    { year: "December 2020", title: "As one", description: "After our first challenge in June, we learned a lot about space tourism and the true spirit of the competition. For the new academic year, we decided to continue working on SALTO, the concept of Structures and Material team from the previous academic year, aiming to perfect it and present an improved version in Paris with a new team. Alongside technical enhancements, new sections were created, covering areas like market analysis, bringing fresh studies and perspectives to the project. We also changed our logo for the first time!", isLeft: true },
    { year: "June 2021", title: "SALTO takes Paris!", description: "During the 2020/2021 academic year, even in the midst of a global pandemic, we used all our knowledge to perfect SALTO and work with a single concept for all of the sections — and that effort paid off! That year, we won our first prizes in Paris, with the award going to our Structures and Materials, Propulsion and Aerothermodynamics sections.", isLeft: false },
    { year: "June 2022", title: "New Challenge!", description: "After a new recruitment round in March, we decided to build upon the SALTO project by creating its successor: SALTO II. It was an upgraded version of the vehicle that had triumphed in 2021, featuring a new fuselage, a new propulsion system, and winglets! This time, the Aerothermodynamics section brought home the prize.During this year we also printed SALTO II in PLA for expositions and fairs!", isLeft: true },
    { year: "September 2023", title: "new (academic) year, new (suborbital vehicle) me", description: "During its first three years, PoliTOrbital focused first on developing different prototypes, and then on refining a single one through multiple versions. However, we decided it was time to change the game by working on a brand-new suborbital vehicle: ELYSIUM. While the sections remained the same, the concept was completely new — it was our first attempt for a wing-body spacecraft.", isLeft: false },
    { year: "June 2023", title: "ELYSIUM, the perfect suborbital vehicle for space tourism", description: "During this academic year, we took risks — developing a brand-new concept was tough, but our team brought home three prizes from Paris! Aerothermodynamics, Structures & Materials, and Propulsion were the sections awarded at the Student Aerospace Challenge 2023. The competition was fierce, but ELYSIUM stood out as the best result of all our efforts. We also 3D-printed it using nylon powder, achieving a more polished and refined look compared to SALTO II — though, of course, we love both of our creations like proud parents.", isLeft: true },
    { year: "September 2023", title: "New Highs for space tourism", description: "After perfecting the suborbital vehicle, we asked ourselves how we could continue challenging ourselves in the Student Aerospace Challenge, especially after SALTO and ELYSIUM's domination in Paris in previous years. PoliTOrbital strives to innovate every year, but always with a deep respect for the traditions of the challenge. So, how could we elevate our work? Since 2019, we’ve been developing concepts for space tourism, but for the new academic year, we wanted to reach new heights! The answer to our question was clear: it was time to develop an orbital vehicle for tourists!", isLeft: false },
    { year: "June 2024", title: "ZEPHYR, the wind of something new", description: "Our first attempt at an orbital vehicle was incredibly ambitious. Starting from concepts of spaceplanes with a gliding re-entry, we aimed to develop the full concept from multiple aspects during this academic year, and, just like our previous risks, it paid off! ZEPHYR won a prize in Paris for Medical Aspects — marking their first victory since the creation of PoliTOrbital! Other than the challenge this year was very important to us as we gained our first sponsor: GMSpazio and with them we had the opportunity to learn more about STK and give our work a more technical and validated background.", isLeft: true },
    { year: "September 2024", title: "Double or quit!", description: "ZEPHYR wasn’t fully successful in Paris this year, and we felt the right course of action was to perfect it. After all, it was our first attempt at orbital altitude. However, as recruitment season approached, we also wanted to innovate and refresh the entire team. We didn’t want to quit the challenge, but we did want to try something new — so the right choice was to double our perspectives! We re-branded the team with new divisions and a fresh logo. A lot changed, but at our core, we are still PoliTOrbital.", isLeft: false },
    { year: "Today", title: "Rebrand yourself!", description: "We decided that the Challenge Division would develop a new spacecraft with a capsule-like concept, while the Zephyr Division would continue refining the Zephyr from the previous year, aiming to 3D-print a larger-scale prototype with far more detail than ELYSIUM and SALTO, and maybe even test it in a wind tunnel. It’s the beginning of a revolution! We also launched the Media & Outreach Division, which manages this website and the incredible story you've just read!", isLeft: true },
  ];

  return (
    <Box bgGradient="linear(to-b, gray.900, black)" minH="100vh" py={12} px={4}>
      <VStack spacing={6} mb={16}> 
        <Text fontSize="sm" fontWeight="medium" color="gray.400" letterSpacing="wider" textTransform="uppercase">
          OUR TIMELINE
        </Text>
        <Text fontSize="3xl" fontWeight="bold" color="white" textAlign="center">
          An innovation history
        </Text>
        <Text fontSize="3xl" fontWeight="bold" color="white" textAlign="center" mt="-2">
          written day by day
        </Text>
      </VStack>

      <Box position="relative" maxW="1200px" mx="auto" px={8} py={4}>
        {events.map((event, index) => (
          <TimelineItem 
            key={index} 
            {...event} 
            isLast={index === events.length - 1}
          />
        ))}
      </Box>
    </Box>
  );
};

TimelineItem.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isLeft: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
};

export default Timeline;