import { useState } from 'react';
import {
  Box,
  Text,
  Heading,
  FormControl,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Container,
  useToast
} from '@chakra-ui/react';

/**
 * @description PartnerApplicationForm component renders a form for users to apply as partners.
 * It includes fields for name, email, company, and a message.
 * The form data is managed using the useState hook.
 * On form submission, a simulated API call is made to submit the form data.
 * A toast notification is displayed to indicate the success or failure of the submission.
 * The form is reset upon successful submission.
 * @author Licciardi Oscar
 * @component
 * @example
 * return (
 *   <PartnerApplicationForm />
 * )
 */
const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO - Submit form data to backend
    // This is a fake API call to simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: 'Application submitted',
        description: "We'll reconnect you in few days!",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch {
      toast({
        title: 'Error submitting form',
        description: "Please try again later.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Box 
      bg="black" 
      backgroundImage="linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/path-to-space-background.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      py={12}
      px={6}
      width="100%"
    >
      <Container maxW="1200px">
        <Box mb={8}>
          <Text 
            color="gray.400"
            textTransform="uppercase"
            fontWeight="semibold"
            mb={1}
          >
            Become a Partner
          </Text>
          <Heading 
            as="h2" 
            color="white" 
            fontSize={{ base: "2xl", md: "3xl" }}
            lineHeight="1.2"
            fontWeight="medium"
            mb={4}
          >
            Want to be part of the innovation?
          </Heading>
          <Text color="gray.300" fontSize="sm">
            We are looking for new partner in the xxx, yyy fields in order to ... [texto da scrivere]
          </Text>
        </Box>
        
        <Box as="form" onSubmit={handleSubmit}>
          <HStack 
            align="flex-start"
            spacing={6}
            flexDirection={{ base: "column", md: "row" }}
          >
            {/* Left column - Input fields */}
            <VStack spacing={4} width={{ base: "100%", md: "40%" }}>
              <FormControl isRequired>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  bg="white"
                  color="gray.800"
                  border="none"
                  borderRadius="md"
                  height="12"
                  _placeholder={{ color: "gray.500" }}
                />
              </FormControl>
              
              <FormControl isRequired>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  type="email"
                  bg="white"
                  color="gray.800"
                  border="none"
                  borderRadius="md"
                  height="12"
                  _placeholder={{ color: "gray.500" }}
                />
              </FormControl>
              
              <FormControl isRequired>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  bg="white"
                  color="gray.800"
                  border="none"
                  borderRadius="md"
                  height="12"
                  _placeholder={{ color: "gray.500" }}
                />
              </FormControl>
              
              <Box alignSelf="flex-start" mt={2}>
                <Button
                  type="submit"
                  bg="blue.800"
                  color="white"
                  size="md"
                  px={8}
                  fontWeight="medium"
                  _hover={{ bg: "blue.700" }}
                  isLoading={isSubmitting}
                  loadingText="Sending"
                >
                  SEND
                </Button>
              </Box>
            </VStack>
            
            {/* Right column - Message textarea */}
            <FormControl isRequired width={{ base: "100%", md: "60%" }}>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                bg="white"
                color="gray.800"
                border="none"
                borderRadius="md"
                _placeholder={{ color: "gray.500" }}
                rows={7}
                resize="none"
              />
            </FormControl>
          </HStack>
          
          <Text color="gray.400" fontSize="sm" textAlign="right" mt={2}>
            Thank you! We will contact you in few days!
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default ApplyForm;