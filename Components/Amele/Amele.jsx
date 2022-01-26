import { StyleSheet, Text, View, TouchableOpacity, Pressable , ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import { Animated, Easing } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


  const Amele = () => {
    const fadeAnimation= new Animated.Value(0);
    
    const animHandler = () => {
      Animated.spring(fadeAnimation, {
        toValue: 150,
        duration: 1000,
        friction:1,
        tension:8,
    
        useNativeDriver: true,
      }).start(() => {
        fadeAnimation._value = 0;
        
      });
    };

    const trans={
      transform:[
        {translateY: fadeAnimation}
      ]
    }
    // const spinVal= new Animated.Value(0);
   
    //   Animated.timing(spinVal,{
    //     toValue:1,
    //     duration:4000,
    //     easing:Easing.linear
    //   }.start(()=>spinVal()))

    // const trans={
    //   transform:[
    //     {translateY: spinVal}
    //   ]
    // }

    return (
      <SafeAreaView style={styles.container}>
           <Animated.View style={[styles.card, trans]}>
           <ActivityIndicator />
          
           <View style={styles.cardWrapper}>
        <View style={styles.card}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>Animated </Text> 
          </View>
         
        <View style={styles.textContainer}>
          <Text style={styles.text}>The Animated library is designed to make animations fluid, powerful, and painless to build and maintain.</Text>
          <View style={styles.btnRow}>
          <TouchableOpacity onPress={animHandler} >
            <Text style={styles.textbtn}>Click me</Text>
          </TouchableOpacity> 
          <ActivityIndicator />
          

          <TouchableOpacity  >
            <Text style={styles.textbtn}>Fadeout </Text>
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
  container:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center",
 
  },
  card:{
    backgroundColor:"brown",
    width:400,
    height:200,
    flexDirection:"row",
    borderRadius:20,
    marginTop:50
   
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
  btnRow: {
    flexDirection:'row',
    justifyContent:'space-between',
  width:200,
  marginTop:20
    
  },
  textbtn:{
    color:"tomato",
    fontSize:20
  }

});





