import React, { useRef } from "react";
import {
  Animated,
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
} from "react-native";

const Will = () => {
  const loopAnim = useRef(new Animated.Value(0)).current;

  const loading = () => {
    Animated.loop(
      Animated.timing(loopAnim, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      })
    ).start();
  };

  const rotateObject = loopAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animatedObject = {
    transform: [{ rotate: rotateObject }],
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        style={[styles.box, animatedObject]}
        source={require("../../images/loading")}
      ></Animated.Image>
      <View>
        <Pressable style={styles.loadingButton} onPress={loading}>
          <Text style={styles.loadingText}>Loading...</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 300,
    height: 300,
  },
  loadingButton: {
    backgroundColor: "tomato",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  loadingText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fefefe",
  },
});

export default Will;
