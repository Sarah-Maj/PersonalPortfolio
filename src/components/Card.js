import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      spacing={4}
      backgroundColor="white"
      borderRadius="md"
      boxShadow="lg"
      overflow="hidden"
      align="start"
      p={4}
      h="100%"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <Heading as="h4" size="md">{title}</Heading>
      <Text>{description}</Text>
      <HStack spacing={2} align="center">
        <Text color="purple.500">Learn More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="lg"/>
      </HStack>
    </VStack>
    )
};

export default Card;
