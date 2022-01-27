import React, { useRef } from "react";
import { Animated, View, StyleSheet, Button, SafeAreaView } from "react-native";

const Jesse = () => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const original = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
    }).start();
  };

  const wumbo = () => {
    Animated.timing(fadeAnim, {
      toValue: -1,
      duration: 3000,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        style={[
          styles.image,
          {
            transform: [{ scaleY: fadeAnim }],
          },
        ]}
        source={require("./belt.jpg")}
      />
      <View style={styles.buttonRow}>
        <Button title="Wumbo" onPress={wumbo} />
        <Button title="Original" onPress={original} />
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
  image: {
    width: 200,
    height: 100,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
});

export default Jesse;
