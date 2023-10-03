//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import BellImg from "../../assets/bell.png";
import { moderateScale } from 'react-native-size-matters';

// create a component
const NotifyLocation = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={BellImg} style={styles.bellImg} />
            <Text style={styles.headText}>Turn on notifications?</Text>
            <Text style={styles.mediumText}>Don’t miss important messages, updates on your listings and availabilities of your favourite items !</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("NavigationTab")}>
                <Text style={styles.buttonText}>Yes, notify me</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate("NavigationTab")}>
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: moderateScale(25),
    },
    bellImg: {
        width: moderateScale(63),
        height: moderateScale(79.68),
        marginTop: moderateScale(116.32),
    },
    headText: {
        fontSize: 31,
        fontFamily: "Nunito_Bold",
        marginTop: moderateScale(18),
        width: moderateScale(201),
        marginLeft: moderateScale(9),
        color: "#464646",
    },
    mediumText: {
        fontSize: 19,
        fontFamily: "Lato_Regular",
        color: "#242455",
        marginTop: moderateScale(24),
        lineHeight: moderateScale(30),
    },
    buttonContainer: {
        textAlign: "center",
        marginTop: moderateScale(33),
    },
    buttonText: {
        paddingVertical: moderateScale(13),
        width: "50%",
        backgroundColor: "#5459E5",
        borderRadius: moderateScale(10),
        textAlign: "center",
        color: "#fff",
        fontSize: 17,
        fontFamily: "Nunito_Bold",
    },
    skipButton: {
        textAlign: "center",
        marginTop: moderateScale(16),
    },
    skipText: {
        paddingVertical: moderateScale(9),
        width: "35%",
        backgroundColor: "#7D86AA",
        borderRadius: moderateScale(3),
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        fontFamily: "Nunito_Bold",
    }
});

//make this component available to the app
export default NotifyLocation;
