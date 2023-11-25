import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import SearchImg from "../../../assets/search.png";
import LocationImg from "../../../assets/home-images/location-orange.png";
import CatogoryIcon from "../../../assets/home-images/categories.png";
import { moderateScale } from "react-native-size-matters";

const SearchSection = (props) => {
  return (
    <>
      <Pressable
        onPress={() => props.navigation.navigate("SearchProductScreen")}
      >
        <View style={[styles.inputContainer, styles.shadowProp]}>
          <Image source={SearchImg} style={styles.searchImg} />
          <Text
            style={styles.SearchInput}
          >Search here</Text>
        </View>
      </Pressable>

      <TouchableOpacity onPress={() => props.navigation.navigate("Categories")}>
        <Image source={CatogoryIcon} style={styles.categoryIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={LocationImg} style={styles.locationImg} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  searchImg: {
    width: moderateScale(13.51),
    height: moderateScale(13.59),
    marginLeft: moderateScale(17.45),
  },
  SearchInput: {
    marginLeft: moderateScale(14.83),
    marginTop: moderateScale(1.14),
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Source_Sans3_Regular",
    letterSpacing: 0,
  },
  categoryIcon: {
    width: moderateScale(23.6),
    height: moderateScale(23.6),
    marginLeft: moderateScale(34.95),
    marginTop: moderateScale(6),
  },
  locationImg: {
    width: moderateScale(20.36),
    height: moderateScale(24.85),
    marginLeft: moderateScale(26.35),
    marginTop: moderateScale(6),
  },
  inputContainer: {
    width: moderateScale(248),
    height: moderateScale(37),
    borderColor: "#8FA3AD91",
    borderWidth: 0.5,
    borderRadius: moderateScale(13),
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center"
  },
  shadowProp: {
    shadowColor: "#000",
    elevation: 12,
  },
});

export default SearchSection;
