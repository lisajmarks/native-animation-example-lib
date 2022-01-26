import { View, StyleSheet } from "react-native";
import React from "react";
import BottomSubView from "./BottomSubView";
import TopSubView from "./TopSubView";
import BounceButton from "./BounceButton";
import Spinner from "./Spinner";

export default function App() {
  return (
    <View style={styles.container}>
      <Spinner />
      <TopSubView />
      <BottomSubView />
      <BounceButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
