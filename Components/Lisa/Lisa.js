import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet } from "react-native";

function Lisa() {
  const translation = useRef(new Animated.Value(0)).current;
  //wrap in a useRef call so it only gets created once

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 500,
      delay: 1000,
      duration: 1000,
    }).start();
  }, []);
  //Calling start on this animation…starts the animation.
  // force a change

  return (
    <Animated.Image
      style={{
        width: 100,
        height: 100,
        transform: [{ translateX: translation }],
      }}
      source={require("./dog.png")}
    />
  );
}

export default Lisa;
