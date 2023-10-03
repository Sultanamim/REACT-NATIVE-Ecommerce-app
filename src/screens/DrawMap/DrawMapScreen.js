import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import MapViewComponent from '../MapLocation/MapView';

const DrawMapScreen = () => {
  return (
    <View style={styles.container}>
      <MapViewComponent />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#fff",
    }
})

export default DrawMapScreen
