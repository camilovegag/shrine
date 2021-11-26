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

export default function SearchList({list,navigate})  { 
return(
    <FlatList
    nestedScrollEnabled
    value=""
    keyExtractor={(array) => array.profile.email}
    data={list}
    renderItem={({ item }) => {
    return (
        <Button
        backgroundColor= "#333"
        width= {300}
        alignItems="flex-start"
        justifyContent="flex-start"
        onPress={() =>
            navigate("UserResult",{
            user : item,
            })
        }
        >
        <Flex flexDirection="row"  justifyContent="flex-start" ml={0} >
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
)
}
