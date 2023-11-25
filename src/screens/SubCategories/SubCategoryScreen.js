import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import BackArrow from "../../assets/Sub-categorie-icons/back-arrow.svg";
import NextArrow from "../../assets/Sub-categorie-icons/next-arrow.svg";
import BlueLine from "../../assets/Sub-categorie-icons/blue-line2.svg";
import BottomLine from "../../assets/Sub-categorie-icons/bottom-line.svg";
import DownArrow from "../../assets/Sub-categorie-icons/down-arrow1.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale } from "react-native-size-matters";

const SubCategoryScreen = ({ navigation, route }) => {
  const { subCategories, category } = route.params;
  const [expandedSubCategory, setExpandedSubCategory] = useState(null);
  //console.log(category);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.categoryName}>{category.name}</Text>
        <TouchableOpacity
          style={styles.doneBtn}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <Image
            style={styles.backArrowImg}
            contentFit="cover"
            source={BackArrow}
          />
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image
            style={styles.categoryImg}
            contentFit="cover"
            source={category.image.url}
            width={category.image.width}
            height={category.image.height}
          />
          <TouchableOpacity
            style={styles.viewAllBtn}
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <Text style={styles.viewAllText}>{`View all `}</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={[styles.nextArrowMargin, styles.nextArrowBtn]}
          contentFit="cover"
          source={NextArrow}
        />
        <Image style={styles.blueLine} contentFit="cover" source={BlueLine} />

        <ScrollView style={styles.subCategoryScroll}>
          {subCategories.map((item, index) => (
            <View key={index} style={styles.mainContainer}>
              <TouchableOpacity
                onPress={() => {
                  if (item.inCategories && item.inCategories.length > 0) {
                    setExpandedSubCategory(
                      expandedSubCategory === index ? null : index
                    );
                  }
                }}
              >
                <View style={[styles.subCategoryRow]}>
                  <Text
                    style={[
                      styles.subCategorieMargin,
                      styles.subCategorieText,
                      expandedSubCategory === index &&
                        styles.expandedSubCategoryText,
                    ]}
                  >
                    {item.title}
                  </Text>
                  {item.inCategories && item.inCategories.length > 0 && (
                    <Image
                      style={[
                        styles.subCategorieMargin,
                        styles.nextArrowBtn2,
                        {
                          marginRight: expandedSubCategory === index ? 20 : 20,
                          width: expandedSubCategory === index ? 14 : 7,
                          height: expandedSubCategory === index ? 6 : 13,
                          justifyContent:
                            expandedSubCategory === index
                              ? "flex-start"
                              : "flex-end",
                          alignSelf: "center",
                        },
                      ]}
                      contentFit="cover"
                      source={
                        expandedSubCategory === index ? DownArrow : NextArrow
                      }
                    />
                  )}
                </View>
              </TouchableOpacity>
              {expandedSubCategory === index && (
                <View style={styles.inCategories}>
                  {item.inCategories.map((inCategory, inIndex) => (
                    <View key={inIndex}>
                      <Image
                        style={styles.bottomLine2}
                        contentFit="cover"
                        source={BottomLine}
                      />
                      <Text
                        style={[
                          styles.subCategorieMargin,
                          styles.inCategoryText,
                        ]}
                      >
                        {inCategory.title}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
              <Image
                style={styles.bottomLine}
                contentFit="cover"
                source={BottomLine}
              />

              {/* <Text style={[styles.subCategorieMargin, styles.subCategorieText]}>
              {item.title}
            </Text>
            <Image
              style={styles.bottomLine}
              contentFit="cover"
              source={BottomLine}
            /> */}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  subCategoryScroll: {
    flex: 1,
  },
  expandedSubCategoryText: {
    // Update the font and other styles when a subcategory is expanded
    fontFamily: "Source_Sans3_Bold",
    fontSize: 17, // Adjust the font size as needed
    color: "#464646", // Update the color as needed
  },
  subCategoryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  nextArrowBtn2: {
    height: 13,
    width: 7,
    marginRight: 20,
  },
  downArrowBtn: {
    width: 14,
    height: 6,
    alignSelf: "center",
  },
  inCategories: {
    marginLeft: 22, // Adjust the margin as needed
  },
  inCategoryText: {
    fontFamily: "Source_Sans3_Regular",
    fontSize: 16,
    textAlign: "left",
    color: "#464646",
  },
  mainContainer: {
    flexDirection: "column",
  },
  imageContainer: {
    flexDirection: "row",
    width: "100%",
  },
  nextArrowBtn: {
    marginTop: -16.86,
    opacity: 0.64,
    height: 13,
    width: 7,
  },
  subCategorieText: {
    marginLeft: 22,
    fontFamily: "Source_Sans3_Regular",
    fontSize: 16,
    textAlign: "left",
    color: "#464646",
  },

  categoryName: {
    fontSize: 20,
    fontFamily: "Lato_Bold",
    alignSelf: "center",
    textAlign: "left",
    color: "#464646",
    fontWeight: "700",
  },
  doneText: {
    fontFamily: "Nunito_Bold",
    color: "#393838",
    fontSize: 16,
    textAlign: "left",
    fontWeight: "700",
  },
  doneBtn: {
    marginTop: -6.859999999999999,
    marginLeft: moderateScale(320),
  },
  backArrowImg: {
    width: 11,
    height: 19,
    marginTop: -17.86,
    marginLeft: 15,
  },
  categoryImg: {
    marginTop: 35.14,
    marginLeft: 26,
    justifyContent: "center",
  },
  viewAllText: {
    fontFamily: "Source_Sans3_Regular",
    fontSize: 16,
    textAlign: "left",
    color: "#464646",
  },
  viewAllBtn: {
    marginTop: -23.86,
    marginLeft: 15,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  nextArrowMargin: {
    marginLeft: moderateScale(348),
  },
  blueLine: {
    width: 430,
    height: 14,
    marginTop: 19.14,
  },
  subCategorieMargin: {
    marginTop: 15.14,
  },
  bottomLine: {
    height: 1,
    marginTop: 15.14,
    marginHorizontal: moderateScale(20),
  },
  bottomLine2: {
    height: 1,
    marginTop: 15.14,
    marginRight: moderateScale(20),
  },

  check1Icon: {
    width: 16,
    height: 15,
    marginTop: -18.86,
    marginLeft: 386,
  },

  container: {
    backgroundColor: "#fffefe",
    flex: 1,
    width: "100%",
    paddingTop: 69,
  },
});

export default SubCategoryScreen;
