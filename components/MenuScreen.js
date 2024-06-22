import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const MenuScreen = ({ state, navigation }) => {
  const [drawerItemsNormal] = useState([]);
  const [drawerItemsActive] = useState([]);
  const stateIndex = !state ? 0 : state.index;

  return (
    <View style={styles.menuScreen}>
      <Pressable style={styles.arrowBtn} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-btn.png")}
        />
      </Pressable>
      <Text style={[styles.electrocetiText, styles.textTypo]}>Электросети</Text>
      <Text style={[styles.teplocetiText, styles.textTypo]}>Теплосети</Text>
      <Text style={[styles.gidText, styles.textTypo]}>ГИД</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_xl,
    left: 24,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  arrowBtn: {
    top: 40,
    width: 40,
    height: 40,
    left: 24,
    position: "absolute",
  },
  electrocetiText: {
    top: 143,
  },
  teplocetiText: {
    top: 202,
  },
  gidText: {
    top: 261,
  },
  menuScreen: {
    backgroundColor: Color.colorWhite,
    width: 392,
    height: 752,
    overflow: "hidden",
  },
});

export default MenuScreen;
