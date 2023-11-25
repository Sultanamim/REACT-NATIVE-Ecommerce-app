//import liraries
import * as React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import SearchImg from "../../assets/search.png";
import CloseImg from "../../assets/close.png";
import {
    scale,
    verticalScale,
    moderateScale,
    moderateVerticalScale,
  } from "react-native-size-matters";

// create a component
const SearchBar = (props) => {
    return (
        <View style={styles.inputLayout}>
        <View style={styles.inputContainer}>
          <Image style={styles.searchIcon} source={SearchImg} />
          <TextInput
            style={styles.input}
            placeholder="Search city"
            placeholderTextColor="#464646"
            value={props.cityText}
            onChangeText={props.onChangeText}
          />
          <Pressable
            style={styles.closeButton}
            onPress={() => {
              props.onChangeText("");
            }}
          >
            <Image style={styles.closeImg} source={CloseImg} />
          </Pressable>
        </View>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    inputLayout: {
        paddingHorizontal: moderateScale(30),
      },
      inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F2F2F2",
        borderRadius: moderateScale(15),
        paddingHorizontal: moderateScale(10),
        height: moderateScale(43.72),
        marginTop: moderateScale(48),
      },
      searchIcon: {
        width: moderateScale(14),
        height: moderateScale(14),
        marginRight: moderateScale(10),
        marginLeft: moderateScale(15),
      },
      input: {
        flex: 1,
        fontSize: 17,
        fontFamily: "Source_Sans3_Regular",
        color: "#464646",
      },
      closeButton: {
        padding: moderateScale(10),
      },
      closeImg: {
        width: moderateScale(9.452),
        height: moderateScale(9.452),
      },
});

//make this component available to the app
export default SearchBar;
