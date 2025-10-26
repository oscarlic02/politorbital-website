import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Text, VStack, Image } from "@chakra-ui/react";

let articlesData = [
  {
    id: 1,
    title: "STUDENT AEROSPACE CHALLENGE 2025 (NEW)",
    content:
      "PoliTOrbital’s ANTARES Wins Communication Prize for Medical Innovation at Student Aerospace Challenge 2025. In June 2025, PoliTOrbital, a student team from Politecnico di Torino, achieved a remarkable success at the Student Aerospace Challenge in Paris by winning the Communication Prize for the Medical Aspects section of their project ANTARES. This award recognizes the team’s innovative integration of advanced medical systems for human spaceflight within their orbital vehicle design. ANTARES is PoliTOrbital’s conceptual reusable orbital spacecraft designed for safe, sustainable human transportation to low Earth orbit. The project emphasizes environmental responsibility, passenger safety, and comfort—critical factors as the commercial spaceflight industry evolves. A standout feature of ANTARES is the incorporation of the STaR-ADEM medical system, developed by the team’s medical section to monitor and safeguard astronaut health during orbital missions. STaR-ADEM is a compact EEG-based system that monitors sleep stages with only 8 to 16 strategically placed dry electrodes. The electrodes are made from cutting-edge MXene–PEDOT:PSS composites, materials offering excellent electrical conductivity, flexibility, and biocompatibility. This allows STaR-ADEM to be gel-free, comfortable, lightweight, and reusable, ideal for the extended durations typical of orbital missions. STaR-ADEM transmits data using Visible Light Communication (VLC) instead of traditional radio frequencies. This eliminates electromagnetic interference with other sensitive onboard systems, ensuring reliable, safe data transmission in the spacecraft’s electronics-rich environment. Beyond sleep monitoring, ANTARES includes ergonomic cabin design and telemedicine capabilities for real-time health assessment and remote medical support, key to ensuring crew safety and comfort during orbital flights. This comprehensive approach addresses both physical and psychological needs, anticipating challenges of commercial space travel. Building on STaR-ADEM’s success, PoliTOrbital plans to advance medical systems for orbital missions, exploring improved radiation protection, psychological health support, and AI-driven health diagnostics. Partnerships with aerospace and medical industries are planned to develop prototypes and validate performance in microgravity environments. PoliTOrbital’s ANTARES and its innovative STaR-ADEM system illustrate how student-led projects are at the forefront of merging aerospace and medical engineering. Their success at the Student Aerospace Challenge 2025 highlights the growing importance of human-centered design in orbital spaceflight, paving the way for safer, more comfortable space exploration and tourism.",
    imageUrl: "/assets/Articles/propulsion.png",
    extraImages: [
      "/assets/Articles/BOOTH.jpeg",
      "/assets/Articles/IPSESSION.jpeg",
      "/assets/Articles/GUYS IN MILAN .jpeg"
    ]
  },
  {
    id: 2,
    title: "PoliTOrbital at IAC 2024: Zephyr's Debut on the Global Stage",
    content:
      "PoliTOrbital made an impressive mark at the International Astronautical Congress (IAC) 2024 in Milan, presenting its first orbital spacecraft—Zephyr—in an Interactive Presentation (IP) session. The team, represented by Antonio Policaro, Martina Chiachiaro, Federico Lacedonio, and Ilaria Zade, shared their journey and technical achievements. Presenting at IAC is a career milestone for many in the aerospace field; for PoliTOrbital, it marked the culmination of months of hard work and a bold step into the spotlight of international aerospace research. Zephyr is designed to reach orbital altitudes of up to 1000 km, accommodating up to seven non-professional passengers. The project was so impactful during the Challenge that PoliTOrbital’s Medical Division received a prize, validating not only the technical robustness of the spacecraft, but also the team's attention to human-centered design. Following the Challenge, the team announced the formation of a dedicated Zephyr Division in 2024 to continue refining and developing the spacecraft for future applications. Unlike previous models, Zephyr will be physically prototyped in a larger size, revealing its complete internal structure—a leap forward from traditional exterior-only mock-ups. The approach emphasizes full-system integration and realism in both form and function.",
    imageUrl: "/assets/Articles/GUYS IN MILAN .jpeg",
    extraImages: [
      "/assets/Articles/BOOTH.jpeg",
      "/assets/Articles/IPSESSION.jpeg"
    ]
  }
];

/**
 * Article component that displays the details of a specific article.
 *
 * This component fetches the article data based on the `id` parameter from the URL,
 * and displays the title, subtitle, content, and an image placeholder.
 * If the article is not found, it shows a "Article not found" message.
 * @author Licciardi Oscar
 * @component
 * @example
 * // Example usage:
 * // Assuming you have a route setup to render this component
 * <Route path="/article/:id" component={Article} />
 *
 * @returns {JSX.Element} The rendered Article component.
 */
const Article = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  let article = articlesData.find((art) => art.id === parseInt(articleId));

  if (!article) {
    return (
      <VStack spacing={6} p={6} align="center" color="white">
        <Text fontSize="2xl" fontWeight="bold">Article not found</Text>
        <Button colorScheme="blue" onClick={() => navigate(-1)}>Go Back</Button>
      </VStack>
    );
  }


  return (
    <VStack spacing={6} p={6} align="center" color="white">
      {/* Title and Subtitle */}
      <Text fontSize="4xl" fontWeight="bold">
        {article.title}
      </Text>
      <Text fontSize="xl" opacity={0.8}>
        {article.subtitle}
      </Text>

      {/* Image Placeholder */}
      <Image
        src={article.imageUrl}
        alt={article.title}
        width="80%"
        borderRadius="md"
      />

      {/* Article Content */}
      <Box w="80%" textAlign="left">
        <Text fontSize="md" lineHeight="tall">
          {article.content}
        </Text>
      </Box>

      {/* Back Button */}
      <Button
        colorScheme="blue"
        variant="outline"
        onClick={() => navigate("/outreach")}
      >
        More Articles
      </Button>
    </VStack>
  );
};

export default Article;
