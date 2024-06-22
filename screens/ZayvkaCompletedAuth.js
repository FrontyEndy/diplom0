import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, FontSize, Color } from "../GlobalStyles";

const ZayvkaCompletedAuth = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.zayvkaCompletedAuth, styles.iconLayout]}>
      <Text style={[styles.zayvkaUspeshnoSozdana, styles.zayvkaPosition]}>
        Заявка успешно создана
      </Text>
      <Text
        style={[styles.vashaZayvkaPeredanaContainer, styles.zayvkaPosition]}
      >
        <Text
          style={styles.text}
        >{`Ваша заявка передана на исполнение, вы можете следить за статусом выполнения в `}</Text>
        <Text style={styles.text1}>личном кабинете</Text>
      </Text>
      <View style={[styles.loverMenu, styles.loverMenuFlexBox]}>
        <View style={styles.akarIconshomeFlexBox}>
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/home-icon3.png")}
          />
        </View>
        <Pressable
          style={[styles.mdicalculator, styles.loverMenuFlexBox]}
          onPress={() => navigation.navigate("CalculatorScreen")}
        >
          <Image
            style={styles.calculatorIcon}
            contentFit="cover"
            source={require("../assets/calculator-icon2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.eplist}
          onPress={() => navigation.navigate("MoiZayvkiAuth")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/eplist3.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconamoonprofileFill, styles.akarIconshomeFlexBox]}
          onPress={() => navigation.navigate("ProfilePolzovatelyAuth")}
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/profile-icon3.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  zayvkaPosition: {
    textAlign: "left",
    fontFamily: FontFamily.mulishRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  loverMenuFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  akarIconshomeFlexBox: {
    padding: Padding.p_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  zayvkaUspeshnoSozdana: {
    marginTop: -103,
    marginLeft: -101,
    fontSize: FontSize.size_base,
    color: "#00ff29",
  },
  text: {
    color: Color.colorBlack,
  },
  text1: {
    color: Color.colorCornflowerblue,
  },
  vashaZayvkaPeredanaContainer: {
    marginTop: -45,
    marginLeft: -99,
    fontSize: FontSize.size_xs,
    width: 200,
    height: 85,
  },
  homeIcon: {
    width: 36,
    height: 36,
  },
  calculatorIcon: {
    width: 28,
    height: 40,
  },
  mdicalculator: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    marginLeft: 50,
  },
  icon: {
    height: "100%",
  },
  eplist: {
    width: 48,
    height: 48,
    marginLeft: 50,
  },
  iconamoonprofileFill: {
    marginLeft: 50,
  },
  loverMenu: {
    right: 0,
    bottom: 0,
    backgroundColor: Color.colorLightskyblue,
    width: 392,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_base,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  zayvkaCompletedAuth: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 752,
  },
});

export default ZayvkaCompletedAuth;
