import React from "react";
import Home from "../screens/Home";
import Details from "../screens/Details";
import Profile from "../screens/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detalhes" component={Details} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
