import { Flex, Text, Button } from '@chakra-ui/react';

const FlashNews = () => {
  return (
    <Flex
      bg="gray.800"
      color="white"
      align="center"
      justify="space-between"
      px={8}
      py={4}
    >
      <Text fontSize="md" fontWeight="bold">
        LOREM IPSUM LOREM!
      </Text>
      <Button
        colorScheme="blue"
        variant="solid"
        size="sm"
        onClick={() => window.location.href = 'http://localhost:5000/api/v1/apply'}
      >
        Lorem Ipsum
      </Button>
    </Flex>
  );
};

export default FlashNews;