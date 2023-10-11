
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import CarImg from "../../../assets/home-images/car.png";
import FurnitureImg from "../../../assets/home-images/furniture.png";
import HouseImg from "../../../assets/home-images/house.png";
import ElectronicsImg from "../../../assets/home-images/electronics.png";
import CycleImg from "../../../assets/home-images/cycle.png";
import { moderateScale } from "react-native-size-matters";

// create a component
const CategoriesSection = () => {
  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.items}>
        <Image source={CarImg} style={styles.carImg} />
        <Text style={styles.text1}>Vehicles & Parts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.items}>
        <Image source={FurnitureImg} style={styles.furnitureImg} />
        <Text style={styles.text2}>Home & Garden</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.items}>
        <Image source={HouseImg} style={styles.houseImg} />
        <Text style={styles.text3}>Real Estate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.items}>
        <Image source={ElectronicsImg} style={styles.electronicsImg} />
        <Text style={styles.text4}>Home Theatres</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.items}>
        <Image source={CycleImg} style={styles.cycleImg} />
        <Text style={styles.text5}>Bikes & Sporting Goods</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  items: {
    flexDirection: "column",
    marginTop: moderateScale(14),
    alignItems: "center",
  },
  text1: {
    width: moderateScale(48),
    fontSize: 14,
    fontFamily: "Source_Sans3_Regular",
    marginHorizontal: moderateScale(20),
    textAlign: "center",
  },
  text2: {
    width: moderateScale(48),
    fontSize: 14,
    fontFamily: "Source_Sans3_Regular",
    marginHorizontal: moderateScale(20),
    textAlign: "center",
  },
  text3: {
    width: moderateScale(66),
    fontSize: 14,
    fontFamily: "Source_Sans3_Regular",
    marginHorizontal: moderateScale(20),
    textAlign: "center",
  },
  text4: {
    width: moderateScale(52),
    fontSize: 14,
    fontFamily: "Source_Sans3_Regular",
    marginHorizontal: moderateScale(20),
    textAlign: "center",
  },
  text5: {
    width: moderateScale(92),
    fontSize: 14,
    fontFamily: "Source_Sans3_Regular",
    marginHorizontal: moderateScale(20),
    textAlign: "center",
  },
  carImg: {
    width: moderateScale(56.26),
    height: moderateScale(27),
    marginBottom: moderateScale(8.6),
  },
  houseImg: {
    width: moderateScale(34.59),
    height: moderateScale(32.35),
    marginBottom: moderateScale(8.6),
  },
  electronicsImg: {
    width: moderateScale(29.59),
    height: moderateScale(31.39),
    marginBottom: moderateScale(8.6),
  },
  cycleImg: {
    width: moderateScale(45.21),
    height: moderateScale(26.2),
    marginBottom: moderateScale(8.6),
  },
 furnitureImg: {
    width: moderateScale(40.65),
    height: moderateScale(28.52),
    marginBottom: moderateScale(8.6),
  },
});


export default CategoriesSection;
