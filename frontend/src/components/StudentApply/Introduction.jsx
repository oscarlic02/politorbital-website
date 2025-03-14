import { Box, Text, Link } from "@chakra-ui/react";
/**
 * Introduction component renders a section with information about recruitment for the PoliOrbital Team.
 * It includes a title, a brief description of available positions, links to open positions and FAQs,
 * and contact information for further inquiries.
 * @author Licciardi Oscar
 * @component
 * @example
 * return (
 *   <Introduction />
 * )*/

const Introduction = () => {

  return (
    <Box
    bgGradient={`black`}
    >
    <Box
      borderRadius="lg"
      textAlign="left"
      color="white"
      maxW="80%"
      mx="auto"
    >
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="wider"
        mb={4}
      >
        We Are Recruiting!
      </Text>

      <Text fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
        Get Involved! PoliOrbital Team has many positions available for
        undergraduate and graduate students of Politecnico di Torino. Here you
        can find our{" "}
        <Link color="teal.300" href="#" fontWeight="bold">
          Open Positions
        </Link>{" "}
        and some{" "}
        <Link color="teal.300" href="#" fontWeight="bold">
          Frequently Asked Questions
        </Link>{" "}
        about our recruitment process or about the Team.
      </Text>

      <Text fontSize={{ base: "md", md: "lg" }} mt={4}>
        If you still have some questions, don’t hesitate to reach out to us on
        social media or at{" "}
        <Link
          href="mailto:recruitment@politorbital.it"
          color="teal.300"
          fontWeight="bold"
        >
          recruitment@politorbital.it
        </Link>
        .
      </Text>
    </Box>^
    </Box>

  );
};

export default Introduction;
