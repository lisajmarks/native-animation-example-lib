import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Custom components (pages)
import Test from "./Components/Test/Test";
import Sample from "./Components/Sample/Sample";
import Home from "./Components/Home/Home";

import Lisa from "./Components/Lisa/Lisa";

import Yiley from "./Components/Yiley/Yiley";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Sample" component={Sample} />

        <Stack.Screen name="Lisa" component={Lisa} />

        <Stack.Screen name="Yiley" component={Yiley} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
