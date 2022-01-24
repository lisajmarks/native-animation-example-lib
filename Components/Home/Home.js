import { View } from "react-native";
import React from "react";
import AnimatedButton from "../../Fragments/AnimatedButton";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AnimatedButton navigation={navigation} place="Test" />
      <AnimatedButton navigation={navigation} place="Sample" />
    </View>
  );
};

export default Home;
