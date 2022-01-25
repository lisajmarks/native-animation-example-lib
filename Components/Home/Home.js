import { View } from "react-native";
import React from "react";
import AnimatedButton from "../../Fragments/AnimatedButton";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AnimatedButton navigation={navigation} place="Test" />
      <AnimatedButton navigation={navigation} place="Sample" />
      <AnimatedButton navigation={navigation} place="Amele" />
      <AnimatedButton navigation={navigation} place="Linda" />
      <AnimatedButton navigation={navigation} place="Sergut" />
      <AnimatedButton navigation={navigation} place="Lisa" />
      <AnimatedButton navigation={navigation} place="Yiley" />
      <AnimatedButton navigation={navigation} place="Beakal" />
    </View>
  );
};

export default Home;
