import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native-web";

const Amele = () => {
  const fadeAnimation = new Animated.Value(0);

  const animHandler = () => {
    Animated.spring(fadeAnimation, {
      toValue: 60,
      duration: 1000,
      friction: 1,
      tension: 50,
			

      useNativeDriver: true,
    }).start(() => {
      fadeAnimation._value = 0;
    });
  };
	
  const trans = {
    transform: [{ translateY: fadeAnimation }],
		
  };
	
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.card, trans]}>
        <View >
          <View style={styles.card}>
            <View style={[styles.circle]}>
              <Text style={styles.circleText}>Animated </Text>
            </View>

            <View style={styles.textContainer}>
             
                <Text style={styles.textStyle}>
                  The Animated library is designed to make animations fluid,
                  powerful, and painless to build and maintain.
                </Text>
             
              <View style={styles.btnRow}>
                <TouchableOpacity onPress={animHandler}>
                  <Text style={styles.textBtn}>Click me</Text>
                </TouchableOpacity> 
							
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
			
    </SafeAreaView>
  );
};

export default Amele;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  card: {
    backgroundColor: "brown",
    width: 400,
    height: 180,
    flexDirection: "row",
    borderRadius: 20,
    marginTop: 50,
  },
  circle: {
    width: 110,
    height: 110,
    backgroundColor: "red",
    borderRadius: "100%",
    margin: 15,
  },
  circleText: {
    margin: "auto",
  },
  textContainer: {
    width: 200,
    height: 100,
    // marginTop:5,
    padding: 15,
  },
  textStyle: {
    fontSize: 17,
  
  },
  btn: {
    borderRadius: "50%",
    marginTop: 10,
    fontSize: 27,
  },

  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    marginTop: 20,
  },
  textBtn: {
    color: "tomato",
    fontSize: 20,
  },
});
