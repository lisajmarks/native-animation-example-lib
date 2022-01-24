import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

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

  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: "green",
        transform: [{ translateX: translation }],
      }}
    />
  );
}

export default Lisa;
