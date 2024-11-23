import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: sarahmalshalhoub@gmail.com",
    label: "Email",
  },
  {
    icon: faGithub,
    url: "https://github.com/Sarah-Maj",
    label: "GitHub",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/sarah-alshalhoub-713126228",
    label: "LinkedIn",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    label: "Medium",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    label: "Stack Overflow",
  },
];

const Header = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const previouslyScrollY = useRef(0);

  // Throttled scroll handler
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > previouslyScrollY.current) {
      setIsScrolledDown(true);
    } else {
      setIsScrolledDown(false);
    }

    previouslyScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={isScrolledDown ? "translateY(-100%)" : "translateY(0)"}
      transition="transform 0.3s ease-in-out"
      backgroundColor="#18181b"
      zIndex={10}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          {/* Social Links */}
          <nav>
            <HStack spacing={4}>
              {socials.map((social) => (
                <Link
                  href={social.url}
                  key={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  _hover={{ color: "purple.400" }}
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </Link>
              ))}
            </HStack>
          </nav>

          {/* Navigation Links */}
          <nav>
            <HStack spacing={8}>
              <Link
                onClick={handleClick("projects")}
                _hover={{ textDecoration: "underline", color: "purple.400" }}
                color="white"
              >
                Projects
              </Link>
              <Link
                onClick={handleClick("contactme")}
                _hover={{ textDecoration: "underline", color: "purple.400" }}
                color="white"
              >
                Contact Me
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
