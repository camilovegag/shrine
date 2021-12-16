import React from "react";
import Paper from "../../components/Paper";
import UserCard from "../../components/UserCard";
import UserProject from "../../components/UserProject";
import Skills from "../../components/Skills";
import { Flex, ScrollView, Text } from "native-base";

const UserResult = ({ route }) => {
  const { profile, skills, projects } = route.params.user;
  const { first_name } = profile;
  const colors = ["#C4D600", "#00AEEF", "#333333"];

  return (
    <Paper>
      <ScrollView>
        <UserCard profile={profile} />
        <Flex bg="#fff" flex={1}>
          <Skills skills={skills} first_name={first_name} />
          {projects.length === 0 ? (
            <Text
              color="#333"
              fontFamily="Nunito-semi-bold"
              fontSize="18px"
              mt={10}
              mb={160}
              mx={4}
            >
              This user doesn't have any projects assigned yet.
            </Text>
          ) : (
            <>
              <Text color="#333" fontFamily="Nunito-semi-bold" fontSize="18px" mt={6} mx={4}>
                Projects
              </Text>
              {projects.map((project, idx) => (
                <UserProject key={idx} project={project} color={colors[idx % colors.length]} />
              ))}
            </>
          )}
        </Flex>
      </ScrollView>
    </Paper>
  );
};

export default UserResult;
