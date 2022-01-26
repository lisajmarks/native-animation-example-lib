import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, SafeAreaView } from "react-native";

const Will = () => {
  const loopAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(loopAnim, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotateObject = loopAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animatedObject = {
    transform: [{ rotate: rotateObject }],
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        style={[styles.box, animatedObject]}
        source={require("../../images/loading.png")}
      ></Animated.Image>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 300,
    height: 300,
  },
});

export default Will;
