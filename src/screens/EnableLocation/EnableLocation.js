//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { Image } from "expo-image";
import EnableLocationImg from "../../assets/enable-location.png";
import { moderateScale, scale } from "react-native-size-matters";

// create a component
const EnableLocation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={EnableLocationImg} style={styles.img} />
      <Text style={styles.headText}>Enable Location</Text>
      <Text style={styles.normalText}>
        This helps to search for nearby items, gives you a better local
        experience, and more.
      </Text>
      <Text style={styles.normalText2}>
        Tap “Allow” on the next screen to enable location services. You can
        always disable this at any time
      </Text>
      <Pressable onPressIn={() => navigation.navigate("EntryCity")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </View>
      </Pressable>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: moderateScale(25),
    paddingRight: moderateScale(30),
  },
  img: {
    width: moderateScale(127.79),
    height: moderateScale(149.92),
    marginTop: moderateScale(135.08),
    alignSelf: "center",
  },
  headText: {
    fontSize: 31,
    fontFamily: "Nunito_Bold",
    marginTop: moderateScale(38),
    color: "#464646",
  },
  normalText: {
    fontSize: 19,
    fontFamily: "Lato_Regular",
    color: "#242455",
    marginTop: moderateScale(14),
    lineHeight: moderateScale(30),
  },
  normalText2: {
    fontSize: 19,
    fontFamily: "Lato_Regular",
    color: "#242455",
    marginTop: moderateScale(27),
    lineHeight: moderateScale(30),
  },
  button: {
    marginTop: moderateScale(131),
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    backgroundColor: "#5459E5",
    color: "#fff",
    paddingVertical: moderateScale(12),
    width: "90%",
    borderRadius: moderateScale(10),
    fontSize: 18,
    fontFamily: "Nunito_Bold",
    textAlign: "center",
  }
});

//make this component available to the app
export default EnableLocation;
