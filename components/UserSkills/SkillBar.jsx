import React from "react";
import { Stack, Box, Progress, Center, Text } from "native-base";
import { Dimensions } from "react-native";

export default function Skills(props) {
  var i = -1;
  var array = props.val.slice(6, props.val.length);
  return array.map((a, idx) => {
    i++;
    return (
      <Box key={idx} p="16px">
        <Center>
          <Box w="100%">
            <Stack direction="row" space={3} justifyContent="space-around">
              <Text fontSize="18px">{array[i]["value"]}%</Text>
              <Stack
                direction="column"
                space={0.5}
                justifyContent="space-around"
              >
                <Text style={{ fontSize: 15 }}>{array[i]["name"]}</Text>
                <Box w={Dimensions.get("window").width * 0.7}>
                  <Progress value={array[i]["value"]} size="xs" bg="black" />
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Center>
      </Box>
    );
  });
}
