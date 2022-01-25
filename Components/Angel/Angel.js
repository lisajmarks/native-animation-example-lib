import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Animated,
  Image,
} from "react-native";
import AnimatedButton from "../../Fragments/AnimatedButton";
function Angel() {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}
      >
        <Image
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          style={{ width: 400, height: 400 }}
        />
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Hello React Team" onPress={fadeIn} />
        <Button title="Goodbye React Team" onPress={fadeOut} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
});

export default Angel;
