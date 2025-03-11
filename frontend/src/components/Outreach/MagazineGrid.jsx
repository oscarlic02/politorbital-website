import { useState } from "react";
import { Box, Button, Grid, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// Mock data for articles TODO replace with actual data
const articlesData = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  title: `Title ${i + 1}`,
  description:
    "Augue congue turpis ut purus ut nibh sit. Et consectetur et volutpat blandit sed facilisis.",
  imageUrl: "",
}));

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
          {articlesData.slice(0, visibleArticles).map(({ id, title, description }) => (
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
              <Box bg="gray.700" h="150px" borderRadius="md" mb={3} />
              <Text fontSize="xl" fontWeight="bold">{title}</Text>
              <Text fontSize="sm" opacity={0.8} mt={2}>{description}</Text>
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