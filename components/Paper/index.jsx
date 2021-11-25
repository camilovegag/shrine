import { Flex } from "native-base";
import React from "react";

const Paper = ({ children }) => (
  <Flex bg="#505050" flex={1}>
    {children}
  </Flex>
);

export default Paper;
