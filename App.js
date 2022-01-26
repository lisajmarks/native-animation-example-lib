import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Custom components (pages)
import Test from "./Components/Test/Test";
import Sample from "./Components/Sample/Sample";
import Home from "./Components/Home/Home";
import Anthony from "./Components/Anthony/Anthony";
import Linda from "./Components/Linda/Linda";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Sample" component={Sample} />
        <Stack.Screen name="Anthony" component={Anthony} />
        <Stack.Screen name="Linda" component={Linda} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
