import React from "react";
import { Text } from "native-base";
import Paper from "../../components/Paper";

const Home = () => (
  <Paper>
    <Text
      color="#fff"
      fontFamily="Nunito-regular"
      fontSize="20px"
      my={8}
      mx={4}
    >
      Hello, User.
    </Text>
  </Paper>
);

export default Home;
