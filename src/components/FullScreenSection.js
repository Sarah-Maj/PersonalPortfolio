import * as React from "react";
import { VStack, Box } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, backgroundColor, ...boxProps }) => {
  return (
    <Box
      display="flex"
    justifyContent="center"
    backgroundColor={backgroundColor || "transparent"}
    >
      <VStack
        maxWidth="1280px"
      width="100%"
      minHeight="100vh"
        color={isDarkBackground ? "white" : "black"}
        {...boxProps}
      >
        {children}
      </VStack>
      </Box>
      
  );
};

export default FullScreenSection;
