//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Home/HomeScreen";
import MyListings from "../MyListings/MyListings";
import Messages from "../Messages/Messages";
import MyProfile from "../MyProfile/MyProfile";
import Post from "../post/Post";
import HomeColor from "../../assets/home-images/Home-color.png";
import Home from "../../assets/home-images/home.png";
import Listing from "../../assets/home-images/listing.png";
import ListingColor from "../../assets/home-images/listing-color.png";
import MessagesImg from "../../assets/home-images/messages.png";
import MessagesColor from "../../assets/home-images/messages-color.png";
import ProfileImg from "../../assets/home-images/profile.png";
import ProfileColor from "../../assets/home-images/profile-color.png";
import CameraImg from "../../assets/home-images/camera.png";
import TabBackImg from "../../assets/home-images/tab-back.png";
import MyTabBarLabel from "./MyTabBarLabel";

const Tab = createBottomTabNavigator();

const NavigationTab = ({ state, descriptors, navigation }) => {
  const [active, setActive] = useState(false);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <MyTabBarLabel title={"Home"} focused={focused} />
          ),
          tabBarOptions: {
            activeTintColor: "#4AD295",
            inactiveTintColor: "#8FA3AD",
          },
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={focused ? HomeColor : Home}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="My Listings"
        component={MyListings}
        options={{
          tabBarLabel: ({ focused }) => (
            <MyTabBarLabel title={"My Listings"} focused={focused} />
          ),
          tabBarOptions: {
            activeTintColor: "#4AD295",
            inactiveTintColor: "#8FA3AD",
          },
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={focused ? ListingColor : Listing}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarLabel: "Post",
          tabBarLabelStyle: {
            color: "#fff",
            fontSize: 11,
            textAlign: "center",
            fontFamily: "Nunito_Bold",
            marginBottom: 3,
          },
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <ImageBackground
                source={TabBackImg}
                style={styles.tabBackgroundImage}
              >
                <Image
                  style={{
                    width: 35,
                    height: 35,
                    padding: 8,
                    marginBottom: 5,
                    marginTop: -8,
                  }}
                  source={CameraImg}
                />
              </ImageBackground>
            );
          },
          tabBarItemStyle: {
            borderRadius: 5,
            marginBottom: 20,
            marginHorizontal: 20,
          },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: ({ focused }) => (
            <MyTabBarLabel title={"Messages"} focused={focused} />
          ),
          tabBarOptions: {
            activeTintColor: "#4AD295",
            inactiveTintColor: "#8FA3AD",
            backgroundColor: "#4AD295",
          },
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: 23, height: 21 }}
                source={focused ? MessagesColor : MessagesImg}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="My Profile"
        component={MyProfile}
        options={{
          tabBarLabel: ({ focused }) => (
            <MyTabBarLabel title={"My Profile"} focused={focused} />
          ),
          tabBarOptions: {
            activeTintColor: "#4AD295",
            inactiveTintColor: "#8FA3AD",
          },
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={focused ? ProfileColor : ProfileImg}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  tabBackgroundImage: {
    width: 60,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
});

export default NavigationTab;
