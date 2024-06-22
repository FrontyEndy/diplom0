import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const AutorizationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.autorizationScreen, styles.iconLayout]}>
      <View style={[styles.vhodBtnParent, styles.parentPosition]}>
        <View style={[styles.vhodBtn, styles.regFlexBox]}>
          <Text style={styles.vhodText}>Вход</Text>
        </View>
        <View style={styles.notRegFormParent}>
          <View style={[styles.notRegForm, styles.regFlexBox]}>
            <Text style={styles.notRegText}>Не зарегистрированы?</Text>
          </View>
          <Pressable
            style={[styles.regForm, styles.regFlexBox]}
            onPress={() => navigation.navigate("RegistrationScreen")}
          >
            <Text style={styles.notRegText}>Регистрация</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.authFormParent, styles.parentPosition]}>
        <View style={[styles.notRegForm, styles.regFlexBox]}>
          <Text style={styles.authText}>Авторизация</Text>
        </View>
        <View style={styles.colonki}>
          <View>
            <View style={styles.emailForm}>
              <TextInput style={styles.email} placeholder="Emil" />
            </View>
            <View style={styles.passwordForm}>
              <TextInput style={styles.email} placeholder="Пароль" />
            </View>
          </View>
          <View style={[styles.fogTextForm, styles.regFlexBox]}>
            <Text style={styles.notRegText}>Забыли пароль?</Text>
          </View>
        </View>
      </View>
      <View style={[styles.loverMenu, styles.regFlexBox]}>
        <Pressable
          style={styles.akarIconshomeFlexBox}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/home-icon2.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.mdicalculator, styles.regFlexBox]}
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
            source={require("../assets/profile-icon2.png")}
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
  parentPosition: {
    alignItems: "center",
    left: 24,
    position: "absolute",
  },
  regFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  akarIconshomeFlexBox: {
    padding: Padding.p_7xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  vhodText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  vhodBtn: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorRoyalblue,
    width: 200,
    paddingHorizontal: 80,
    paddingVertical: 14,
    overflow: "hidden",
  },
  notRegText: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.mulishRegular,
    color: Color.colorDodgerblue,
    textAlign: "left",
  },
  notRegForm: {
    padding: Padding.p_3xs,
  },
  regForm: {
    marginLeft: 93,
    padding: Padding.p_3xs,
  },
  notRegFormParent: {
    marginTop: 30,
    flexDirection: "row",
  },
  vhodBtnParent: {
    top: 485,
    width: 344,
  },
  authText: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.mulishBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  email: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorRoyalblue,
    borderWidth: 1,
    height: 40,
    width: 344,
    backgroundColor: Color.colorWhite,
  },
  emailForm: {
    padding: Padding.p_3xs,
  },
  passwordForm: {
    marginTop: 6,
    padding: Padding.p_3xs,
  },
  fogTextForm: {
    marginTop: 17,
    padding: Padding.p_3xs,
  },
  colonki: {
    alignItems: "flex-end",
  },
  authFormParent: {
    top: 85,
    width: 343,
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
    right: 0,
    bottom: 0,
    backgroundColor: Color.colorLightskyblue,
    width: 392,
    height: 80,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_base,
    position: "absolute",
    justifyContent: "center",
    overflow: "hidden",
  },
  autorizationScreen: {
    flex: 1,
    height: 752,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default AutorizationScreen;
