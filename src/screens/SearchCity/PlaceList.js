import * as React from "react";
import { View, StyleSheet, Text, TextInput, Pressable, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import LocationImg from '../../assets/location.png';
import { moderateScale, moderateVerticalScale, scale } from "react-native-size-matters";

const PlaceList = (props) => {
  const [country, setCountry]= React.useState("France");

  return (
    <View style={styles.placeLists}>
      {props.cityText === "" ? (
        <>
        <View>
         <Image source={LocationImg } style={styles.locationImg} />
        <Text style={styles.normalText1}>No city to show</Text>
        <View style={styles.line} />
        </View>
        </>
      ) : (
        <>
        <Pressable onPressIn={() => {props.navigation.navigate("CityMap", {cityText: props.cityText, onChangeText: props.onChangeText})}}>
          <View  styles={styles.container}>
           <Image source={LocationImg } style={styles.locationImg} />
            <Text style={styles.normalText2}>{props.cityText}</Text>
            <Text style={styles.miniText}>{country}</Text>
            <View style={styles.line} />
            </View>
          </Pressable>
          </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  placeLists: {
    flex:1,
    flexDirection: "column",
    marginTop: moderateVerticalScale(18),
    left: moderateScale(-29),
    paddingHorizontal: moderateScale(25),
  },
  normalText1: {
    color: "#464646",
    fontSize: scale(17),
    position: "absolute",
    top: moderateVerticalScale(19.02),
    left: moderateScale(52.28),
    fontFamily: "Source_Sans3_Regular",
  },
  normalText2: {
    color: "#464646",
    fontSize: scale(17),
    position: "absolute",
    top: moderateScale(19.02),
    left: moderateScale(52.28),
    fontFamily: "Source_Sans3_Regular",
  },
  icon: {
    padding: 0,
    margin: 0,
  },
  locationImg: {
    width: moderateScale(16),
    height:  moderateVerticalScale( 20.23),
    top: moderateScale(22),
    left:26.83,
    position: "absolute",
  },
  line: {
   backgroundColor: "#E3E1E1",
   height: 1,
   top: moderateScale(77),
   left: moderateScale(28),
   right: 25.07,
   paddingHorizontal: moderateScale(-100),
  },
  miniText: {
    fontSize: scale(15),
    top: moderateScale(45),
    left: 56.28,
    color: "#ABBFC9",
    position: "absolute",
    fontFamily: "Source_Sans3_SemiBold",
  }
});

export default PlaceList;
