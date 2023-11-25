import * as React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const Search3 = () => {
  return (
    <View style={styles.search3}>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <View style={[styles.battery, styles.batterySpaceBlock]}>
        <Image
          style={styles.capIcon}
          contentFit="cover"
          source={require("../assets/cap.png")}
        />
        <View style={styles.capacity} />
      </View>
      <Image
        style={[styles.cellularConnectionIcon, styles.batterySpaceBlock]}
        contentFit="cover"
        source={require("../assets/cellular-connection.png")}
      />
      <View style={styles.searchContainer}>
        <View style={styles.path14982IconPosition}>
          <Image
            style={[styles.path14982Icon, styles.path14982IconPosition]}
            contentFit="cover"
            source={require("../assets/path-14982.png")}
          />
          <View
            style={[styles.iphone12Pro, styles.iphone12ProPosition]}
            placeholder="iPhone 12 Pro"
          />
          <Image
            style={[styles.x32MagnifyingGlassIcon, styles.iphone12ProPosition]}
            contentFit="cover"
            source={require("../assets/search-icon.png")}
          />
        </View>
      </View>
      <Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/group-5143.png")}
      />
      <Image
        style={styles.closeBtnIcon}
        contentFit="cover"
        source={require("../assets/closebtn.png")}
      />
      <TouchableHighlight
        style={styles.recent}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Text style={[styles.recent1, styles.saved1Typo]}>Recent</Text>
      </TouchableHighlight>
      <TouchableOpacity
        style={styles.saved}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Text style={[styles.saved1, styles.saved1Typo]}>Saved</Text>
      </TouchableOpacity>
      <Text style={[styles.headingText, styles.headingTypo]}>Iphone</Text>
      <Image
        style={styles.closeBtnIcon1}
        contentFit="cover"
        source={require("../assets/closebtn1.png")}
      />
      <Text
        style={[styles.miniText, styles.miniSpaceBlock]}
      >{`Cellphones & Accessories`}</Text>
      <Image
        style={[styles.bottomLineIcon, styles.bottomIconSpaceBlock]}
        contentFit="cover"
        source={require("../assets/bottomline.png")}
      />
      <Text style={[styles.headingText1, styles.textTypo1]}>Apartments</Text>
      <Image
        style={styles.closeBtnIcon1}
        contentFit="cover"
        source={require("../assets/closebtn1.png")}
      />
      <Text style={[styles.miniText1, styles.textTypo1]}>Real Estate</Text>
      <Image
        style={[styles.bottomLineIcon, styles.bottomIconSpaceBlock]}
        contentFit="cover"
        source={require("../assets/bottomline.png")}
      />
      <Text style={[styles.headingText2, styles.headingSpaceBlock]}>Sofa</Text>
      <Text style={[styles.miniText2, styles.textTypo]}>{`Home & Garden`}</Text>
      <Image
        style={[styles.bottomLineIcon, styles.bottomIconSpaceBlock]}
        contentFit="cover"
        source={require("../assets/bottomline.png")}
      />
      <Text style={[styles.headingText3, styles.textTypo]}>MacBook pro</Text>
      <Text
        style={[styles.miniText2, styles.textTypo]}
      >{`Computers & Tablets`}</Text>
      <Image
        style={[styles.bottomLineIcon3, styles.bottomIconSpaceBlock]}
        contentFit="cover"
        source={require("../assets/bottomline1.png")}
      />
      <View style={styles.maskGroup286} />
    </View>
  );
};

const styles = StyleSheet.create({
  batterySpaceBlock: {
    marginTop: -11.159999999999997,
    display: "none",
    height: 11,
  },
  path14982IconPosition: {
    left: 0,
    bottom: 0,
    top: 0,
    right: 0,
    position: "absolute",
  },
  iphone12ProPosition: {
    top: "50%",
    position: "absolute",
  },
  saved1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
  },
  headingTypo: {
    marginLeft: 17,
    textAlign: "center",
    fontFamily: FontFamily.sourceSans3Regular,
    lineHeight: 9,
  },
  miniSpaceBlock: {
    marginTop: -1.1599999999999966,
    color: Color.colorDarkgray,
    fontSize: FontSize.size_sm,
  },
  bottomIconSpaceBlock: {
    marginTop: 9.840000000000003,
    height: 1,
  },
  textTypo1: {
    marginLeft: 18,
    textAlign: "center",
    fontFamily: FontFamily.sourceSans3Regular,
    lineHeight: 9,
  },
  headingSpaceBlock: {
    marginTop: 6.840000000000003,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_mid,
  },
  textTypo: {
    marginLeft: 19,
    textAlign: "center",
    fontFamily: FontFamily.sourceSans3Regular,
    lineHeight: 9,
  },
  wifiIcon: {
    marginLeft: 366,
    display: "none",
    height: 11,
    width: 15,
  },
  capIcon: {
    marginTop: -2,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
    top: "50%",
    position: "absolute",
  },
  capacity: {
    top: 1,
    bottom: 2,
    left: 1,
    borderRadius: 1,
    width: 19,
    position: "absolute",
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  battery: {
    borderRadius: 3,
    width: 24,
    marginLeft: 387,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    marginTop: -11.159999999999997,
  },
  cellularConnectionIcon: {
    width: 17,
    marginLeft: 344,
  },
  path14982Icon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iphone12Pro: {
    marginTop: -10.9,
    left: 50,
  },
  x32MagnifyingGlassIcon: {
    marginTop: -6.98,
    left: 23,
    height: 15,
    width: 15,
    top: "50%",
  },
  searchContainer: {
    width: 350,
    height: 44,
    marginTop: 51.84,
    marginLeft: 54,
  },
  backArrowIcon: {
    height: 17,
    marginTop: -28.159999999999997,
    marginLeft: 20,
    width: 10,
  },
  closeBtnIcon: {
    marginTop: -16.159999999999997,
    marginLeft: 304,
    width: 10,
    height: 11,
  },
  recent1: {
    color: "#4ad295",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
  },
  recent: {
    marginTop: 48.84,
    marginLeft: 90,
  },
  saved1: {
    fontSize: 15,
    color: "#8f9496",
  },
  saved: {
    marginTop: -19.159999999999997,
    marginLeft: 306,
  },
  headingText: {
    marginTop: 30.840000000000003,
    color: Color.colorDarkslategray,
    marginLeft: 17,
    fontSize: FontSize.size_mid,
  },
  closeBtnIcon1: {
    width: 8,
    height: 8,
    marginTop: -2.1599999999999966,
    marginLeft: 401,
  },
  miniText: {
    textAlign: "center",
    fontFamily: FontFamily.sourceSans3Regular,
    lineHeight: 9,
    marginTop: -1.1599999999999966,
    marginLeft: 20,
  },
  bottomLineIcon: {
    width: 393,
    alignSelf: "center",
  },
  headingText1: {
    marginTop: 6.840000000000003,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_mid,
  },
  miniText1: {
    marginTop: -1.1599999999999966,
    color: Color.colorDarkgray,
    fontSize: FontSize.size_sm,
  },
  headingText2: {
    marginLeft: 17,
    textAlign: "center",
    fontFamily: FontFamily.sourceSans3Regular,
    lineHeight: 9,
  },
  miniText2: {
    marginTop: 5.840000000000003,
    color: Color.colorDarkgray,
    fontSize: FontSize.size_sm,
    marginLeft: 19,
  },
  headingText3: {
    marginTop: 6.840000000000003,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_mid,
  },
  bottomLineIcon3: {
    width: 394,
    marginLeft: 16,
  },
  maskGroup286: {
    width: 425,
    height: 249,
    marginTop: 225.84,
    display: "none",
  },
  search3: {
    flex: 1,
    width: "100%",
    paddingTop: Padding.p_8xs,
    paddingRight: Padding.p_8xs,
    backgroundColor: Color.colorWhite,
  },
});

export default Search3;
