import React, { useRef } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";

const isNative =
  Platform.OS === "android" || Platform.OS === "ios" ? true : false;

const BounceButton = () => {
  const animatedButtonScale = useRef(new Animated.Value(1)).current;

  // When button is pressed in, animate the scale to 1.5
  const onPressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 0.75,
      speed: 20,
      useNativeDriver: isNative,
    }).start();
  };

  // When button is pressed out, animate the scale back to 1
  const onPressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      speed: 20,
      useNativeDriver: isNative,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {}}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View
        style={[
          styles.iconContainer,
          { transform: [{ scale: animatedButtonScale }] },
        ]}
      >
        <Image
          source={require("./like.png")}
          style={{ width: 50, height: 50 }}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BounceButton;
