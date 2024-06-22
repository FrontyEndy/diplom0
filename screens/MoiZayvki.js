import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const MoiZayvki = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.moiZayvki}>
      <View style={[styles.loverMenu, styles.loverMenuFlexBox]}>
        <Pressable
          style={[styles.akarIconshome, styles.akarIconshomeFlexBox]}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/home-icon2.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.mdicalculator, styles.eplistIconSpaceBlock]}
          onPress={() => navigation.navigate("CalculatorScreen")}
        >
          <Image
            style={styles.calculatorIcon}
            contentFit="cover"
            source={require("../assets/calculator-icon.png")}
          />
        </Pressable>
        <Image
          style={[styles.eplistIcon, styles.eplistIconSpaceBlock]}
          contentFit="cover"
          source={require("../assets/eplist2.png")}
        />
        <Pressable
          style={[styles.iconamoonprofileFill, styles.eplistIconSpaceBlock]}
          onPress={() => navigation.navigate("AutorizationScreen")}
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/profile-icon.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.vashaZayvkaPeredanaContainer}
        onPress={() => navigation.navigate("AutorizationScreen")}
      >
        <Text style={styles.text}>Авторизируйтесь, чтобы увидеть заявки</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loverMenuFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  akarIconshomeFlexBox: {
    padding: Padding.p_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  eplistIconSpaceBlock: {
    marginLeft: 50,
    overflow: "hidden",
  },
  homeIcon: {
    width: 36,
    height: 36,
  },
  akarIconshome: {
    overflow: "hidden",
  },
  calculatorIcon: {
    width: 28,
    height: 40,
  },
  mdicalculator: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  eplistIcon: {
    width: 48,
    height: 48,
  },
  iconamoonprofileFill: {
    padding: Padding.p_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  loverMenu: {
    right: 0,
    bottom: 0,
    backgroundColor: Color.colorLightskyblue,
    width: 392,
    height: 80,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_base,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    marginTop: -106,
    marginLeft: -100,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.mulishRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 200,
    height: 42,
  },
  vashaZayvkaPeredanaContainer: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  moiZayvki: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 752,
    overflow: "hidden",
  },
});

export default MoiZayvki;
