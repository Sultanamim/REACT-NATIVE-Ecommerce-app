
import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.frame}>
      <View style={[styles.clipPathGroup, styles.timeStylePosition]}>
        <View style={[styles.clipPathGroup, styles.timeStylePosition]}>
          <Image
            style={[styles.vectorIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={[styles.searchWhenListDown14Child, styles.searchLayout]}
            contentFit="cover"
            source={require("../assets/line-357.png")}
          />
          <Image
            style={[styles.searchWhenListDown14Item, styles.searchLayout]}
            contentFit="cover"
            source={require("../assets/line-477.png")}
          />
          <Text style={[styles.paris, styles.parisTypo]}>Paris</Text>
          <Text style={[styles.france, styles.franceTypo]}>France</Text>
          <Image
            style={[styles.path28962Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/path-28962.png")}
          />
          <Text style={[styles.parisJardinDu, styles.parisTypo]}>
            Paris, jardin du luxembourg
          </Text>
          <Text style={[styles.france1, styles.franceTypo]}>France</Text>
          <Image
            style={[styles.path53507Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/path-53507.png")}
          />
          <View style={styles.path14982Parent}>
            <Image
              style={[styles.vectorIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/path-14982.png")}
            />
            <Text style={[styles.par, styles.parisTypo]}>Par</Text>
            <Image
              style={[styles.x32MagnifyingGlassIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/-x32-magnifying-glass.png")}
            />
          </View>
          <Image
            style={[styles.closeIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
          <Image
            style={[styles.batteryIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeStylePosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  searchLayout: {
    width: "88.82%",
    height: "0.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  parisTypo: {
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  franceTypo: {
    color: Color.colorSilver,
    left: "13.09%",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconLayout: {
    opacity: 0.73,
    left: "6.02%",
    right: "89.91%",
    width: "4.07%",
    height: "2.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wifiIconLayout: {
    bottom: "21.56%",
    width: "4.62%",
    height: "60.91%",
    top: "17.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cellularIconLayout: {
    bottom: "21.35%",
    top: "19.39%",
    width: "5.14%",
    height: "59.26%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  searchWhenListDown14Child: {
    top: "21.7%",
    right: "5.83%",
    bottom: "78.25%",
    left: "5.35%",
  },
  searchWhenListDown14Item: {
    top: "29.43%",
    right: "5.94%",
    bottom: "70.52%",
    left: "5.24%",
  },
  paris: {
    top: "15.1%",
    left: "13.15%",
    fontSize: FontSize.size_lg,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interRegular,
  },
  france: {
    top: "18.1%",
  },
  path28962Icon: {
    top: "15.34%",
    bottom: "82.27%",
  },
  parisJardinDu: {
    top: "22.93%",
    left: "11.96%",
    fontSize: FontSize.size_lg,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interRegular,
  },
  france1: {
    top: "25.94%",
  },
  path53507Icon: {
    top: "23.18%",
    bottom: "74.44%",
  },
  par: {
    top: "27.35%",
    left: "13.54%",
    fontSize: 17,
  },
  x32MagnifyingGlassIcon: {
    height: "33.52%",
    width: "3.99%",
    top: "33.5%",
    right: "89.87%",
    bottom: "32.99%",
    left: "6.14%",
  },
  path14982Parent: {
    height: "4.69%",
    width: "85.34%",
    top: "7.3%",
    right: "7.68%",
    bottom: "88.01%",
    left: "6.98%",
    position: "absolute",
  },
  closeIcon: {
    height: "1.12%",
    width: "2.43%",
    top: "9.12%",
    right: "11.86%",
    bottom: "89.76%",
    left: "85.71%",
  },
  batteryIcon: {
    height: "1.22%",
    width: "5.66%",
    top: "2.59%",
    right: "2.95%",
    bottom: "96.19%",
    left: "91.4%",
  },
  wifiIcon: {
    left: "95.38%",
    right: "0%",
  },
  cellularConnectionIcon: {
    right: "6.13%",
    left: "88.74%",
  },
  time: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: "#000",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  timeStyle: {
    width: "9.67%",
    right: "90.33%",
    position: "absolute",
  },
  batteryIcon1: {
    height: "62.96%",
    width: "7.35%",
    right: "4.08%",
    bottom: "19.51%",
    left: "88.57%",
    top: "17.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wifiIcon1: {
    right: "13.16%",
    left: "82.23%",
  },
  cellularConnectionIcon1: {
    right: "19.28%",
    left: "75.58%",
  },
  wifiParent: {
    height: "1.93%",
    width: "76.96%",
    top: "2.25%",
    right: "9.94%",
    bottom: "95.82%",
    left: "13.11%",
    position: "absolute",
  },
  clipPathGroup: {
    right: "0%",
    position: "absolute",
    width: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  frame: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame;
