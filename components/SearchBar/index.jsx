import React,{useEffect} from "react";
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
import { useIsFocused } from "@react-navigation/native";
import SearchList from "../SearchList";

export default function SearchBar(navigation) {
  return <AppWrapper {...navigation} />;
}

const AppWrapper = (navigation) => {
  const filteredList = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const inputValue = React.useRef(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    filteredList['text']=[];
    inputValue.current.clear();

    if(isFocused){ 
      getInitialData();
  }  }, [isFocused]) 

  const getInitialData = async () => {} 


  return (
    <Center py={8} px={4}>
      <Input
         ref={inputValue}
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
        <SearchList list = {filteredList["text"]} {...navigation} />                                   
      )}
    </Center>
  );
};
