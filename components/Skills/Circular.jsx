import React from "react";
import { Text, Flex, CircularProgress } from "native-base";

const Circular = ({ value, skill }) => {
  return (
    <Flex align="center" mx={2.5}>
      <CircularProgress
        value={value}
        size={90}
        thickness={4}
        color="#00AEEF"
        trackColor="#444"
        min={0}
        max={100}
      >
        <Text color="#333" fontFamily="Nunito-semi-bold" fontSize="18px">
          {value}%
        </Text>
      </CircularProgress>
      <Text mt={2} fontFamily="Nunito-semi-bold">
        {skill}
      </Text>
    </Flex>
  );
};

export default Circular;
