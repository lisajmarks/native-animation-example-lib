import React, { useRef, useEffect } from "react";
import { Animated, Text, View } from "react-native";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 15000,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FadeInView
        style={{ width: 250, height: 100, backgroundColor: "skyblue" }}
      >
        <Text style={{ fontSize: 50, textAlign: "center", margin: 20 }}>
          Sergutye
        </Text>
      </FadeInView>
    </View>
  );
};
