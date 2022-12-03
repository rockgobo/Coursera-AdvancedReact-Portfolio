import { Heading, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box shadow='md' borderWidth='1px'>
      
        <Image src={imageSrc}></Image>
        <VStack spacing={8} p={5} align="left">
          <Heading>{title}</Heading>
          <Text>{description}</Text>
          <a href="#">see more <FontAwesomeIcon icon={faArrowRight} size="1x" /></a>
      </VStack>
    </Box>
  );
};

export default Card;
