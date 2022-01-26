import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing,
  Platform,
} from "react-native";

const isNative =
  Platform.OS === "android" || Platform.OS === "ios" ? true : false;

const Spinner = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    spinImage();
  }, []);

  const spinImage = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: isNative,
    }).start(() => spinImage());
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        resizeMode="contain"
        style={{
          width: 150,
          height: 150,
          transform: [{ rotate: spin }],
        }}
        source={{
          uri: "https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Spinner;
