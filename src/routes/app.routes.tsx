import React from "react";
import Home from "../screens/Home";
import Details from "../screens/Details";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detalhes" component={Details} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
