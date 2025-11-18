// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Ai from "./src/Ai";
import Login from "./src/Login";
import Home from "./src/Home"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Ai" component={Ai}/>
        <Stack.Screen name="Home" component={Home}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
