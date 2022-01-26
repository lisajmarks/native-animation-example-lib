import { View } from "react-native";
import React from "react";
import AnimatedButton from "../../Fragments/AnimatedButton";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AnimatedButton navigation={navigation} place="Test" />
      <AnimatedButton navigation={navigation} place="Sample" />
<<<<<<< HEAD
      <AnimatedButton navigation={navigation} place="Anthony" />
      <AnimatedButton navigation={navigation} place="Linda" />
      <AnimatedButton navigation={navigation} place="Sergut" />
      <AnimatedButton navigation={navigation} place="Lisa" />
      <AnimatedButton navigation={navigation} place="Yiley" />
      <AnimatedButton navigation={navigation} place="Ezer" />
      <AnimatedButton navigation={navigation} place="Angel" />
=======
      <AnimatedButton navigation={navigation} place="Will" />
>>>>>>> e94c084 (Created Spinning Animation)
    </View>
  );
};

export default Home;
