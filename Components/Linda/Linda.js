import {
  View,
  Text,
  Animated,
  PanResponder,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useRef } from "react";
import { Swipeable } from "react-native-gesture-handler";

const DATA = [
  {
    id: "123",
    fName: "Asah",
  },
  {
    id: "456",
    fName: "Ashten",
  },
  {
    id: "789",
    fName: "Ayvah",
  },
];

const Item = ({ fName }) => (
  <Swipeable renderLeftActions={LeftAction}>
    <View style={styles.item}>
      <Text style={styles.fName}>{fName}</Text>
    </View>
  </Swipeable>
);
const LeftAction = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [-50, 0],
    outputRange: [0.7, 0],
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "lightgrey",
        justifyContent: "center",
      }}
    >
      <Animated.Text
        style={{
          color: "black",
          fontWeight: "600",
          transform: [{ scale }],
          textAlign: "right",
        }}
      >
        HELLO
      </Animated.Text>
    </View>
  );
};

const Linda = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
        Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
      },
    })
  ).current;

  const renderItem = ({ item }) => <Item fName={item.fName} />;

  return (
    <View style={styles.container}>
      <View style={styles.an1}>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Animated.View
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
          }}
          {...panResponder.panHandlers}
        >
          <View style={styles.box} />
        </Animated.View>
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  an1: {
    margin: 50,
  },
  titleText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  box: {
    height: 200,
    width: 200,
    backgroundColor: "pink",
    borderRadius: 10,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 150,
  },
  title: {
    fontSize: 32,
  },
});

export default Linda;
