import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

 import {
  EnableLocation,
   SearchCity,
   Entry,
   CityMap,
   DrawMap,
   Login,
   VerifyEmail,
   VerifyPhone,
   DoneVerifyEmail,
   DoneVerifyPhone,
   SignUp,
   NotifyLocation,
   Home,
   NavigationTab
 } from "./src/screens";


const Stack = createNativeStackNavigator();

export default function App() {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [loaded, error] = useFonts({
    Source_Sans3_Italic: require("./src/assets/fonts/Source_Sans_3/SourceSans3-Italic-VariableFont_wght.ttf"),
    Source_Sans3_Regular: require("./src/assets/fonts/Source_Sans_3/static/SourceSans3-Regular.ttf"),
    Source_Sans3_SemiBold: require("./src/assets/fonts/Source_Sans_3/static/SourceSans3-SemiBold.ttf"),
    Source_Sans3_Bold: require("./src/assets/fonts/Source_Sans_3/static/SourceSans3-Bold.ttf"),
    Source_Sans3_Medium: require("./src/assets/fonts/Source_Sans_3/static/SourceSans3-Medium.ttf"),
    Nunito_Italic: require("./src/assets/fonts/Nunito/Nunito-Italic-VariableFont_wght.ttf"),
    Nunito_Bold: require("./src/assets/fonts/Nunito/static/Nunito-Bold.ttf"),
    Nunito_ExtraBold: require("./src/assets/fonts/Nunito/static/Nunito-ExtraBold.ttf"),
    Nunito_Regular: require("./src/assets/fonts/Nunito/static/Nunito-Regular.ttf"),
    Lato_Bold: require("./src/assets/fonts/Lato/Lato-Bold.ttf"),
    Lato_Regular: require("./src/assets/fonts/Lato/Lato-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* Entry Screens */}
          <Stack.Screen name="EnableLocation" component={EnableLocation} />

          {/* Location Screens */}
          <Stack.Screen name="EntryCity" component={Entry} />
          <Stack.Screen name="SearchCity" component={SearchCity} />
          <Stack.Screen name="CityMap" component={CityMap} />
          <Stack.Screen name="NotifyLocation" component={NotifyLocation} />
          <Stack.Screen name="DrawMapScreen" component={DrawMap} />
           
            
           {/* Auth Screens */}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
          <Stack.Screen name="DoneVerifyEmail" component={DoneVerifyEmail} />
          <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
          <Stack.Screen name="DoneVerifyPhone" component={DoneVerifyPhone} />
          <Stack.Screen name="SignUp" component={SignUp} />

          {/* Navigation Tab => It,s an Home screen for other screens */}
          <Stack.Screen name="NavigationTab" component={NavigationTab} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
