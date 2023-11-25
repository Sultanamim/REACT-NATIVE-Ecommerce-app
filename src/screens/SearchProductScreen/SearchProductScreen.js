//import liraries
import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
  Keyboard,
} from "react-native";
import { Image } from "expo-image";
import BackArrow from "../../assets/category-icons/left-chevron.svg";
import LineImg from "../../assets/line.png";
import CloseImg from "../../assets/close.png";
import SearchIcon from "../../assets/search.png";
import Data from "../Data/data";
import { moderateScale } from "react-native-size-matters";
import AsyncStorage from "@react-native-async-storage/async-storage";
// create a component
const SearchProductScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [activeTab, setActiveTab] = useState("Recent");
  const [recentSearches, setRecentSearches] = useState([]);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  // Function to filter results based on search query
  const filterResults = (query) => {
    const results = [];

    if (Data.categories && Data.categories.length) {
      Data.categories.forEach((category) => {
        if (category.name.toLowerCase().includes(query.toLowerCase())) {
          results.push(category);
        }

        if (category.subCategories) {
          category.subCategories.forEach((subCategory) => {
            if (subCategory.title.toLowerCase().includes(query.toLowerCase())) {
              results.push(subCategory);
            }

            if (subCategory.inCategories) {
              subCategory.inCategories.forEach((inCategory) => {
                if (
                  inCategory.title.toLowerCase().includes(query.toLowerCase())
                ) {
                  results.push(inCategory);
                }

                if (inCategory.product) {
                  inCategory.product.forEach((product) => {
                    if (
                      product.title.toLowerCase().includes(query.toLowerCase())
                    ) {
                      results.push(product);
                    }
                  });
                }
              });
            }

            if (subCategory.product) {
              subCategory.product.forEach((product) => {
                if (product.title.toLowerCase().includes(query.toLowerCase())) {
                  results.push(product);
                }
              });
            }
          });
        }
      });
    }

    setFilteredResults(results);
    setSearchValue(query);
    // Update recent searches
    if (query !== "" && !recentSearches.includes(query)) {
      // Add the new search query to recent searches
      setRecentSearches((prevSearches) => [...prevSearches]);
    }
  };

  // Function to display 4 random titles
  // const getRandomTitles = () => {
  //   const randomTitles = [];
  //   for (let i = 0; i < 4; i++) {
  //     const randomCategory = Data.categories[Math.floor(Math.random() * Data.categories.length)];
  //     randomTitles.push(randomCategory.name);
  //   }
  //   return randomTitles;
  // };
  // Function to save a title when a filter item is clicked
  const saveTitle = async (title) => {
    if (!recentSearches.includes(title)) {
      Alert.alert(
        "Saved",
        `Title "${title}" has been saved to recent searches.`
      );
      const updatedRecentSearches = [title, ...recentSearches];
      setRecentSearches(updatedRecentSearches);

      // Save the updated recentSearches to AsyncStorage
      try {
        await AsyncStorage.setItem(
          "recentSearches",
          JSON.stringify(updatedRecentSearches)
        );
      } catch (error) {
        console.error("Error saving recent searches to AsyncStorage:", error);
      }
    } else {
      Alert.alert(
        "Already Saved",
        `Title "${title}" is already in recent searches.`
      );
    }
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  // Function to clear the search and reset the UI
  const clearAllRecentSearches = async () => {
    // Clear the recent searches in the state
    setRecentSearches([]);

    // Remove the recent searches data from AsyncStorage
    try {
      await AsyncStorage.removeItem("recentSearches");
    } catch (error) {
      console.error("Error clearing recent searches in AsyncStorage:", error);
    }
  };

  //console.log(recentSearches);

  useEffect(() => {
    const loadRecentSearches = async () => {
      try {
        const savedRecentSearches = await AsyncStorage.getItem(
          "recentSearches"
        );
        if (savedRecentSearches !== null) {
          setRecentSearches(JSON.parse(savedRecentSearches));
        }
      } catch (error) {
        console.error(
          "Error loading recent searches from AsyncStorage:",
          error
        );
      }
    };

    loadRecentSearches();
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Image source={BackArrow} style={styles.backArrowImg} />
        <View style={styles.searchContainer}>
          <View style={styles.inputContainer}>
            <Image source={SearchIcon} style={styles.searchIcon} />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#464646"
              style={styles.input}
              onChangeText={(text) => filterResults(text)}
              value={searchValue}
            />
          </View>
        </View>
      </View>
      <View style={styles.middleContent}>
        <TouchableOpacity onPress={() => handleTabSwitch("Recent")}>
          <Text
            style={[styles.tabText, activeTab === "Recent" && styles.activeTab]}
          >
            Recent
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabSwitch("Saved")}>
          <Text
            style={[styles.tabText, activeTab === "Saved" && styles.activeTab]}
          >
            Saved
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flatList}>
        {searchValue !== "" && filteredResults.length > 0 ? (
          // Display filtered results with parent category names
          <FlatList
            data={filteredResults}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => saveTitle(item.title || item.name || "")} // Pass title or name
                style={{ borderBottomWidth: 0.5, borderBottomColor: "#E3E1E1" }}
              >
                <Text style={styles.smallCategoryName}>
                  {item.title || item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        ) : activeTab === "Recent" && recentSearches.length > 0 ? (
          // Display recent searches
          <FlatList
            data={recentSearches}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View
                style={{ borderBottomWidth: 0.5, borderBottomColor: "#E3E1E1" }}
              >
                <Text style={styles.smallCategoryName}>{item}</Text>
              </View>
            )}
          />
        ) : (
          // Display no results
          <Text>No results found</Text>
        )}
      </View>
      {!isKeyboardVisible && (
        <View style={styles.clearContainer}>
          <TouchableOpacity
            style={styles.clearBtn}
            onPress={clearAllRecentSearches}
          >
            <Text style={styles.clearText}>Clear all</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: moderateScale(16.95),
  },
  topContent: {
    justifyContent: "center",
  },
  searchContainer: {
    marginTop: moderateScale(-29),
    marginRight: moderateScale(9),
    height: moderateScale(43.716),
    marginLeft: moderateScale(27.71),
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    borderRadius: 15,
  },
  backArrowImg: {
    width: moderateScale(7.5),
    height: moderateScale(13.2),
    marginLeft: moderateScale(3),
    marginTop: moderateScale(80),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    width: moderateScale(14.25),
    height: moderateScale(14.25),
    marginLeft: moderateScale(22.73),
  },
  input: {
    marginLeft: moderateScale(12.7),
    fontFamily: "Source_Sans3_Regular",
    color: "#464646",
    fontSize: 17,
  },
  middleContent: {
    flexDirection: "row",
    marginTop: moderateScale(33),
    paddingHorizontal: moderateScale(65.7),
    justifyContent: "space-between",
  },
  activeTab: {
    fontSize: 17,
    fontFamily: "Lato_Bold",
    color: "#4AD295",
  },
  tabText: {
    fontSize: 15,
    fontFamily: "Lato_Bold",
    color: "#8F9496",
  },
  smallCategoryName: {
    fontSize: 17, // You can adjust the font size as needed
    fontFamily: "Source_Sans3_Regular", // Adjust the font as needed
    color: "#464646",
    paddingBottom: moderateScale(20),
    marginTop: moderateScale(15),
  },
  flatList: {
    marginTop: moderateScale(0),
  },
  clearContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: moderateScale(76),
  },
  clearBtn: {
    borderWidth: 2,
    borderColor: "#E9EAEF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: moderateScale(7),
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    elevation: 3,
  },
  clearText: {
    fontSize: 16,
    fontFamily: "Nunito_Bold",
    color: "#464646",
    paddingVertical: moderateScale(0),
    paddingHorizontal: moderateScale(48),
  },
});

//make this component available to the app
export default SearchProductScreen;
