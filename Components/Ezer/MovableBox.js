import React, { useRef } from "react";
import {
  View,
  Text,
  Pressable,
  Animated,
  PanResponder,
  StyleSheet,
  Platform,
} from "react-native";

const MovableBox = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;

  const resetPosition = () => {
    pan.setValue({ x: 0, y: 0 });
  };

  return (
    <>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
      <Pressable onPress={resetPosition} style={styles.button}>
        <Text>Reset Box Position</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "gold",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    borderRadius: 10,
  },
});

export default MovableBox;
