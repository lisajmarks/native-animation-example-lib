import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Platform } from "react-native";

const isNative =
  Platform.OS === "android" || Platform.OS === "ios" ? true : false;

const FadeBox = () => {
  const fadeValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeIn();
  }, []);

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: isNative,
    }).start(fadeOut);
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeValue, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: isNative,
    }).start(fadeIn);
  };

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: fadeValue,
          },
        ]}
      >
        <View style={styles.textBox}>
          <Text>Look at me!</Text>
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 50,
    backgroundColor: "#D1C0A8",
  },
  textBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FadeBox;
