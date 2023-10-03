import * as React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import CityImg from "../../assets/CityImg.png";
import SearchImg from "../../assets/search.png";
import SearchBackground from "../../assets/search-background.png";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const EntryCity = ({ navigation }) => {
  return (
    <>
      <View style={styles.frame}>
        <View style={[styles.clipPathGroup, styles.vectorIconPosition]}>
          <View style={[styles.clipPathGroup, styles.vectorIconPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconLayout]}
              source={require("../../assets/vector.svg")}
            />
            <Text style={[styles.whatIsYour, styles.yourFlexBox]}>
              What is your city ?
            </Text>

            <Image
              style={[styles.lemonadeInsuranceIos5, styles.iconLayout]}
              source={CityImg}
            />
            <Pressable
              onPress={() => navigation.navigate("SearchCity")}
              style={styles.searchWhenListDown17Inner}
            >
              <View style={[styles.clipPathGroup, styles.vectorIconPosition]}>
                <Image
                  style={[styles.vectorIcon, styles.iconLayout]}
                  source={SearchBackground}
                />
                <Text style={[styles.enterYourCity, styles.yourFlexBox]}>
                  Enter your city
                </Text>
                <Image
                  style={[styles.x32MagnifyingGlassIcon, styles.iconLayout]}
                  source={SearchImg}
                />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  vectorIconPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  yourFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    bottom: "96.23%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  whatIsYour: {
    top: "25.16%",
    left: "22.63%",
    fontSize: 28,
    color: "#000",
    textAlign: "left",
    fontFamily: "Nunito_Bold",
  },
  lemonadeInsuranceIos5: {
    height: moderateScale(280),
    top: "59.08%",
    bottom: "15.82%",
    left: "0%",
    right: "0%",
    width: moderateScale(430),
  },
  enterYourCity: {
    top: "26.92%",
    left: "13.54%",
    fontSize: 17,
    color: "#464646",
    fontFamily: "Source_Sans3_Regular",
  },
  x32MagnifyingGlassIcon: {
    height: "26.64%",
    width: "3.99%",
    top: "36.97%",
    right: "89.87%",
    bottom: "36.39%",
    left: "6.14%",
  },
  clipPathGroup: {
    left: "0%",
    position: "absolute",
  },
  searchWhenListDown17Inner: {
    height: "5.9%",
    width: "85.34%",
    top: "33.13%",
    right: "7.33%",
    bottom: "60.97%",
    left: "7.33%",
    position: "absolute",
  },
  frame: {
    flex: 1,

    width: "100%",
  },

  // frame: {
  //   flex: 1,
  //   width: "100%",
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "flex-start",
  //   flexDirection: "column",
  // },
  // mainFrame: {
  //   flex: 1,
  //   flexDirection: "column",
  // },
  // headText: {
  //   fontSize: 28,
  //   top: 234.49,
  //   textAlign: "center",
  // },
  // inputContainer: {
  //   backgroundColor: "#F2F2F2",
  //   top: 308.8,
  //   bottom: 636.51,
  //   width: 366.97,
  //   height: 55,
  //   borderRadius: 20,
  //   left: 31.52,
  //   right: 31.52,
  // },
  // enterYourCity: {
  //   top: "30.72%",
  //   left: "13.54%",
  //   fontSize: 17,
  //   color: "#464646",
  // },
  // yourFlexBox: {
  //   textAlign: "left",
  //   position: "absolute",
  // },
  // iconLayout: {
  //   maxHeight: "100%",
  //   maxWidth: "100%",
  //   position: "absolute",
  //   overflow: "hidden",
  // },
  // vectorIcon: {
  //   left: "0%",
  //   bottom: "0%",
  //   height: "100%",
  //   right: "0%",
  //   top: "0%",
  //   width: "100%",
  // },
  // searchWhenListDown17Inner: {
  //   height: "5.9%",
  //   width: "85.34%",
  //   top: "33.13%",
  //   right: "7.33%",
  //   bottom: "60.97%",
  //   left: "7.33%",
  //   position: "absolute",
  // },
  // x32MagnifyingGlassIcon: {
  //   height: "26.64%",
  //   width: "3.99%",
  //   top: "36.97%",
  //   right: "89.87%",
  //   bottom: "36.39%",
  //   left: "6.14%",
  // },
  // clipPathGroup: {
  //   left: "0%",
  //   position: "absolute",
  // },
  // searchIcon: {
  //   width: 15,
  //   height: 14.5,
  //   top: 25,
  //   right: 10,
  // },
  // textInput: {
  //   fontSize: 16,
  //   top: 16.9,
  //   left: 49.68,
  // },
  // input: {
  //   fontSize: 16,
  //   textAlign: "center",
  // },
  // imageContainer: {
  //   margin: 0,
  // },
  // cityImg: {
  //   width: 380,
  //   height: 270,
  //   top: 280,
  // },
});

export default EntryCity;
