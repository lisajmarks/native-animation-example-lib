import React, { useEffect, useRef } from "react";
import { Animated, Image, View, StyleSheet } from "react-native";

// Based off of Lisa Marks original code

const Test = () => {
  const xAxis = useRef(new Animated.Value(0)).current;
  const yRotation = useRef(new Animated.Value(0)).current;
  const yAxis = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(xAxis, {
          toValue: 500,
          delay: 1000,
          duration: 1000,
        }),

        Animated.timing(yRotation, {
          toValue: 1,
          duration: 50,
        }),

        Animated.timing(xAxis, {
          toValue: 0,
          duration: 500,
        }),

        Animated.timing(yRotation, {
          toValue: 0,
          duration: 50,
        }),

        Animated.spring(yAxis, {
          toValue: 1,
          duration: 50,
        }),

        Animated.timing(yAxis, {
          toValue: 0,
          duration: 50,
        }),
      ])
    ).start();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 100,
            height: 100,
            zIndex: 10,
            transform: [
              { translateX: xAxis },
              { translateY: 25 },
              {
                rotateY: yRotation.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ["0deg", "-90deg", "-180deg"],
                }),
              },
              {
                translateY: yAxis.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -50],
                }),
              },
            ],
          }}
          source={require("./dog.png")}
        />
      </View>
      <View style={styles.container2}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "skyblue",
  },
  container2: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "lightgreen",
    zIndex: 0,
  },
});

export default Test;
