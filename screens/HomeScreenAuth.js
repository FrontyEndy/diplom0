import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HomeScreenAuth = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.homeScreenAuth, styles.iconLayout]}>
      <View style={[styles.loverMenu, styles.loverMenuFlexBox]}>
        <View style={styles.akarIconshomeFlexBox}>
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/home-icon1.png")}
          />
        </View>
        <Pressable
          style={[styles.mdicalculator, styles.loverMenuFlexBox]}
          onPress={() => navigation.navigate("CalculatorScreen")}
        >
          <Image
            style={styles.calculatorIcon}
            contentFit="cover"
            source={require("../assets/calculator-icon1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.eplist}
          onPress={() => navigation.navigate("MoiZayvkiAuth")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/eplist1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconamoonprofileFill, styles.akarIconshomeFlexBox]}
          onPress={() => navigation.navigate("ProfilePolzovatelyAuth")}
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/profile-icon1.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.menuIcon, styles.buttonsPosition]}
        onPress={() => navigation.navigate("MenuScreen")}
      >
        <Image
          style={styles.menuPicIcon}
          contentFit="cover"
          source={require("../assets/menu-pic.png")}
        />
      </Pressable>
      <View style={styles.text}>
        <Text style={styles.podachaText}>
          Подача заявки на технологическое присоединение
        </Text>
      </View>
      <View style={[styles.buttons, styles.buttonsPosition]}>
        <Pressable
          style={[styles.electrocetiBtn, styles.btnFlexBox]}
          onPress={() => navigation.navigate("ZayvatilEkranAuth")}
        >
          <Text style={[styles.electrocetiText, styles.textTypo]}>
            Электросети
          </Text>
        </Pressable>
        <View style={[styles.teplocetiBtn, styles.btnFlexBox]}>
          <Text style={[styles.teplocetiText, styles.textTypo]}>Теплосети</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
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
  buttonsPosition: {
    left: 24,
    position: "absolute",
  },
  btnFlexBox: {
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.colorRoyalblue,
    borderRadius: Border.br_7xs,
    width: 344,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_xl,
    textAlign: "center",
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
  },
  menuPicIcon: {
    width: 40,
    height: 40,
  },
  menuIcon: {
    top: 49,
    width: 40,
    flexDirection: "row",
    left: 24,
  },
  podachaText: {
    fontSize: FontSize.size_5xl,
    letterSpacing: 0.1,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.mulishBold,
    color: Color.colorBlack,
    display: "flex",
    textAlign: "center",
    width: 344,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    top: 180,
    padding: Padding.p_3xs,
    width: 344,
    left: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  electrocetiText: {
    color: Color.colorWhite,
  },
  electrocetiBtn: {
    paddingHorizontal: Padding.p_91xl,
  },
  teplocetiText: {
    color: Color.colorGray_100,
  },
  teplocetiBtn: {
    paddingHorizontal: Padding.p_103xl,
    marginTop: 35,
  },
  buttons: {
    top: 387,
  },
  homeScreenAuth: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 752,
  },
});

export default HomeScreenAuth;
