import React from "react";
import { StyleSheet, View } from "react-native";
import Skills from "./SkillBar";
import { Box, Text } from "native-base";
import Carousel from "./Carousel";

export default function App({ skills, first_name }) {
  var val = skills;
  val.sort(function sort(a, b) {
    return b["value"] - a["value"];
  });
  return (
    <Box mt={8}>
      <View style={{ height: 180, alignContent: "flex-start" }}>
        <Text
          color="#333"
          fontFamily="Nunito-semi-bold"
          fontSize="18px"
          mb={4}
          mx={4}
        >
          Top Skills
        </Text>
        <Carousel val={val} />
      </View>
      <Text
        color="#333"
        fontFamily="Nunito-semi-bold"
        fontSize="18px"
        my={4}
        mx={4}
      >
        {first_name + " also knows about"}
      </Text>
      <Skills val={val} />
    </Box>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "flex-start"
  }
});
