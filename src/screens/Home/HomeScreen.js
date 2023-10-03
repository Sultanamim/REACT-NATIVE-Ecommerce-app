//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchContainer from "./SearchSection/SearchContainer";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import { moderateScale } from "react-native-size-matters";

// create a component
const HomeScreen = () => {
  return (
    <ScrollView vertical={true} style={styles.container}>
      {/* -----  Search Container ------- */}
      <View style={styles.searchContainer}>
        <SearchContainer />
      </View>
      {/* -------- */}

      {/* -----  Categories Container ------- */}
      <View style={styles.categoryContainer}>
        <CategoriesSection />
      </View>
      {/* -------- */}
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    marginTop: moderateScale(66.83),
    flexDirection: "row",
    paddingHorizontal: moderateScale(10),
  },
  categoryContainer: {
    marginTop: moderateScale(13.9),

  }
});

export default HomeScreen;
