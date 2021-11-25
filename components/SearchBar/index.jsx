import React from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  FlatList,
  Flex,
  Icon,
  Input,
  Text
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { filterByName } from "../../redux/actions";
import { MaterialIcons } from "@expo/vector-icons";

export default function SearchBar(navigation) {
  return <AppWrapper {...navigation} />;
}

const AppWrapper = (navigation) => {
  const filteredList = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  return (
    <Center py={8} px={4}>
      <Input
        autoCorrect={false}
        alignItems="center"
        autoCapitalize="none"
        borderColor="#fff"
        borderWidth={1}
        color="#fff"
        onChangeText={(value) => dispatch(filterByName(value))}
        placeholder="Search a user..."
        size="lg"
        InputRightElement={
          <Icon as={MaterialIcons} name="search" size={6} pr="8" color="#fff" />
        }
        _focus={{ borderColor: "#C4D600", color: "#fff" }}
        selectionColor="#C4D600"
      />

      {filteredList["text"].length === 0 ? (
        console.log("No results")
      ) : (
        <FlatList
          nestedScrollEnabled
          value=""
          keyExtractor={(array) => array.profile.email}
          data={filteredList["text"]}
          renderItem={({ item }) => {
            return (
              <Button
                backgroundColor="#333"
                width={400}
                py={3}
                borderRadius={0}
                alignItems="flex-start"
                justifyContent="flex-start"
                onPress={() =>
                  navigation.navigate("UserResult", {
                    user: item
                  })
                }
              >
                <Flex flexDirection="row" justifyContent="flex-start" ml={0}>
                  <Avatar
                    bg="amber.500"
                    source={{ uri: item.profile.picture }}
                    size={50}
                    marginRight={6}
                    marginLeft={0}
                  >
                    {item.profile.first_name.charAt(0)}
                    {item.profile.last_name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Text fontSize="16px" fontWeight="semibold" color="white">
                      {item.profile.first_name} {item.profile.last_name}
                    </Text>
                    <Text fontSize="12px" color="white">
                      {item.profile.email}
                    </Text>
                  </Box>
                </Flex>
              </Button>
            );
          }}
        />
      )}
    </Center>
  );
};
