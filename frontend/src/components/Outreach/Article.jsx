import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Text, VStack } from "@chakra-ui/react";

const articlesData = [
    {
      id: 0,
      title: "Exploring the Future of Space Tourism",
      subtitle: "A deep dive into the next frontier",
      content: `
        Space tourism is no longer a dream; it's becoming a reality. With private companies like SpaceX, Blue Origin, and Virgin Galactic leading the way, the industry is evolving rapidly. 
        Politorbital team, a research group from Politecnico di Torino, has been developing cutting-edge suborbital spacecraft designs to make space travel more accessible. 
        
        In this article, we explore the engineering behind these spacecraft, the challenges of space travel, and the potential for commercial space tourism in the coming decade.
        
        ## The Rise of Space Tourism
        The concept of space tourism dates back to the early days of space exploration. However, recent advancements in reusable rocket technology have made it more viable. 
        Companies are now offering suborbital and orbital experiences to private citizens, creating a new era of space travel.
        
        ## Challenges & Innovations
        Some of the major challenges of space tourism include:
        
        - **Cost Efficiency**: Making space travel affordable for more people.
        - **Safety Measures**: Ensuring safe launches, landings, and in-flight experiences.
        - **Sustainable Space Travel**: Reducing environmental impact through innovative fuel sources.
        
        ## What’s Next?
        Experts predict that within the next 10-20 years, we could see orbital hotels, lunar tourism, and even deep-space missions open to civilians.
        
        Join us as we continue to push the boundaries of what's possible in space travel!
      `,
      imageUrl: "https://via.placeholder.com/600x300", // Example image placeholder
    },
    ...Array.from({ length: 19 }, (_, i) => ({
      id: i + 1,
      title: `Title ${i + 1}`,
      subtitle: "Subtitle",
      content:
        "Politorbital team is a university team from Politecnico di Torino born in 2020 for designing suborbital spacecrafts for space tourism. ".repeat(
          10
        ),
      imageUrl: "https://via.placeholder.com/600x300", // Placeholder image
    })),
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
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articlesData[0]; // Fetch article data based on ID


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
      <Box w="80%" h="300px" bg="gray.700" borderRadius="lg" mt={4}></Box>

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
