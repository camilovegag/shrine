import React from "react";
import { Box, Flex, Text } from "native-base";
import PropTypes from "prop-types";

const UserProject = ({ project, color }) => {
  const { name, description, manager, techLead, endDate } = project;

  let objectEndDate = new Date(endDate);
  let completeDate =
    objectEndDate.getDay().toString() +
    "/" +
    objectEndDate.getMonth().toString() +
    "/" +
    objectEndDate.getFullYear().toString();

  return (
    <Box shadow={3} h="194px" mx={4} my={4}>
      <Flex px={4} pt={6} pb={6} bg={color} justifyContent="center" h="76px">
        <Text bold color="#FFFFFF" fontSize="18px">
          {name.length === 0 ? `N/A` : name}
        </Text>
        <Text color="#FFFFFF" fontSize="16px">
          {description.length === 0 ? `N/A` : description}
        </Text>
      </Flex>
      <Box px={4} bg="#FFFFFF" h="118px">
        <Flex justifyContent="space-around">
          <Flex direction="row" my="9px">
            <Text bold>Manager: </Text>
            <Text> {manager.length === 0 ? `N/A` : manager}</Text>
          </Flex>
          <Flex direction="row" my="9px">
            <Text bold>Tech Leader: </Text>
            <Text> {techLead.length === 0 ? `N/A` : techLead}</Text>
          </Flex>
          <Flex direction="row" my="9px">
            <Text bold>End Date: </Text>
            <Text> {endDate == 0 ? `N/A` : completeDate}</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

UserProject.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  manager: PropTypes.string,
  techLead: PropTypes.string,
  endDate: PropTypes.number,
  color: PropTypes.string,
};

export default UserProject;
