import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { RadioButton } from "react-native-paper";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";

const RegistrationScreen = () => {
  const [spisokValue, setSpisokValue] = useState("Физическое лицо");
  const navigation = useNavigation();

  return (
    <View style={[styles.registrationScreen, styles.iconLayout]}>
      <View style={styles.regForm}>
        <Text style={styles.regText}>Регистрация</Text>
      </View>
      <View
        style={[styles.spisok, styles.spisokFlexBox]}
        value={spisokValue}
        onValueChange={setSpisokValue}
      >
        <RadioButton.Group value={spisokValue} onValueChange={setSpisokValue}>
          <View>
            <View style={styles.view1}>
              <RadioButton
                color="#6750a4"
                uncheckedColor="#49454f"
                value="Физическое лицо"
              />
              <Text>Физическое лицо</Text>
            </View>
            <View style={styles.view1}>
              <RadioButton
                color="#6750a4"
                uncheckedColor="#49454f"
                value="Юридическое лицо"
              />
              <Text>Юридическое лицо</Text>
            </View>
            <View style={styles.view1}>
              <RadioButton
                color="#6750a4"
                uncheckedColor="#49454f"
                value="Инд.предприниматель"
              />
              <Text>Инд.предприниматель</Text>
            </View>
          </View>
        </RadioButton.Group>
      </View>
      <View style={[styles.agreeForm, styles.spisokFlexBox]}>
        <View style={[styles.kvadrat, styles.nameBorder]} />
        <Text style={[styles.agreeText, styles.textTypo]}>
          <Text style={styles.text}>{`Даю согласие ПАО «Камчатскэнерго» на
обработку моих персональных данных на
условиях и для целей, определенных
политикой обработки`}</Text>
          <Text style={styles.text1}>{` персональных
данных ПАО «Камчатскэнерго»`}</Text>
        </Text>
      </View>
      <View style={[styles.nameForm, styles.formPosition]}>
        <TextInput
          style={[styles.name, styles.nameBorder]}
          placeholder="Ваше имя"
        />
      </View>
      <View style={[styles.emailForm, styles.formPosition]}>
        <TextInput
          style={[styles.name, styles.nameBorder]}
          placeholder="Ваш Email"
        />
      </View>
      <View style={[styles.zaregForm, styles.zaregFormFlexBox]}>
        <Text style={[styles.zaregText, styles.textTypo]}>
          Зарегистрироваться
        </Text>
      </View>
      <View style={[styles.loverMenu, styles.zaregFormFlexBox]}>
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
          style={[styles.mdicalculator, styles.zaregFormFlexBox]}
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
  spisokText: {},
  view: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  spisokFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  nameBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    fontFamily: FontFamily.mulishRegular,
    textAlign: "left",
  },
  formPosition: {
    left: 14,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  zaregFormFlexBox: {
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
  regText: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.mulishBold,
    textAlign: "left",
    color: Color.colorBlack,
  },
  regForm: {
    top: 85,
    left: 134,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  view1: {
    alignItems: "center",
    flexDirection: "row",
  },
  spisok: {
    top: 128,
    left: 25,
    width: 240,
    flexWrap: "wrap",
    paddingRight: Padding.p_8xs,
  },
  kvadrat: {
    borderColor: Color.colorGray_200,
    width: 22,
    height: 21,
  },
  text: {
    color: Color.colorBlack,
  },
  text1: {
    color: Color.colorCornflowerblue,
  },
  agreeText: {
    fontSize: FontSize.size_xs,
    width: 272,
    height: 119,
    marginLeft: 16,
  },
  agreeForm: {
    top: 470,
    left: 59,
  },
  name: {
    borderRadius: Border.br_5xs,
    borderColor: Color.colorRoyalblue,
    width: 344,
    height: 40,
  },
  nameForm: {
    top: 248,
  },
  emailForm: {
    top: 313,
  },
  zaregText: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
  },
  zaregForm: {
    top: 566,
    left: 96,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorRoyalblue,
    width: 200,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_smi,
    position: "absolute",
    justifyContent: "center",
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
    height: 80,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_base,
    position: "absolute",
    justifyContent: "center",
  },
  registrationScreen: {
    flex: 1,
    height: 752,
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default RegistrationScreen;
