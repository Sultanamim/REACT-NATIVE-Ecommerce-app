import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function MyTabBarLabel(props) {
  return <Text style={[styles.text, props.focused ? styles.active : styles.inactive]}>{props.title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    paddingBottom: 6,
    fontSize: 10,
    textAlign: "center",
    marginBottom: 20,
  },
  active: {
    color: "#4AD295"
  },
  inactive: {
    color: '#8FA3AD',
  }
});
