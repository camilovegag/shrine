import React from "react";
import { Avatar, Box, Flex, Icon, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const UserCard = ({ profile }) => {
  let { first_name, last_name, city, country, job_title, picture, email } = profile;

  return (
    <Box bg="#505050" h="240px" px="16px" py="32px">
      <Flex align="center" direction="row">
        <Avatar
          bg="amber.500"
          h="88px"
          mr="24px"
          source={
            picture.length !== 0
              ? {
                  uri: picture,
                }
              : { uri: "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" }
          }
          w="88px"
          display="flex"
          flexDirection="row"
        >
          {first_name.charAt(0)}
          {last_name.charAt(0)}
        </Avatar>
        <Flex flex={1} h="80px">
          <Text color="#fff" fontSize="22px" fontWeight="semibold" lineHeight="26px" mb={4}>
            {first_name.length === 0 ? `N/A` : `${first_name} ${last_name}`}
          </Text>
          <Text color="#fff" fontSize="16px" lineHeight="20px">
            {job_title.length === 0 ? `N/A` : job_title}
          </Text>
        </Flex>
      </Flex>
      <Flex h="64px" justify="space-between" mt="24px">
        <Flex align="center" direction="row">
          <Icon as={<MaterialIcons name="email" />} color="#fff" mr="12px" size="24px" />
          <Text color="#fff" fontSize="14px" lineHeight="18px">
            {email.length === 0 ? `N/A` : email}
          </Text>
        </Flex>
        <Flex align="center" direction="row">
          <Icon as={<MaterialIcons name="place" />} color="#fff" mr="12px" size="24px" />
          <Text color="#fff" fontSize="14px" lineHeight="18px">
            {city.length === 0 ? `N/A` : `${city} ${country}`}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default UserCard;
