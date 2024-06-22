import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const HelloScreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.helloScreen}
      onPress={() => navigation.navigate("HomeScreen")}
    >
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  logoIcon: {
    position: "absolute",
    marginTop: -26,
    marginLeft: -116,
    top: "50%",
    left: "50%",
    width: 232,
    height: 96,
  },
  helloScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 752,
    overflow: "hidden",
  },
});

export default HelloScreen;
