import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Button } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
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

  /**
   * Bonus: Hide header on scroll down
   */
  const headerBox = useRef(0);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function handleScroll() {
      console.log(headerBox)
      let currentPosition = window.pageYOffset;
      if (currentPosition > scrollTop) {
        headerBox.current.style.transform = 'translateY(-200px)';
      } else {
        headerBox.current.style.transform = 'translateY(0)';
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTop]);


  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerBox}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={2}>
            {
              /* Add social media links based on the `socials` data */
              socials.map(s =>
                <a href={s.url} key={s.url} target="_blank">
                  <FontAwesomeIcon icon={s.icon} size="2x"></FontAwesomeIcon>
                </a>)
            }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={2}>
              {/* Add links to Projects and Contact me section */}
              <a onClick={handleClick('projects')} href="#/projects">Projects</a>
              <a onClick={handleClick('contactme')} href="#/contact-me">Contact</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
