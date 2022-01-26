import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import React,{useEffect, useRef} from 'react';
import { Animated } from "react-native";





const Amele = () => {
  const position = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(position, {
      toValue: 1,
      duration: 5000
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(position, {
      toValue: 0,
      duration: 3000
    }).start();
  };

  // useEffect(() => {
  //   Animated.timing(position, {
  //     toValue: 25,
  //     delay: 500,
  //     duration: 1000,
  //     useNativeDriver: true,
  //   }).start();
  // }, []);
  // Animated.timing(position, {
  //   toValue: 0,
  //   delay: 100,
  //   duration: 100,
  //   useNativeDriver: true,
  //   bounciness: 640,
  // }).start();

  return (
    <Animated.View style={styles.container}>
      <View style={styles.cardWrapper}>
        <View style={styles.card}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>Hello Animated World </Text>
          </View>
        <View style={styles.textContainer}>
          <Text style={styles.fadingText}>The Animated library is designed to make animations fluid, powerful, and painless to build and maintain.</Text>
          
          <TouchableOpacity onPress={fadeOut} >
            <Text style={styles.buttonRow}>Fade Out</Text>
          </TouchableOpacity>  
        </View>
        
        </View>
       
      </View>
      
    </Animated.View>
  );
};

export default Amele;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
 
  },
  card:{
    backgroundColor:"brown",
    width:400,
    height:200,
    flexDirection:"row",
    
   
  },
  circle:{
    width:110,
    height:110,
    backgroundColor:'red',
    borderRadius:"100%",
    margin:25,
    
  }, 
  circleText:{
    margin:"auto",
    color:"white"
    

  },
  textContainer:{
    width:200,
    height:100,
    // marginTop:5, 
    padding:18,
   
  },
  text:{
    fontSize:17,
    color:"white"

  },
  btn:{
    borderRadius:"50%",
    marginTop:10,
    fontSize:27
    
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 18
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});
