import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  PermissionsAndroid,
  TouchableOpacity,
} from "react-native";
import { Marker } from "react-native-maps";
import MapView,  { PROVIDER_GOOGLE } from "react-native-maps";
import SearchImg from "../../assets/search.png";
import { SafeAreaView } from "react-native-safe-area-context";
import * as React from "react";
import TopGradientImg from "../../assets/gradiant-top.png";
import BottomGradientImg from "../../assets/gradiant-bottom.png";
import ExclusionImg from "../../assets/Exclusion.png";
import RadiusImg from '../../assets/radius-location.png';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from "../../utils";
import Geolocation from 'react-native-geolocation-service';
import DrawImg from '../../assets/draw-location.png';
import SearchBar from '../../components/Searchbar/SearchBar';
import { moderateScale, moderateVerticalScale, scale } from "react-native-size-matters";

const CityMap = ({ route, navigation }) => {
  const { cityText } = route.params;
  const [newText, setText] = React.useState(cityText);
  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

 React.useEffect(() => {
  requestLocationPermission();
 }, [])

 
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        // {
        //   title: 'Google App Location Permission',
        //   message:
        //     'Cool Photo App needs access to your Location ' +
        //     'so you can take awesome pictures.',
        //   buttonNeutral: 'Ask Me Later',
        //   buttonNegative: 'Cancel',
        //   buttonPositive: 'OK',
        // },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

const getLocation = () => {
  Geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
    },
    (error) => {
      // See error code charts below.
      console.log(error.code, error.message);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
);
}

  return (
    <View style={styles.frame}>
      <View style={styles.inputLayout}>
        <View style={styles.inputContainer}>
          <Image style={styles.searchIcon} source={SearchImg} />
          <TextInput
            style={styles.input}
            placeholder="Search city"
            placeholderTextColor="#464646"
            value={newText}
            onChangeText={setText}
          />
        </View>
      </View>
       
        <Image source={TopGradientImg} style={styles.topGradiant} />
        <Image source={ExclusionImg} style={styles.exclusionImg} />
        <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
        initialRegion={tokyoRegion}>
          <Marker coordinate={tokyoRegion} />
        </MapView>
      
        <Image source={BottomGradientImg} style={styles.bottomGradiant} />
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Done</Text>
          </Pressable>
        </View>
      <View style={styles.iconContainer}>
      <Pressable>
          <Image source={RadiusImg} style={styles.radiusImg} />
        </Pressable>
        <Pressable>
          <Image source={DrawImg} style={styles.drawImg} />
        </Pressable>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainFrame: {},
  map: {
    flex: 1,
    width: "100%",
    height: moderateVerticalScale(577),
    top: moderateScale(117.72),
    left: moderateScale(0),
    right: moderateScale(0),
    position: "absolute",
    zIndex: 0,
  },
  button: {
    flex: 1,
    width: moderateScale(313),
    height: moderateVerticalScale(42),
    backgroundColor: "#4AD295",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(15),
    top: moderateScale(598),
    bottom: moderateScale(43),
    zIndex: 2,
    position: "absolute",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    fontFamily: "Nunito_ExtraBold"
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: moderateScale(49),
  },
  topGradiant: {
    width: moderateScale(430),
    height: moderateVerticalScale(37),
    top: moderateScale(93),
    left: moderateScale(0),
    right: moderateScale(0),
    position: "absolute",
    zIndex: 2,
  },
  bottomGradiant: {
    width: moderateScale(430),
    height: moderateVerticalScale(63),
    top: moderateScale(645),
    left: moderateScale(0),
    right: moderateScale(0),
    position: "absolute",
    zIndex: 2,
  },
  exclusionImg: {
    width: "100%",
    height: moderateVerticalScale(577),
    top: moderateScale(117.72),
    position: "absolute",
    zIndex: 0.5,
  },
  radiusImg: {
    width: moderateScale(80), 
    height: moderateVerticalScale(80),
    left: moderateScale(94),
    top: moderateScale(508),
    zIndex: 2.5,
    position: "absolute",
  },
  drawImg: {
    width: moderateScale(80), 
    height: moderateVerticalScale(80),
    left: moderateScale(94),
    top: moderateScale(563),
    zIndex: 2.5,
    position: "absolute",
  },
  iconContainer: {
    flex: 1,
    flexDirection: "column",
    position: "absolute",
    zIndex: 2,
    left: moderateScale(200),
  },
  inputLayout: {
    paddingHorizontal: moderateScale(30),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: moderateScale(15),
    paddingHorizontal: moderateScale(10),
    height: moderateVerticalScale(43.72),
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
    fontSize: scale(17),
    fontFamily: "Source_Sans3_Regular",
    color: "#464646",
  },
});

export default CityMap;
