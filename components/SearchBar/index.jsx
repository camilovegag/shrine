import React,{useEffect,useRef} from "react";
import {
  Center,
  Icon,
  Input,
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

  const inputValue = useRef(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    filteredList['text']=[];

    if(isFocused){ 
      inputValue.current.clear(); 
     }  
    }, [isFocused]) 

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
