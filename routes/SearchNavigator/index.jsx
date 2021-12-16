import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../../screens/Search";
import UserResult from "../../screens/UserResult";
const { Screen, Navigator } = createNativeStackNavigator();

const SearchNavigator = () => (
  <Navigator>
    <Screen
      name="SearchNavigator"
      component={Search}
      options={{ headerShown: false }}
    />
    <Screen
      name="UserResult"
      component={UserResult}
      options={{ headerShown: false }}
    />
  </Navigator>
);

export default SearchNavigator;
