import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.homeScreen, styles.iconLayout]}>
      <Pressable
        style={styles.menuIcon}
        onPress={() => navigation.navigate("MenuScreen")}
      >
        <Image
          style={styles.menuPicIcon}
          contentFit="cover"
          source={require("../assets/menu-pic.png")}
        />
      </Pressable>
      <View style={[styles.text, styles.textFlexBox]}>
        <Text style={styles.podachaText}>
          Подача заявки на технологическое присоединение
        </Text>
      </View>
      <View style={styles.buttons}>
        <Pressable
          style={[styles.electrocetiBtn, styles.btnFlexBox]}
          onPress={() => navigation.navigate("PodachaZayvkiNaTehnologisko")}
        >
          <Text style={[styles.electrocetiText, styles.textTypo]}>
            Электросети
          </Text>
        </Pressable>
        <Pressable
          style={[styles.teplocetiBtn, styles.btnFlexBox]}
          onPress={() => navigation.navigate("PodachaZayvkiNaTehnologisko2")}
        >
          <Text style={[styles.teplocetiText, styles.textTypo]}>Теплосети</Text>
        </Pressable>
      </View>
      <View style={[styles.loverMenu, styles.textFlexBox]}>
        <View style={styles.akarIconshomeFlexBox}>
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/home-icon.png")}
          />
        </View>
        <Pressable
          style={[styles.mdicalculator, styles.textFlexBox]}
          onPress={() => navigation.navigate("CalculatorScreen")}
        >
          <Image
            style={styles.calculatorIcon}
            contentFit="cover"
            source={require("../assets/calculator-icon.png")}
          />
        </Pressable>
        <Pressable
          style={styles.eplist}
          onPress={() => navigation.navigate("MoiZayvki")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/eplist.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconamoonprofileFill, styles.akarIconshomeFlexBox]}
          onPress={() => navigation.navigate("AutorizationScreen")}
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/profile-icon.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  btnFlexBox: {
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.colorRoyalblue,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    width: 344,
    flexDirection: "row",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  akarIconshomeFlexBox: {
    padding: Padding.p_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  menuPicIcon: {
    height: 40,
    width: 40,
  },
  menuIcon: {
    top: 49,
    flexDirection: "row",
    width: 40,
    left: 24,
    position: "absolute",
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
    justifyContent: "center",
    alignItems: "center",
    width: 344,
  },
  text: {
    top: 180,
    padding: Padding.p_3xs,
    width: 344,
    justifyContent: "center",
    alignItems: "center",
    left: 24,
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
    left: 24,
    position: "absolute",
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
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
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
    top: 672,
    left: 0,
    backgroundColor: Color.colorLightskyblue,
    width: 392,
    height: 80,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_base,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  homeScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 752,
    overflow: "hidden",
  },
});

export default HomeScreen;
