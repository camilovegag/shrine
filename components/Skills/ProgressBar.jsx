import React from "react";
import { Flex, Progress, Text } from "native-base";

const ProgressBar = ({ value, skill }) => {
  return (
    <Flex direction="row" align="center" mb={4}>
      <Text fontSize="20px" fontFamily="Nunito-semi-bold" mr={2} w="55px">
        {value}%
      </Text>
      <Flex flex={1}>
        <Text mb={1}>{skill}</Text>
        <Progress value={value} size="xs" bg="#444" min={0} max={100} />
      </Flex>
    </Flex>
  );
};

export default ProgressBar;
