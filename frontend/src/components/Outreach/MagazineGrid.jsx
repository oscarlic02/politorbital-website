import { useState } from "react";
import { Box, Button, Grid, Text, VStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// Mock data for articles TODO replace with actual data
let articlesData = [
  {
    id: 1,
    title: "STUDENT AEROSPACE CHALLENGE 2025 (NEW)",
    description:
      "PoliTOrbital’s ANTARES Wins Communication Prize for Medical Innovation at Student Aerospace Challenge 2025. In June 2025, PoliTOrbital, a student team from Politecnico di Torino, achieved a remarkable success at the Student Aerospace Challenge in Paris by winning the Communication Prize for the Medical Aspects section of their project ANTARES. This award recognizes the team’s innovative integration of advanced medical systems for human spaceflight within their orbital vehicle design. ANTARES is PoliTOrbital’s conceptual reusable orbital spacecraft designed for safe, sustainable human transportation to low Earth orbit. The project emphasizes environmental responsibility, passenger safety, and comfort—critical factors as the commercial spaceflight industry evolves. A standout feature of ANTARES is the incorporation of the STaR-ADEM medical system, developed by the team’s medical section to monitor and safeguard astronaut health during orbital missions. STaR-ADEM is a compact EEG-based system that monitors sleep stages with only 8 to 16 strategically placed dry electrodes. The electrodes are made from cutting-edge MXene–PEDOT:PSS composites, materials offering excellent electrical conductivity, flexibility, and biocompatibility. This allows STaR-ADEM to be gel-free, comfortable, lightweight, and reusable, ideal for the extended durations typical of orbital missions. STaR-ADEM transmits data using Visible Light Communication (VLC) instead of traditional radio frequencies. This eliminates electromagnetic interference with other sensitive onboard systems, ensuring reliable, safe data transmission in the spacecraft’s electronics-rich environment. Beyond sleep monitoring, ANTARES includes ergonomic cabin design and telemedicine capabilities for real-time health assessment and remote medical support, key to ensuring crew safety and comfort during orbital flights. This comprehensive approach addresses both physical and psychological needs, anticipating challenges of commercial space travel. Building on STaR-ADEM’s success, PoliTOrbital plans to advance medical systems for orbital missions, exploring improved radiation protection, psychological health support, and AI-driven health diagnostics. Partnerships with aerospace and medical industries are planned to develop prototypes and validate performance in microgravity environments. PoliTOrbital’s ANTARES and its innovative STaR-ADEM system illustrate how student-led projects are at the forefront of merging aerospace and medical engineering. Their success at the Student Aerospace Challenge 2025 highlights the growing importance of human-centered design in orbital spaceflight, paving the way for safer, more comfortable space exploration and tourism.",
    imageUrl: "assets/Articles/propulsion.png",
    extraImages: [
      "assets/Articles/BOOTH.jpeg",
      "assets/Articles/IPSESSION.jpeg",
      "assets/Articles/GUYS IN MILAN .jpeg"
    ]
  },
  {
    id: 2,
    title: "PoliTOrbital at IAC 2024: Zephyr's Debut on the Global Stage",
    description:
      "PoliTOrbital made an impressive mark at the International Astronautical Congress (IAC) 2024 in Milan, presenting its first orbital spacecraft—Zephyr—in an Interactive Presentation (IP) session. The team, represented by Antonio Policaro, Martina Chiachiaro, Federico Lacedonio, and Ilaria Zade, shared their journey and technical achievements. Presenting at IAC is a career milestone for many in the aerospace field; for PoliTOrbital, it marked the culmination of months of hard work and a bold step into the spotlight of international aerospace research. Zephyr is designed to reach orbital altitudes of up to 1000 km, accommodating up to seven non-professional passengers. The project was so impactful during the Challenge that PoliTOrbital’s Medical Division received a prize, validating not only the technical robustness of the spacecraft, but also the team's attention to human-centered design. Following the Challenge, the team announced the formation of a dedicated Zephyr Division in 2024 to continue refining and developing the spacecraft for future applications. Unlike previous models, Zephyr will be physically prototyped in a larger size, revealing its complete internal structure—a leap forward from traditional exterior-only mock-ups. The approach emphasizes full-system integration and realism in both form and function.",
    imageUrl: "assets/Articles/GUYS IN MILAN .jpeg",
    extraImages: [
      "assets/Articles/BOOTH.jpeg",
      "assets/Articles/IPSESSION.jpeg"
    ]
  }
];

const PAGE_SIZE = 6;

/**
 * MagazineGrid component renders a grid of magazine articles with a "Load More" button.
 * @author Licciardi Oscar
 * @component
 * @example
 * return (
 *   <MagazineGrid />
 * )
 * 
 * @returns {JSX.Element} The rendered MagazineGrid component.
 * 
 * @description
 * The MagazineGrid component displays a list of articles in a grid layout. Initially, a limited number of articles are shown, and more articles can be loaded by clicking the "Load More" button. The component uses Chakra UI for styling.
 * 
 * @hook
 * @name useState
 * @description Manages the state of the number of visible articles.
 * 
 * @function
 * @name loadMore
 * @description Increases the number of visible articles by the page size.
 * 
 * @constant {number} PAGE_SIZE - The number of articles to display per page.
 * 
 * @prop {Array} articlesData - The array of article objects to display. Each article object should have the following properties:
 * @prop {string} articlesData.id - The unique identifier for the article.
 * @prop {string} articlesData.title - The title of the article.
 * @prop {string} articlesData.description - A brief description of the article.
 * @prop {string} articlesData.imageUrl - The URL of the article's image.
 */
const MagazineGrid = () => {
    const [visibleArticles, setVisibleArticles] = useState(PAGE_SIZE);
    const navigate = useNavigate();
  
    return (
      <VStack spacing={6} p={6} align="center">
        <Text fontSize="3xl" fontWeight="bold" color="white">
          POLITORBITAL MAGAZINE
        </Text>
  
        {/* Article Grid */}
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6} w="full" maxW="1200px">
          {articlesData.slice(0, visibleArticles).map(({ id, title, description, imageUrl }) => (
            <Box
              key={id}
              bg="rgba(255, 255, 255, 0.1)"
              borderRadius="md"
              p={4}
              color="white"
              textAlign="left"
              cursor="pointer"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              onClick={() => navigate(`/articles/${id}`)}
            >
              <Image src={imageUrl} width="100%" borderRadius="md" mb={3} />
              <Text fontSize="xl" fontWeight="bold">{title}</Text>
              <Text fontSize="sm" opacity={0.8} mt={2}>{description.substring(0, 100)}...</Text>
              <Button variant="link" color="yellow.400" mt={2}>
                READ MORE
              </Button>
            </Box>
          ))}
        </Grid>
  
        {/* Load More Button */}
        {visibleArticles < articlesData.length && (
          <Button colorScheme="blue" variant="outline" onClick={() => setVisibleArticles((prev) => prev + PAGE_SIZE)}>
            LOAD MORE
          </Button>
        )}
      </VStack>
    );
  };
  
  export default MagazineGrid;