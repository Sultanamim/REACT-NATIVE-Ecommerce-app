import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { moderateScale,scale , moderateVerticalScale} from "react-native-size-matters";

const SignWithEmail = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [auth, setAuth] = React.useState(false);
  const [hidePass, setHidePass] = React.useState(true);

  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleAuth = () => {
    if (email !== "") {
      if (re.test(email)) {
        setAuth(false);

        props.navigation.navigate("VerifyEmail", {email: email});
       
      } else {
        alert("Invalid email!!!");
      }
    } else {
      alert("Please enter an email!");
    }
  };

  const handleLog = () => {
  if (password !== ""){
    if(password.length >=4 ){
      props.navigation.navigate("Home", {email: email});
    }else{
      alert("Password must be at least 4 Characters!");
    }
   
  } else {
    alert("Please enter your Password!")
  }
  }

  return (
    <View>
      {auth ? (<Text style={styles.headText}>Log in</Text>) : props.headText}
      <View style={styles.loginContainer}>
        {auth ? (
          <>
          <Text style={styles.label}>Enter your Password</Text>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              style={styles.textInput}
              blurOnSubmit={true}
              secureTextEntry={hidePass}

            />
             <Text style={styles.link}>Forgot you password?</Text>
             <View
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
            top: 120,
          }}
        >
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => {
              handleLog();
            }}
          >
            <Text
              style={styles.buttonText}
            >
            Log in
            </Text>
          </TouchableOpacity>
        </View>
          </>
        ) : (
          <>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.textInput}
              outlineColor="#E5E5E5"
            />
                  <View
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
            top: 120,
          }}
        >
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => {
              handleAuth();
            }}
          >
            <Text
              style={styles.buttonText}
            >
            Continue
            </Text>
          </TouchableOpacity>
        </View>
          </>
        )}

  
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
  headText: {
    top: 50,
    fontSize: scale(24),
    left: moderateScale(10),
    fontWeight: "300",
    fontFamily: "Lato_Bold",
  },
  loginContainer: {
    marginHorizontal: moderateScale(11), 
  },
  textInput: {
    fontSize: 16,
    textAlign: "left",
    borderWidth: 0.5,
    borderColor: "#E5E5E5",
    borderRadius: moderateScale(2),
    padding: moderateScale(10),
    top: moderateScale(70),
    fontFamily: "Lato_Regular",
  },
  continueBtn: {
    backgroundColor: "#5459E5",
    color: "#fff",
    width: "90%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: scale(15),
    fontFamily: "Lato_Regular", // Lato-medium font is missing - that's why I use this font
    marginBottom: moderateScale(10),
    top: moderateScale(70),
  },
  link: {
    fontSize: scale(13),
    fontFamily: "Nunito_Bold",
    textDecorationLine: "underline",
    color: "#4AD295",
    top: moderateScale(80),
    alignSelf: "flex-end",
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
});

export default SignWithEmail;
