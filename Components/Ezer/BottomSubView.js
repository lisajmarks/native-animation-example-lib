import {
  Text,
  StyleSheet,
  TouchableHighlight,
  Animated,
  Pressable,
  Platform,
} from "react-native";
import React, { useRef } from "react";

const isNative =
  Platform.OS === "android" || Platform.OS === "ios" ? true : false;

const BottomSubView = () => {
  const bottomBounceValue = useRef(new Animated.Value(100)).current;
  const bottomIsHidden = useRef(true);

  const toggleSubview = () => {
    Animated.spring(bottomBounceValue, {
      toValue: bottomIsHidden.current ? 0 : 100,
      speed: 20,
      useNativeDriver: isNative,
    }).start();

    bottomIsHidden.current = !bottomIsHidden.current;
  };

  return (
    <>
      <TouchableHighlight style={styles.button} onPress={toggleSubview}>
        <Text style={styles.buttonText}>Show bottom nofitication</Text>
      </TouchableHighlight>

      <Animated.View
        style={[
          styles.bottomSubView,
          {
            transform: [{ translateY: bottomBounceValue }],
          },
        ]}
      >
        <Pressable
          onPress={toggleSubview}
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "skyblue",
          }}
        >
          <Text>Bottom notification opened!</Text>
        </Pressable>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
  },
  buttonText: {
    fontSize: 17,
    color: "#007AFF",
  },
  bottomSubView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    height: 100,
  },
});

export default BottomSubView;
