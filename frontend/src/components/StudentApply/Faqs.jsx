import {
    Box,
    VStack,
    Heading,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Container,
  } from "@chakra-ui/react";
  import PropTypes from "prop-types";
  import { getColors } from "../../utils/utils";
  
/**
 * FAQItem component renders a single FAQ item with a question and answer.
 * @author Licciardi Oscar
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.question - The question text for the FAQ item.
 * @param {string} props.answer - The answer text for the FAQ item.
 * @returns {JSX.Element} The rendered FAQ item component.
 */
  const FAQItem = ({ question, answer }) => (
    <AccordionItem border="none" mb={4}>
      <h2>
        <AccordionButton
          bg="rgba(255, 255, 255, 0.1)"
          _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
          borderRadius="md"
          p={4}
        >
          <Box flex="1" textAlign="left" fontWeight="semibold" color="white">
            {question}
          </Box>
          <AccordionIcon color="white" />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} pt={4} px={4} color="gray.200">
        <Text>{answer}</Text>
      </AccordionPanel>
    </AccordionItem>
  );
  
  FAQItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  };

/**
 * FAQsSection component renders a section containing frequently asked questions.
 *
 * @param {Object} props - The component props.
 * @param {Array} [props.faqData=defaultFAQs] - An array of FAQ data to be displayed.
 * @returns {JSX.Element} The rendered FAQs section.
 */

  const FAQs = ({ faqData = defaultFAQs }) => {
    const colors = getColors();
  
    return (
      <Box
        bgGradient={`linear(to-b, ${colors.primary}, ${colors.black})`}
        py={12}
        id="faqs"
      >
        <Container maxW="container.lg">
          <VStack spacing={8} align="stretch">
            <Box textAlign="center" mb={8}>
              <Heading as="h2" size="xl" color="white" mb={4}>
                ANY DOUBTS?
              </Heading>
              <Text fontSize="lg" color="gray.300">
                Frequently Asked Questions
              </Text>
            </Box>
  
            <Accordion allowMultiple>{faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}</Accordion>
          </VStack>
        </Container>
      </Box>
    );
  };
  
  FAQs.propTypes = {
    faqData: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
      })
    ),
  };
  
  // TODO: Replace defaultFAQs with actual FAQ data
  const defaultFAQs = [
    {
      question: "This position involves identifying potential sponsors?",
      answer:
        "Yes, this position involves identifying potential sponsors, organizing presentation meetings, negotiating sponsorship and licensing agreements, and fostering long-term partnerships.",
    },
    {
      question: "What skills are required for this position?",
      answer:
        "This role requires excellent communication skills, negotiation abilities, relationship management experience, and a strategic mindset for developing partnerships.",
    },
    {
      question: "Is prior experience in sponsorship management necessary?",
      answer:
        "Prior experience in sponsorship or partnership management is highly valued, though candidates with strong transferable skills from related fields may also be considered.",
    },
    {
      question: "What are the primary responsibilities of this role?",
      answer:
        "Primary responsibilities include researching potential sponsors, creating compelling partnership proposals, negotiating agreements, managing ongoing relationships, and reporting on partnership outcomes.",
    },
  ];
  
  export default FAQs;