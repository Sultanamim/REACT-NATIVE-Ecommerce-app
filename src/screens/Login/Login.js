import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SignWithPhone from "../../components/SignWithPhone";
import EmailImg from "../../assets/email.png";
import GoogleImg from "../../assets/google.png";
import AppleImg from "../../assets/apple.png";
import FacebookImg from "../../assets/facebook.png";
import PhoneImg from "../../assets/phone.png";
import SignWithEmail from "../../components/SignWithEmail";
import { moderateScale,scale, moderateVerticalScale } from "react-native-size-matters";

const Login = ({navigation}) => {
  const [phone, setPhone] = React.useState(true);
  const [headText, setHeadText] = React.useState(<Text style={styles.headText}>Log in or Sign Up</Text>)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Pressable onPress={() => navigation.navigate("NavigationTab")}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
        
        {phone ? 
          <SignWithPhone navigation={navigation} headText={headText}  /> 
          : <SignWithEmail navigation={navigation} headText={headText} setHeadText={setHeadText} />}

        <View style={styles.bottomContent}>
          {phone ? (
            <>
              <Pressable
                style={styles.pressable}
                onPress={() => setPhone(false)}
              >
                <Image source={EmailImg} style={styles.imgFirst} />
                <Text style={styles.normalText}>Continue with Email</Text>
              </Pressable>
            </>
          ) : (
            <>
              <Pressable
                style={styles.pressable}
                onPress={() => setPhone(true)}
              >
                <Image source={PhoneImg} style={styles.imgFirst} />
                <Text style={styles.normalText}>Continue with Phone</Text>
              </Pressable>
            </>
          )}

          <Pressable style={styles.pressable}>
            <Image source={GoogleImg} style={styles.imgSecond} />
            <Text style={styles.normalText}>Continue with Google</Text>
          </Pressable>
          <Pressable style={styles.pressable}>
            <Image source={AppleImg} style={styles.img} />
            <Text style={styles.normalText}>Continue with Apple</Text>
          </Pressable>
          <Pressable style={styles.pressable}>
            <Image source={FacebookImg} style={styles.imgLast} />
            <Text style={styles.normalText}>Continue with facebook</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: moderateScale(26),
  },
  mainContainer: {

  },
  buttonText: {
    fontSize: 18,
    top: 25,
    color: "#7C8C98",
    fontFamily: "Nunito_Bold",
  },
  headText: {
    top: 50,
    fontSize: 24,
    left: moderateScale(10),
    fontWeight: "300",
    fontFamily: "Lato_Bold",
  },
  bottomContent: {
    top: 160,
    marginHorizontal: moderateScale(10),
  },
  pressable: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    flexDirection: "row",
    width: "100%",
    height: moderateScale(50),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginTop: moderateScale(10),
  },
  img: {
    right: moderateScale(50),
    alignSelf: "center",
  },
  imgLast: {
    right: moderateScale(40),
  },
  imgFirst: {
    right: moderateScale(48),
  },
  imgSecond: {
    right: moderateScale(45),
  },
  normalText: {
    textAlign: "center",
    fontFamily: "Nunito_Bold",
    fontSize: 16,
  },
});

export default Login;