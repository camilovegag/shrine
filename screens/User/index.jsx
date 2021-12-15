import React from "react";
import Paper from "../../components/Paper";
import { Flex, ScrollView, Text } from "native-base";
import UserCard from "../../components/UserCard";
import UserProject from "../../components/UserProject";
import Skills from "../../components/Skills";

const profile = {
  first_name: "Camilo",
  last_name: "Vega",
  city: "Chía",
  country: "Colombia",
  job_title: "Web UI Developer",
  picture: "https://i.pravatar.cc/300",
  email: "camilo.vega@gmail.com",
};

const skills = [
  {
    name: "JS",
    value: 85,
  },
  {
    name: "React",
    value: 71,
  },
  {
    name: "SQL",
    value: 22,
  },
  {
    name: "Python",
    value: 32,
  },
  {
    name: "CSS",
    value: 92,
  },
  {
    name: "HTML",
    value: 90,
  },
  {
    name: "Java",
    value: 2,
  },
  {
    name: "C++",
    value: 15,
  },
  {
    name: "Firebase",
    value: 45,
  },
];

const projects = [
  {
    name: "ex amet",
    description: "Deserunt ad in qui nostrud.",
    manager: "Farrell Tillman",
    techLead: "Terry Alexander",
    endDate: 2171092496458,
  },
  {
    name: "et et",
    description: "Et esse minim officia et culpa qui enim eu ea ex proident sunt elit.",
    manager: "Cathryn Dickerson",
    techLead: "Atkinson Whitley",
    endDate: 2313211121267,
  },
];

const colors = ["#C4D600", "#00AEEF", "#333333"];

const User = () => {
  return (
    <Paper>
      <ScrollView>
        <UserCard profile={profile} />
        <Flex bg="#fff" flex={1}>
          <Skills skills={skills} first_name={profile.first_name} />
          {projects.length === 0 ? (
            <Text>This user doesn't have any project assigned.</Text>
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

export default User;
