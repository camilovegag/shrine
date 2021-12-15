import React from "react";
import { Text, Box, ScrollView, Icon, Flex, Progress } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import Circular from "./Circular";
import ProgressBar from "./ProgressBar";

const Skills = ({ skills, first_name }) => {
  const sortedSkills = skills.sort((a, b) => b.value > a.value);
  const topSkills = sortedSkills.slice(0, 6);
  const otherSkills = sortedSkills.slice(6);
  return (
    <Box mt={8}>
      {topSkills.length === 0 ? (
        <Text color="#333" fontFamily="Nunito-semi-bold" fontSize="18px" mx={4}>
          This user doesn't have skills yet.
        </Text>
      ) : (
        <>
          <Text color="#333" fontFamily="Nunito-semi-bold" fontSize="18px" mb={4} mx={4}>
            Top Skills
          </Text>
          <Flex direction="row" align="center">
            <Icon as={<MaterialIcons name="chevron-left" />} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {topSkills.map((topSkill, idx) => (
                <Circular key={idx} value={topSkill.value} skill={topSkill.name} />
              ))}
            </ScrollView>
            <Icon as={<MaterialIcons name="chevron-right" />} />
          </Flex>
        </>
      )}
      {otherSkills.length === 0 ? null : (
        <Box mt={3}>
          <Text color="#333" fontFamily="Nunito-semi-bold" fontSize="18px" my={4} mx={4}>
            {first_name} also knows about
          </Text>
          <Flex mx={4}>
            {otherSkills.map((otherSkill, idx) => (
              <ProgressBar key={idx} value={otherSkill.value} skill={otherSkill.name} />
            ))}
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Skills;
