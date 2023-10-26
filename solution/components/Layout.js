import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native"; // Import NavigationContainer
import React from "react";
import Home from "./Home"; // Import your Home component
import About from "./About"; // Import your About component

const { Navigator, Screen } = createBottomTabNavigator();

export default function Layout() {
  return (
    <NavigationContainer> {/* Wrap your Navigator in a NavigationContainer */}
      <Navigator>
        <Screen name="home" component={Home} />
        <Screen name="aboutus" component={About} />
      </Navigator>
    </NavigationContainer>
  );
}
