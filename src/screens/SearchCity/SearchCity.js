import * as React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import SearchImg from "../../assets/search.png";
import PlaceList from "./PlaceList";
import CloseImg from "../../assets/close.png";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../../utils";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import SearchBar from '../../components/Searchbar/SearchBar';

const SearchCity = ({ navigation, route }) => {
  const [cityText, onChangeText] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
     <SearchBar cityText={cityText} onChangeText={onChangeText} />
      <PlaceList
        cityText={cityText}
        navigation={navigation}
        route={route}
        onChangeText={onChangeText}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
 
});

export default SearchCity;
