import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Sarah!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    pt="130px"
  >
    <VStack spacing={6} textAlign="center" color="white">
      <Avatar
        name="Sarah"
        src="https://i.pravatar.cc/150?img=7"
        size="xl"
        mb={4}
      />
      <Heading as="h1" size="xl">{greeting}</Heading>
      <Heading as="h3" size="lg">{bio1}</Heading>
      <Heading as="h3" size ="lg">{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
