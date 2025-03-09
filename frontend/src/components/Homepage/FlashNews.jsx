import { Flex, Text, Button, Divider } from '@chakra-ui/react';
import { getColors } from '../../utils/utils.jsx';
/**
 * FlashNews component displays a recruitment message with a call-to-action button.
 * @author Licciardi Oscar
 * @component
 * @example
 * return (
 *   <FlashNews />
 * )
 * 
 * @returns {JSX.Element} The FlashNews component.
 */
const FlashNews = () => {
  return (
    <Flex
      bg={getColors().black}
      color="white"
      direction="column"
      align="center"
      justify="center"
      py={6}
      px={4}
      textAlign="center"
    >
      <Divider borderColor="gray.500" width="80%" mb={12} border={'1px'} />
      <Text fontSize="2xl" fontWeight="bold" fontFamily="Nasalization" >
        WE ARE RECRUITING!
      </Text>
      <Button
        colorScheme="blue"
        variant="solid"
        fontFamily={'Space Grotesk'}
        backgroundColor={getColors().applyButton}
        rounded={'full'}
        size="md"
        mt={4}
        onClick={() => window.location.href = '/api/v1/apply'}
      >
        Apply now
      </Button>
      <Divider borderColor="gray.500" width="80%" mt={10} border={'1px'}/>
    </Flex>
  );
};

export default FlashNews;
