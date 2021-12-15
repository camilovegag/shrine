import React from "react";
import { Avatar, Box, Button, FlatList, Flex, Text } from "native-base";

export default function SearchList({ list, navigate }) {
  return (
    <FlatList
      nestedScrollEnabled
      value=""
      keyExtractor={(array) => array.profile.email}
      data={list}
      renderItem={({ item }) => {
        return (
          <Button
            backgroundColor="#333"
            width={300}
            alignItems="flex-start"
            justifyContent="flex-start"
            onPress={() =>
              navigate("UserResult", {
                user: item,
              })
            }
          >
            <Flex flexDirection="row" justifyContent="flex-start" ml={0}>
              <Avatar
                bg="amber.500"
                source={
                  item.profile.picture.length !== 0
                    ? {
                        uri: item.profile.picture,
                      }
                    : { uri: "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" }
                }
                size={50}
                marginRight={6}
                marginLeft={0}
              />
              <Box>
                <Text fontSize="16px" fontWeight="semibold" color="white">
                  {item.profile.first_name.length === 0
                    ? `N/A`
                    : `${item.profile.first_name} ${item.profile.last_name}`}
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
  );
}
