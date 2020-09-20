import React from "react";

import { Text, StyleSheet, View, Image } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate("Home");
  };

  return (
    <TouchableNativeFeedback onPress={handleOnPress}>
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} />
        <Text style={styles.textLogo1}>Big Game</Text>
        <Text style={styles.textLogo2}>Survey</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    height: 90,
    backgroundColor: "#37474F",
    flexDirection: "row",
    justifyContent: "center",
  },
  textLogo1: {
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Play_700Bold",
    color: "#ED7947",
    marginLeft: 10,
    marginRight: 5,
  },
  textLogo2: {
    fontWeight: "bold",
    fontFamily: "Play_700Bold",
    fontSize: 18,
    color: "#FFF",
  },
  tinyLogo: {
    width: 25,
    height: 25,
  },
});

export default Header;
