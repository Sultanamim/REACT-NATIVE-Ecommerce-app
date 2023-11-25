//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchContainer from "./SearchSection/SearchContainer";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import ProductSection from "./ProductSection/ProductSection";
import { moderateScale } from "react-native-size-matters";

// create a component
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* -----  Search Container ------- */}
      <View style={styles.searchContainer}>
        <SearchContainer navigation={navigation} />
      </View>
      {/* -------- */}

      <ScrollView vertical={true} style={styles.scrollContainer}>
        {/* -----  Categories Container ------- */}
        <View style={styles.categoryContainer}>
          <CategoriesSection />
        </View>
        {/* -------- */}
        {/* -----  Products Container ------- */}
        <View style={styles.productsContainer}>
          <ProductSection />
        </View>
        {/* -------- */}
      </ScrollView>
    </View>
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
  },
  
});

export default HomeScreen;
