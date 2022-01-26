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

const TopSubView = () => {
  const topBounceValue = useRef(new Animated.Value(-100)).current;
  const topIsHidden = useRef(true);

  const toggleSubview = () => {
    Animated.spring(topBounceValue, {
      toValue: topIsHidden.current ? 0 : -100,
      speed: 20,
      useNativeDriver: isNative,
    }).start();

    topIsHidden.current = !topIsHidden.current;
  };

  return (
    <>
      <TouchableHighlight style={styles.button} onPress={toggleSubview}>
        <Text style={styles.buttonText}>Show top nofitication</Text>
      </TouchableHighlight>
      <Animated.View
        style={[
          styles.topSubView,
          { transform: [{ translateY: topBounceValue }] },
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
          <Text>Top notification opened!</Text>
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
  topSubView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    height: 100,
  },
});

export default TopSubView;
