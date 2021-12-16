import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Icon } from "native-base";

const BottomTabsOptions = ({ route }) => ({
  headerStyle: {
    backgroundColor: "#333"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontSize: 18,
    fontWeight: "600"
  },
  tabBarIcon: ({ color, size }) => {
    let iconName;

    route.name === "Home"
      ? (iconName = "home")
      : route.name === "MyGrowth"
      ? (iconName = "school")
      : route.name === "Search"
      ? (iconName = "search")
      : route.name === "Profile"
      ? (iconName = "person")
      : route.name === "Settings"
      ? (iconName = "menu")
      : null;

    return (
      <Icon color={color} size={size} as={<MaterialIcons name={iconName} />} />
    );
  },
  tabBarActiveTintColor: "#C4D600",
  tabBarInactiveTintColor: "#fff",
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: "#333"
  }
});

export default BottomTabsOptions;
