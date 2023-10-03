//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  FlatList,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { moderateScale } from "react-native-size-matters";
import CheckBox from "react-native-check-box";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CloseImg from "../../assets/close.png";

// create a component
const SignUp = ({navigation}) => {
  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [repeatPassText, setRepeatPassText] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [show, setShow] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View
        style={{
          paddingBottom: moderateScale(300),
          paddingHorizontal: moderateScale(36),
        }}
      >
        {/* Cancel Button */}
        <Pressable onPress={() => navigation.navigate("NavigationTab")}>
          <Text style={styles.cancelText}>Cancel</Text>
        </Pressable>

        <Text style={styles.headText}>Sign up</Text>

        {/*  Name Field */}
        <View style={styles.nameField}>
          <Text style={styles.label}>Your Name</Text>
          {/* <TextInput
          style={styles.nameInput}
          placeholder="Please enter your name"
          value={nameText}
          onChangeText={setNameText}
        /> */}
          <FloatingLabelInput
            label={"Please enter your name"}
            value={nameText}
            onChangeText={(val) => setNameText(val)}
            containerStyles={{
              height: moderateScale(55),
              borderWidth: 1,
              borderColor: "#E5E5E5",
              borderRadius: moderateScale(7),
              marginTop: moderateScale(9.8),
              paddingHorizontal: moderateScale(15),
            }}
            customLabelStyles={{
              topFocused: -18,
              colorBlurred: "#464646",
              colorFocused: "#464646",
              fontSizeFocused: 12,
              fontSizeBlurred: 14,
            }}
            inputStyles={{
              color: "#464646",
              fontSize: 16,
              fontFamily: "Lato_Regular",
              marginTop: moderateScale(8),
            }}
            hintTextColor="#464646"
            rightComponent={
              <>
                <TouchableOpacity style={{alignSelf: "center", width: 10}} onPress={() => setNameText("")}>
                  <Image style={styles.closeImg} source={CloseImg} />
                </TouchableOpacity>
              </>
            }
          />
        </View>
        {/*  Email Field */}
        <View style={styles.emailField}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.emailInput}
            placeholder="Email"
            value={emailText}
            onChangeText={setEmailText}
          />
        </View>
        {/*  Create Password Field */}
        <View style={styles.CreatePassField}>
          <Text style={styles.label}>Create Password</Text>
          <FloatingLabelInput
            label={"min. 8 character"}
            isPassword
            togglePassword={show}
            value={passwordText}
            onChangeText={(val) => setPasswordText(val)}
            customShowPasswordComponent={
              <Text style={styles.showText}>Show</Text>
            }
            customHidePasswordComponent={
              <Text style={styles.showText}>Hide</Text>
            }
            containerStyles={{
              height: moderateScale(55),
              borderWidth: 1,
              borderColor: "#E5E5E5",
              borderRadius: moderateScale(7),
              marginTop: moderateScale(9.8),
              paddingHorizontal: moderateScale(15),
              backgroundColor: "#F5F4F7",
            }}
            customLabelStyles={{
              topFocused: -18,
              colorBlurred: "#464646",
              colorFocused: "#464646",
              fontSizeFocused: 12,
              fontSizeBlurred: 14,
            }}
            inputStyles={{
              color: "#5459E5",
              fontSize: 18,
              marginTop: moderateScale(5),
              letterSpacing: moderateScale(1)
            }}
            hintTextColor="#464646"
          />
        </View>
        {/*  Repeat Password Field */}
        <View style={styles.RepeatPassField}>
          <Text style={styles.label}>Repeat Password</Text>
          <FloatingLabelInput
            label={"Password"}
            isPassword
            togglePassword={showRepeat}
            value={repeatPassText}
            onChangeText={(val) => setRepeatPassText(val)}
            customShowPasswordComponent={
              <Text style={styles.showText}>Show</Text>
            }
            customHidePasswordComponent={
              <Text style={styles.showText}>Hide</Text>
            }
            containerStyles={{
              height: moderateScale(55),
              borderWidth: 1,
              borderColor: "#E5E5E5",
              borderRadius: moderateScale(7),
              marginTop: moderateScale(9.8),
              paddingHorizontal: moderateScale(15),
            }}
            customLabelStyles={{
              topFocused: -18,
              colorBlurred: "#464646",
              colorFocused: "#464646",
              fontSizeFocused: 12,
              fontSizeBlurred: 14,
            }}
            inputStyles={{
              color: "#5459E5",
              fontSize: 18,
              marginTop: moderateScale(5),
              letterSpacing: moderateScale(1)
            }}
            hintTextColor="#464646"
            
          />
        </View>
        {/* Check box Field */}
        <View style={styles.checkboxField}>
          <CheckBox
            style={{ borderRadius: 20, marginTop: moderateScale(-5) }}
            isChecked={isSelected}
            onClick={() => setSelection(!isSelected)}
            uncheckedCheckBoxColor="#7C8C98"
            checkedCheckBoxColor="#5459E5"
            rightText={
              <>
                <Text style={styles.normalText}>I agree to the </Text>
                <Text style={styles.underlineText}>
                  terms and conditions, Payments terms of Service
                </Text>
                <Text style={styles.normalText}> and </Text>
                <Text style={styles.underlineText}>
                  acknowledge the Privacy.
                </Text>
              </>
            }
            rightTextStyle={{
              marginTop: moderateScale(10),
              fontSize: 13,
              fontFamily: "Lato_Regular",
              color: "#7C8C98",
              marginRight: moderateScale(10),
            }}
          />
        </View>
        {/*  Create Account Button */}
        <Pressable style={styles.accountButton} onPress={() => navigation.navigate("NotifyLocation")}>
          <Text style={styles.buttonText}>Create Account</Text>
        </Pressable>
      </View>
    </KeyboardAwareScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  cancelText: {
    top: moderateScale(19),
    marginLeft: moderateScale(-10),
    fontSize: 18,
    fontFamily: "Nunito_Bold",
    color: "#7C8C98",
  },
  headText: {
    fontSize: 24,
    fontFamily: "Lato_Bold", // Lato_Heavy font is missing
    top: moderateScale(40),
    marginLeft: moderateScale(-1),
  },
  label: {
    fontSize: 15,
    fontFamily: "Lato_Bold",
  },
  nameField: {
    top: moderateScale(70),
  },
  nameInput: {
    height: moderateScale(55),
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: moderateScale(7),
    marginTop: moderateScale(9.8),
    paddingHorizontal: moderateScale(20),
  },
  emailField: {
    top: moderateScale(90),
  },
  emailInput: {
    height: moderateScale(55),
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: moderateScale(7),
    marginTop: moderateScale(9.8),
    paddingHorizontal: moderateScale(20),
    backgroundColor: "#F5F4F7",
    fontSize: 16,
    fontFamily: "Source_Sans3_Medium",
    color: "#464646",
  },
  CreatePassField: {
    top: moderateScale(120),
  },
  CreatePassInput: {
    height: moderateScale(55),
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: moderateScale(7),
    marginTop: moderateScale(9.8),
    paddingHorizontal: moderateScale(20),
    backgroundColor: "#F5F4F7",
  },
  RepeatPassField: {
    top: moderateScale(150),
  },
  RepeatPassInput: {
    height: moderateScale(55),
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: moderateScale(7),
    marginTop: moderateScale(9.8),
    paddingHorizontal: moderateScale(20),
  },
  checkboxField: {
    top: moderateScale(170),
  },
  underlineText: {
    textDecorationLine: "underline",
  },
  accountButton: {
    top: moderateScale(240),
    alignItems: "center",
  },
  buttonText: {
    backgroundColor: "#5459E5",
    paddingVertical: moderateScale(16),
    width: "100%",
    color: "#fff",
    fontSize: 17,
    fontFamily: "Nunito_Bold",
    borderRadius: moderateScale(20),
    textAlign: "center",
  },
  showText: {
    color: "#464646",
    fontSize: 13,
  },
  closeImg: {
    width: moderateScale(9.452),
    height: moderateScale(9.452),
  },
});

//make this component available to the app
export default SignUp;
