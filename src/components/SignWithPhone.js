import {View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import { moderateScale,scale , moderateVerticalScale} from "react-native-size-matters";

const SignWithPhone = (props) => {
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [number, setNumber] = React.useState("");
  
    const data = [
      { label: "United States (+1)", value: "United States (+1)" },
      { label: "United Kingdom (+009)", value: "United Kingdom (+009)" },
    ];
  
    const onChange = (item) => {
      setSelectedItem(item);
    };

    const handleInput = () => {
      if(number !== "" && selectedItem !== null){
        props.navigation.navigate("VerifyPhone", );
      } else {
        alert("Please Select Country and Input your Phone number !")
      }
    }
  
  return (
    <View>
      {props.headText}
      <View style={styles.loginContainer}>
        <Dropdown
          label="Country/Region"
          data={data}
          labelField="label"
          valueField="value"
          onChange={onChange}
          value={selectedItem}
          style={styles.dropdown}
          placeholder="Country/Region"
          placeholderStyle={{ fontSize: 16 , fontFamily: "Lato_Bold", color: "#A8A8A8" }}
        />
        <TextInput
          placeholder="Phone Number"
          value={number}
          onChangeText={setNumber}
          style={styles.textInput}
          keyboardType="number-pad"
        />
        <Text style={styles.smallText}>
          You will receive a code for phone number verification.
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
            top: 120,
          }}
        >
          <TouchableOpacity style={styles.continueBtn} onPress= {() => handleInput()}>
            <Text
              style={styles.buttonText}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={styles.orText}
        >
          or
        </Text>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
    loginContainer: {
       marginHorizontal: moderateScale(11), 
      },
      dropdown: {
        width: "100%",
        borderWidth: 0.5,
        borderColor: "#E5E5E5",
        height: moderateVerticalScale(50),
        textAlign: "left",
        padding: moderateScale(10),
        fontSize: 15,
        borderRadius: moderateScale(2),
        top: moderateScale(80),
        fontFamily: "Lato_Bold", // Lato-medium font is missing - that's why I use this font
      },
      textInput: {
        fontSize: 16,
        textAlign: "left",
        borderWidth: 0.5,
        borderColor: "#E5E5E5",
        borderRadius: moderateScale(2),
        padding: moderateScale(10),
        top: moderateScale(80.2),
        fontFamily: "Lato_Bold", // Lato-medium font is missing - that's why I use this font
      },
      smallText: {
        fontSize: 13,
        top: moderateScale(88),
        letterSpacing: moderateScale(0),
        textAlign: "center",
        fontFamily: "Nunito_Regular",
      },
      continueBtn: {
        backgroundColor: "#5459E5",
        color: "#fff",
        width: "90%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      },
      buttonText: {
        color: "#fff",
        fontFamily: "Nunito_Bold",
        fontSize: 16,
        textAlign: "center",
        paddingVertical: moderateScale(13),
      },
      orText: {
        fontSize: 18,
        fontFamily: "Nunito_Bold",
        textAlign: "center",
        top: 140,
        color: "#000",
      }
})

export default SignWithPhone;
