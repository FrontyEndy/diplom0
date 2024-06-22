import * as React from "react";
import { Text, StyleSheet, TextInput, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily, Padding } from "../GlobalStyles";

const CalculatorScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.calculatorScreen, styles.iconLayout]}>
      <View style={styles.typePolzovatelFormParent}>
        <View>
          <Text style={[styles.typePolzovatelText, styles.textTypo1]}>
            Тип пользователя
          </Text>
          <TextInput
            style={[styles.typePolzovatel, styles.typePolzovatelLayout]}
          />
        </View>
        <View style={styles.levelNapryzahnForm}>
          <Text style={[styles.typePolzovatelText, styles.textTypo1]}>
            Уровень напряжения
          </Text>
          <TextInput
            style={[styles.levelNapryzanh, styles.typePolzovatelLayout]}
          />
        </View>
        <View style={styles.levelNapryzahnForm}>
          <Text style={[styles.categoryNadezhnText, styles.textTypo1]}>
            Категория надежности
          </Text>
          <TextInput
            style={[styles.levelNapryzanh, styles.typePolzovatelLayout]}
          />
        </View>
        <View style={styles.levelNapryzahnForm}>
          <Text style={[styles.terretoryPlaceText, styles.textTypo1]}>
            Территориальное расположение
          </Text>
          <TextInput
            style={[styles.terretoryPlace, styles.typePolzovatelLayout]}
          />
        </View>
      </View>
      <View style={styles.maxMoshFormParent}>
        <View style={styles.formFlexBox}>
          <Text style={[styles.maxMoshText, styles.textTypo]}>
            Максимальная присоединяемая мощность
          </Text>
          <View style={styles.kvt}>
            <Text style={[styles.kvtText, styles.textTypo1]}>кВт</Text>
            <View style={styles.line2} />
          </View>
        </View>
        <View style={[styles.rassotaynieForm, styles.formFlexBox]}>
          <Text style={[styles.rasstoyzanieText, styles.textTypo]}>
            Расстояние до ближайших электросетевых объектов
          </Text>
          <View style={styles.kvt}>
            <Text style={[styles.kvtText, styles.textTypo1]}>кВт</Text>
            <View style={styles.line2} />
          </View>
        </View>
      </View>
      <View style={[styles.rassotaynieForm, styles.formFlexBox]}>
        <View style={styles.kvadrat} />
        <Text style={[styles.lgotCategoryText, styles.textTypo]}>
          Льготная категория
        </Text>
      </View>
      <View style={[styles.calcualteBtn, styles.loverMenuFlexBox]}>
        <Text style={styles.calculateText}>Посчитать</Text>
      </View>
      <View style={[styles.loverMenu, styles.loverMenuFlexBox]}>
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
          style={[styles.mdicalculator, styles.loverMenuFlexBox]}
          onPress={() => navigation.navigate("CalculatorScreen")}
        >
          <Image
            style={styles.calculatorIcon}
            contentFit="cover"
            source={require("../assets/calculator-icon3.png")}
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
    overflow: "hidden",
    width: "100%",
  },
  textTypo1: {
    textAlign: "left",
    color: Color.colorGray_300,
    fontSize: FontSize.size_xs,
  },
  typePolzovatelLayout: {
    width: 344,
    borderColor: Color.colorRoyalblue,
    borderRadius: Border.br_5xs,
    height: 40,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_xs,
  },
  formFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  loverMenuFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  akarIconshomeFlexBox: {
    padding: Padding.p_7xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  typePolzovatelText: {
    width: 128,
    fontFamily: FontFamily.mulishRegular,
  },
  typePolzovatel: {
    marginTop: 2,
    height: 40,
  },
  levelNapryzanh: {
    marginTop: 5,
    height: 40,
  },
  levelNapryzahnForm: {
    marginTop: 23,
  },
  categoryNadezhnText: {
    width: 152,
    fontFamily: FontFamily.mulishRegular,
  },
  terretoryPlaceText: {
    width: 199,
    fontFamily: FontFamily.mulishRegular,
  },
  terretoryPlace: {
    marginTop: 11,
    height: 40,
  },
  typePolzovatelFormParent: {
    alignSelf: "stretch",
    height: 384,
    paddingTop: 50,
    paddingBottom: 85,
    alignItems: "center",
  },
  maxMoshText: {
    width: 127,
  },
  kvtText: {
    fontFamily: FontFamily.interRegular,
  },
  line2: {
    borderColor: Color.colorGray_300,
    borderTopWidth: 1,
    width: 57,
    height: 1,
    marginTop: 8,
    borderStyle: "solid",
  },
  kvt: {
    marginLeft: 88,
    alignItems: "center",
  },
  rasstoyzanieText: {
    width: 128,
  },
  rassotaynieForm: {
    marginTop: 23,
  },
  maxMoshFormParent: {
    marginTop: 23,
    alignItems: "center",
  },
  kvadrat: {
    borderColor: Color.colorGray_200,
    width: 23,
    height: 21,
    borderWidth: 1,
    borderStyle: "solid",
  },
  lgotCategoryText: {
    width: 200,
    marginLeft: 16,
  },
  calculateText: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.mulishRegular,
  },
  calcualteBtn: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorRoyalblue,
    width: 343,
    paddingHorizontal: 130,
    paddingVertical: Padding.p_2xs,
    marginTop: 23,
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
    backgroundColor: Color.colorLightskyblue,
    width: 392,
    height: 80,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_base,
    marginTop: 23,
  },
  calculatorScreen: {
    flex: 1,
    height: 752,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default CalculatorScreen;
