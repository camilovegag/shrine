import React from "react";
import { Avatar, Box, Flex, Icon, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const UserCard = ({ profile }) => {
  const { first_name, last_name, city, country, job_title, picture, email } =
    profile;

  return (
    <Box bg="#505050" h="240px" px="16px" py="32px">
      <Flex align="center" direction="row">
        <Avatar h="88px" mr="24px" source={{ uri: picture }} w="88px" />
        <Flex flex={1} h="80px">
          <Text
            color="#fff"
            fontSize="22px"
            fontWeight="semibold"
            lineHeight="26px"
            mb={4}
          >
            {first_name} {last_name}
          </Text>
          <Text color="#fff" fontSize="16px" lineHeight="20px">
            {job_title}
          </Text>
        </Flex>
      </Flex>
      <Flex h="64px" justify="space-between" mt="24px">
        <Flex align="center" direction="row">
          <Icon
            as={<MaterialIcons name="email" />}
            color="#fff"
            mr="12px"
            size="24px"
          />
          <Text color="#fff" fontSize="14px" lineHeight="18px">
            {email}
          </Text>
        </Flex>
        <Flex align="center" direction="row">
          <Icon
            as={<MaterialIcons name="place" />}
            color="#fff"
            mr="12px"
            size="24px"
          />
          <Text color="#fff" fontSize="14px" lineHeight="18px">
            {city}, {country}.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default UserCard;
