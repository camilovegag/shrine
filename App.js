import React from "react";
import AppLoading from "expo-app-loading";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useFonts, Nunito_400Regular, Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import Home from "./screens/Home";
import SearchNavigator from "./routes/SearchNavigator";
import User from "./screens/User";
import Settings from "./screens/Settings";
import MyGrowth from "./screens/MyGrowth";
import BottomTabsOptions from "./components/BottomTabsOptions";
import { Provider } from "react-redux";
import { Store } from "./redux/store";

const { Screen, Navigator } = createBottomTabNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    "Nunito-regular": Nunito_400Regular,
    "Nunito-semi-bold": Nunito_600SemiBold,
  });
  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <Provider store={Store}>
      <NativeBaseProvider>
        <Shrine />
      </NativeBaseProvider>
    </Provider>
  );
};

const Shrine = () => (
  <NavigationContainer>
    <StatusBar style="inverted" />
    <Navigator screenOptions={BottomTabsOptions}>
      <Screen name="Home" component={Home} />
      <Screen name="MyGrowth" component={MyGrowth} />
      <Screen name="Search" component={SearchNavigator} />
      <Screen name="Profile" component={User} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  </NavigationContainer>
);

export default App;
