import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";

const projects = [
  {
    title: "React Space",
    description: "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    imageSrc: photo1,
  },
  {
    title: "React Infinite Scroll",
    description: "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    imageSrc: photo2,
  },
  {
    title: "Photo Gallery",
    description: "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    imageSrc: photo3,
  },
  {
    title: "Event planner",
    description: "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    imageSrc: photo4,
  },
];

const ProjectsSection = () => (
  <FullScreenSection
    backgroundColor="#14532d"
    isDarkBackground
    p={6}
    alignItems="flex-start"
    spacing={6}
    color="black" 
  >
    <Heading as="h1" id="projects-section" mb={6}> 
      Featured Projects
    </Heading>
    <Box
      display="grid"
      gridTemplateColumns={["repeat(1, minmax(0, 1fr))", "repeat(2, minmax(0, 1fr))"]} 
      gridGap={8}
      aria-labelledby="projects-section"
    >
      {projects.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          description={project.description}
          imageSrc={project.imageSrc} 
        />
      ))}
    </Box>
  </FullScreenSection>
);

export default ProjectsSection;
