import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  moderateScale,
  scale,
  moderateVerticalScale,
} from "react-native-size-matters";

const CELL_COUNT = 4;

const VerifyPhone = ({ navigation }) => {
  const [value, setValue] = React.useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleVerify = () => {
    if (props.value !== "") {
      navigation.navigate("DoneVerifyPhone");
    } else {
      alert("Please enter the verification code !");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Login")}
        >
          <Icon
            name="chevron-left"
            size={12}
            color="#7C8C98"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Return</Text>
        </Pressable>
        <Text style={styles.headText}>Phone verification</Text>
        <Text style={styles.mediumText}>Verification Code</Text>
        <Text style={styles.normalText}>
          Please enter the verification code we sent to the phone number you
          provided.
        </Text>

        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />

        <Text style={styles.smallText}>I did not receive a code !</Text>
        <Text style={styles.link}>Resend code ?</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleVerify()}>
          <Text style={styles.text}>Verify</Text>
        </TouchableOpacity>
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
  mainContainer: {},
  buttonText: {
    fontSize: 15,
    top: moderateScale(26),
    fontFamily: "Nunito_Bold",
    marginLeft: moderateScale(5),
    color: "#7C8C98",
  },
  headText: {
    top: moderateScale(40),
    fontSize: 24,
    fontFamily: "Nunito_ExtraBold",
    textAlign: "center",
    color: "#464646",
  },
  pressable: {
    flexDirection: "row",
  },
  icon: {
    top: moderateScale(30),
  },
  normalText: {
    top: moderateScale(85),
    fontSize: 16,
    fontFamily: "Source_Sans3_Regular",
    color: "#464646",
    textAlign: "left",
    marginLeft: moderateScale(-10),
    letterSpacing: moderateScale(0),
  },
  mediumText: {
    fontSize: 18,
    color: "#464646",
    top: moderateScale(75),
    fontFamily: "Lato_Bold",
    marginLeft: moderateScale(-10),
  },

  smallText: {
    top: moderateScale(120),
    textAlign: "center",
    fontSize: 13,
    fontFamily: "Source_Sans3_Regular", // font = Source sans Pro is missing ....
  },
  link: {
    top: moderateScale(120),
    textAlign: "center",
    fontSize: 15,
    color: "#5459E5",
    fontFamily: "Source_Sans3_Bold", // font = Source sans Pro is missing ....
  },
  codeFieldRoot: {
    marginTop: moderateScale(20),
    top: moderateScale(90),
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "92%",
    marginLeft: moderateScale(15),
  },
  cell: {
    width: moderateScale(55),
    height: moderateScale(55),
    lineHeight: moderateScale(50),
    fontSize: 24,
    borderWidth: 1,
    borderColor: "#A8A8A8",
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
  },
  focusCell: {
    borderColor: "#000",
  },
  button: {
    top: moderateScale(155),
    alignItems: "center",
  },
  text: {
    backgroundColor: "#5459E5",
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(55),
    color: "#fff",
    fontSize: 16,
    fontFamily: "Nunito_Bold",
    borderRadius: 10,
  },
});

export default VerifyPhone;
