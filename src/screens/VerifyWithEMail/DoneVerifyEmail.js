import {
    View,
    Text,
    StyleSheet,
   Image,
    TouchableOpacity,
  } from "react-native";
  import * as React from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import DoneImg from "../../assets/Done.png";
  import { moderateScale,scale, moderateVerticalScale } from "react-native-size-matters";

const DoneVerifyEmail = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}>
        <Text style={styles.headText}>Email Verification</Text>
        <Text style={styles.mediumText}>Verification Complete !</Text>
        <Text style={styles.normalText}>Thanks for verifying your email.</Text>
        <Image source={DoneImg} style={styles.image} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignUp")} >
          <Text style={styles.text}>Done</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: moderateScale(26),
    },
    mainContainer: {
  
    },
    headText: {
      top: moderateScale(40),
      fontSize: 24,
      fontFamily: "Nunito_ExtraBold",
      color: "#464646",
      textAlign: "center",
    },
    mediumText: {
      top: moderateScale(100),
        fontSize: 18,
        fontFamily: "Lato_Bold",
        color: "#464646",
        textAlign: "left",
        marginLeft: moderateScale(-5),
    },
    normalText: {
      top:  moderateScale(110),
      fontSize: 16,
      fontFamily: "Source_Sans3_Regular",
      color: "#464646",
      textAlign: "left",
      marginLeft: moderateScale(-5),
    },
    button: {
      top: moderateScale(390),
      alignItems: "center",
    },
    text: {
      backgroundColor: "#5459E5",
      paddingVertical: moderateScale(10),
      width: "97%",
      color: "#fff",
      fontSize: 16,
      fontFamily: "Nunito_Bold",
      borderRadius: moderateScale(10),
      textAlign: "center",
    },
    image: {
      width: moderateScale(227),
      height: moderateScale(170),
      top: moderateScale(160),
      left: moderateScale(0),
      right: moderateScale(0),
      alignSelf: "center"
    }
  });

export default DoneVerifyEmail