//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProductImg3 from "../../../assets/products/laptop-1.png";
import Data from "../../Data/data";

import { Image } from "expo-image";

// create a component
const ProductSection = () => {
  const productsToDisplay = [];

  Data.categories.forEach(category => {
    if (category.subCategories) {
      category.subCategories.forEach(subCategory => {
        if (subCategory.inCategories) {
          subCategory.inCategories.forEach(product => {
            if (product.image && product.image.url) {
              // Check if the product has an image
              productsToDisplay.push(product);
            }
          });
        }
      });
    }
  });


  return (
    <>
      <View style={styles.scrollElements}>
      {productsToDisplay.map(product => (
        <View key={product.id} style={styles.productContainer}>
          <Image source={{ uri: product.image.url }} style={styles.productImage} />
          <Text style={styles.productTitle}>{product.title}</Text>
          {product.price && (
            <Text style={styles.productPrice}>{product.price}</Text>
          )}
        </View>
      ))}
        {/* <Image
          style={[styles.icon1, styles.iconPosition2]}
          contentFit="cover"
          source={ProductImg3}
        />      
        <Text style={[styles.text3, styles.textTypo1]}>1250 $</Text>
        <Text style={[styles.litDoubleEn1, styles.litTypo]}>
          Lit double en tres …
        </Text> */}
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  scrollElements: {
    marginTop: 15.68,
  },
  productContainer: {
    width: 150, // Set your desired width
    margin: 10,
  },
  productImage: {
    width: 150, // Set your desired image width
    height: 150, // Set your desired image height
  },
  productTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    marginTop: 5,
    color: '#007aff', // Set your desired color
  },
  icon1: {
    height: 136,
    width: 141,
    borderRadius: 6,
    position: "absolute",
    left: 0,
  },
 
  iconPosition2: {
    marginTop: -90.51,
    top: "50%",
  },

  text3: {
    marginTop: 70.51,
    left: 4,
    top: "50%",
  },
  textTypo1: {
    color: "#505b62",
    fontSize: 15,
    fontFamily: "Nunito_Bold",
    fontWeight: "700",
    lineHeight: 15,
    textAlign: "left",
    position: "absolute",
  },
 
  litTypo: {
    lineHeight: 19,
    fontSize: 15,
    textAlign: "left",
  },
  litDoubleEn1: {
    marginTop: 48.49,
    left: 4,
    top: "50%",
    color: "#464646",
    fontFamily: "Source_Sans3_Regular",
    position: "absolute",
  },
});

export default ProductSection;
