import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native"; // Import Image from 'react-native'
import { Data } from "../Data/data";
import LineImg from "../../assets/category-icons/line.png";
import LeftChevronImg from "../../assets/category-icons/left-chevron.png";
import RightChevronImg from "../../assets/category-icons/right-chevron.png";
import { moderateScale } from "react-native-size-matters";

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.heaadText}>Categories</Text>
        <TouchableOpacity
          onPressOut={() => navigation.navigate("NavigationTab")}
        >
          <Image source={LeftChevronImg} style={styles.leftArrowImg} />
        </TouchableOpacity>
      </View>
      <ScrollView vertical={true} style={styles.mainContainer}>
        {Data.categories.map(
          (
            item,
            index // Use parentheses to return JSX inside the map function
          ) => (
            <>
              <View style={styles.viewBox}>
                <View key={index} style={styles.imageContainer}>
                  <Image
                    source={item.image.url} // Use 'source' instead of 'src' for Image component
                    style={{
                      width: item.image.width,
                      height: item.image.height,
                      alignSelf: "center",
                      justifyContent: "center",
                    }}
                  />
                </View>
                <View style={styles.otherContent}>
                  <Text style={styles.imgText}>{item.name}</Text>
                </View>
                <Image
                    source={RightChevronImg}
                    style={styles.rightarrowImg}
                  />
              </View>
            </>
          )
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  mainContainer: {
    flexDirection: "column",
    paddingHorizontal: moderateScale(10),
  },
  leftArrowImg: {
    width: moderateScale(6.6),
    height: moderateScale(13.2),
    marginLeft: moderateScale(14.7),
    marginTop: moderateScale(-10),
  },
  heaadText: {
    fontSize: 22,
    fontFamily: "Lato_Bold",
    textAlign: "center",
  },
  topContent: {
    marginTop: moderateScale(66.83),
    marginBottom: moderateScale(20),
  },
  viewBox: {
    paddingHorizontal: moderateScale(10),
    height: moderateScale(67),
    borderBottomColor: "#E3E1E1",
    borderBottomWidth: 0.5,
    flexDirection: "row",
  },
  imageContainer: {
    width: moderateScale(60),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  otherContent: {
    flex: 1,
    marginLeft: moderateScale(20),
    flexDirection: "row",
    width: "100%",
  },
  rightarrowImg: {
    alignSelf: "center",
    width: moderateScale(5.02),
    height: moderateScale(10.63),
  },
  imgText: {
    textAlign: "left",
    alignSelf: "center",
    fontSize: 17,
    fontFamily: "Source_Sans3_Regular",
  },
});

export default CategoriesScreen;
