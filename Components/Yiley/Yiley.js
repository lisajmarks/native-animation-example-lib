import * as React from "react";
import {
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Animated,
  Text,
  View,
  StyleSheet,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";

const AnimatedAntDesign = Animated.createAnimatedComponent(AntDesign);
const { width } = Dimensions.get("window");

const DURATION = 1000;
const TEXT_DURATION = DURATION * 0.8;
const quotes = [
  {
    quote:
      "And we know that for those who love God all things work together for good, for those who are called according to His purpose",
    verse: "Romans 8:28",
  },
  {
    quote:
      "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go.",
    verse: "Joshua 1:9",
  },
  {
    quote:
      "Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge Him, and He will make straight your paths.",
    verse: "Proverbs 3:5-6",
  },
  {
    quote:
      "For I, the LORD your God, hold your right hand; it is I who say to you, 'Fear not, I am the one who helps you'.",
    verse: "Isaiah 41:13",
  },

  {
    quote: `"He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away." And He who was seated on the throne said, "Behold, I am making all things new."`,
    verse: "Revelation 21:4",
  },
];
