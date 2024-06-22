import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const ProfilePolzovatelyAuth = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.profilePolzovatelyAuth, styles.iconLayout]}>
      <View style={[styles.loverMenu, styles.loverMenuFlexBox]}>
        <View style={styles.akarIconshomeFlexBox}>
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/home-icon4.png")}
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
            source={require("../assets/profile-icon4.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.mestanahozdenObjectForm, styles.passportPosition]}>
        <Text style={[styles.mestanohoxdenObjectText, styles.textTypo]}>
          Данные заявителя
        </Text>
        <TextInput
          style={[styles.region, styles.vidLayout]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.region, styles.vidLayout]}
          placeholder="Пароль"
        />
        <TextInput
          style={[styles.region, styles.vidLayout]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.region, styles.vidLayout]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.region, styles.vidLayout]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.region, styles.vidLayout]}
          placeholder="Пароль"
        />
        <TextInput
          style={[styles.region, styles.vidLayout]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.region, styles.vidLayout]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.region, styles.vidLayout]}
          placeholder="Emil"
        />
      </View>
      <View style={[styles.passportDannieForm, styles.passportPosition]}>
        <Text style={[styles.passportDannieText, styles.textTypo]}>Адрес</Text>
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Пароль"
        />
      </View>
      <View style={[styles.passportDannieForm1, styles.passportPosition]}>
        <Text style={[styles.passportDannieText, styles.textTypo]}>
          Руководство
        </Text>
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Пароль"
        />
      </View>
      <View style={[styles.passportDannieForm2, styles.passportPosition]}>
        <Text style={[styles.passportDannieText, styles.textTypo]}>
          Паспортные даннные
        </Text>
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Пароль"
        />
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Пароль"
        />
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Пароль"
        />
      </View>
      <TextInput
        style={[styles.vidDocument3, styles.vidLayout]}
        placeholder="Emil"
      />
      <View style={[styles.passportDannieForm3, styles.passportPosition]}>
        <Text style={[styles.passportDannieText, styles.textTypo]}>
          Контактные данные
        </Text>
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Пароль"
        />
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Пароль"
        />
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Пароль"
        />
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.vidDocument, styles.vidLayout]}
          placeholder="Пароль"
        />
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
  passportPosition: {
    left: 24,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  vidLayout: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    width: 344,
    height: 40,
    backgroundColor: Color.colorWhite,
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
  mestanohoxdenObjectText: {
    fontSize: FontSize.size_5xl,
    width: 344,
  },
  region: {
    marginTop: 28,
  },
  mestanahozdenObjectForm: {
    top: 110,
    width: 344,
  },
  passportDannieText: {
    fontSize: FontSize.size_xl,
  },
  vidDocument: {
    marginTop: 29,
  },
  passportDannieForm: {
    top: 826,
    width: 344,
  },
  passportDannieForm1: {
    top: 1129,
    width: 344,
  },
  passportDannieForm2: {
    top: 2120,
    width: 344,
  },
  vidDocument3: {
    top: 1676,
    left: 24,
    position: "absolute",
  },
  passportDannieForm3: {
    top: 1416,
    width: 344,
  },
  profilePolzovatelyAuth: {
    flex: 1,
    height: 2713,
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default ProfilePolzovatelyAuth;
