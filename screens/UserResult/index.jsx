import React from "react";
import Paper from "../../components/Paper";
import UserCard from "../../components/UserCard";
import UserProject from "../../components/UserProject";
import UserSkills from "../../components/UserSkills";
import { Flex, ScrollView, Text } from "native-base";

const uSERResult = ({ route }) => {
  const { profile, skills, projects } = route.params.user;
  const { first_name } = profile;
  const colors = ["#C4D600", "#00AEEF", "#333333"];

  return (
    <Paper>
      <ScrollView>
        <UserCard profile={profile} />
        <Flex bg="#fff" flex={1} borderTopRadius="16">
          <UserSkills skills={skills} first_name={first_name} />
          <Text
            color="#333"
            fontFamily="Nunito-semi-bold"
            fontSize="18px"
            mt={8}
            mx={4}
          >
            Projects
          </Text>
          {projects.map((project, idx) => (
            <UserProject
              key={idx}
              project={project}
              color={colors[idx % colors.length]}
            />
          ))}
        </Flex>
      </ScrollView>
    </Paper>
  );
};

export default uSERResult;
