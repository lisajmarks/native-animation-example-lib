import { View, Text, StyleSheet, Animated, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import { useRef } from 'react';

const Anthony = () => {

const _rotate = useRef(new Animated.Value(0)).current;
const rotate = _rotate.interpolate({ inputRange: [0,1], outputRange:['0deg', '90deg']})
const animate = () => {
    _rotate.setValue(0)
    Animated.spring(_rotate, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 0
    }).start();
};

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.square, {transform: [{rotate}] }]}/>
      <TouchableOpacity onPress={animate} style={styles.btn}>
        <Text style={styles.btnText}>Rotate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    justifyContent: 'space-evenly',
  },
  square: {
    backgroundColor: '#ffa500',
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  btn: {
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor: 'red',
    height: 30,
    width: 300,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
  }
});

export default Anthony;

