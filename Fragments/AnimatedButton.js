import React from "react";
import { Animated, Pressable, View, Text } from "react-native";

function HomeButton({ navigation, place }) {
  const animatedButtonScale = new Animated.Value(0);

  const onPress = (page) => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      animatedButtonScale._value = 0;
      navigation.navigate(page);
    });
  };

  const animatedObject = () => {
    return {
      transform: [
        {
          scaleX: animatedButtonScale.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 2, 1],
          }),
        },
      ],
    };
  };

  return (
    <Pressable onPress={() => onPress(place)}>
      <Animated.View style={[staticStyles, animatedObject()]}>
        <Text style={textStyles}>{place}</Text>
      </Animated.View>
    </Pressable>
  );
}

const staticStyles = {
  height: 30,
  width: 300,
  outerHeight: 30,
  backgroundColor: "#9c27b0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 5,
  marginVertical: 5,
};

const textStyles = {
  color: "white",
};

export default HomeButton;
