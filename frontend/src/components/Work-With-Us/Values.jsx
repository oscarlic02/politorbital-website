import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { AboutSection, ValueCard } from "../../utils/utils";
const AboutUsSection = () => {
  // TODO - Replace this static data with data fetched from the backend
  const aboutData = {
    heading: "We design of leo spacecrafts for space tourism",
    subText:
      "Politecnico team is a universitary team from Politecnico di Torino born in 2020 for designing suborbitals spacecrafts for space tourism.",
    values: [
      {
        number: 1,
        description:
          "Thesauri non eruditas non. Neque integet non ut fusce risus ut nulla totis. Risus duis bibendum.",
      },
      {
        number: 2,
        description:
          "Thesauri non eruditas non. Neque integet non ut fusce risus ut nulla totis. Risus duis bibendum.",
      },
      {
        number: 3,
        description:
          "Thesauri non eruditas non. Neque integet non ut fusce risus ut nulla totis. Risus duis bibendum.",
      },
    ],
  };

  return (
    <Box py={12} px={6} bg="black" width="100%">
      <Box maxW="1200px" mx="auto">
        {/* About section */}
        <Box mb={10}>
          <Text
            color="gray.400"
            textTransform="uppercase"
            mb={2}
            fontWeight="bold"
          >
            ABOUT US
          </Text>
          <AboutSection
            aboutText={aboutData.heading}
            subText={aboutData.subText}
          />
        </Box>

        {/* Values grid */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {aboutData.values.map((value) => (
            <ValueCard
              key={value.number}
              number={value.number}
              description={value.description}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default AboutUsSection;
