import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const AutorizationScreenAuth = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.autorizationScreenAuth, styles.iconLayout]}>
      <Text style={[styles.regText, styles.regTextPosition]}>
        Предоставление документов
      </Text>
      <Pressable
        style={[styles.zaregForm, styles.zaregFlexBox]}
        onPress={() => navigation.navigate("ZayvkaCompletedAuth")}
      >
        <Text style={[styles.zaregText, styles.textTypo2]}>Продолжить</Text>
      </Pressable>
      <View style={[styles.parent, styles.parentPosition]}>
        <Text
          style={[styles.text, styles.textTypo1]}
        >{`План расположения энергопринимающих устройств    `}</Text>
        <View style={[styles.zaregForm1, styles.zaregFlexBox]}>
          <Text style={[styles.zaregText1, styles.textTypo1]}>Выбрать</Text>
        </View>
      </View>
      <View style={[styles.group, styles.parentPosition]}>
        <Text style={[styles.text, styles.textTypo1]}>
          Копия документа, подтверждающего право собственности на объект
          капитального строительства и земельный участок, на котором расположены
          (будут располагаться) объекты заявителя
        </Text>
        <View style={[styles.zaregForm1, styles.zaregFlexBox]}>
          <Text style={[styles.zaregText1, styles.textTypo1]}>Выбрать</Text>
        </View>
      </View>
      <View style={[styles.container, styles.parentPosition]}>
        <Text
          style={[styles.text, styles.textTypo1]}
        >{`Доверенность или иные документы, подтвердлающие полномичия представителя заявителя `}</Text>
        <View style={[styles.zaregForm1, styles.zaregFlexBox]}>
          <Text style={[styles.zaregText1, styles.textTypo1]}>Выбрать</Text>
        </View>
      </View>
      <View style={[styles.frameView, styles.parentPosition]}>
        <Text style={[styles.text, styles.textTypo1]}>Копия паспорта</Text>
        <View style={[styles.zaregForm1, styles.zaregFlexBox]}>
          <Text style={[styles.zaregText1, styles.textTypo1]}>Выбрать</Text>
        </View>
      </View>
      <View style={[styles.parent1, styles.parentPosition]}>
        <Text style={[styles.text, styles.textTypo1]}>Прочие документы</Text>
        <View style={[styles.zaregForm1, styles.zaregFlexBox]}>
          <Text style={[styles.zaregText1, styles.textTypo1]}>Выбрать</Text>
        </View>
      </View>
      <View style={[styles.autorizationScreenAuthInner, styles.parentPosition]}>
        <View style={[styles.parent2, styles.parent2FlexBox]}>
          <Text style={[styles.text5, styles.textTypo2]}>Заявитель</Text>
          <Text style={[styles.text6, styles.textTypo]}>Объект</Text>
          <Text style={[styles.text7, styles.textTypo]}>Документы</Text>
          <Text style={[styles.text6, styles.textTypo]}>Готово</Text>
        </View>
      </View>
      <View style={[styles.loverMenu, styles.parent2FlexBox]}>
        <View style={styles.akarIconshomeFlexBox}>
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/home-icon3.png")}
          />
        </View>
        <Pressable
          style={[styles.mdicalculator, styles.parent2FlexBox]}
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
    width: "100%",
    overflow: "hidden",
  },
  regTextPosition: {
    width: 200,
    left: 96,
    position: "absolute",
  },
  zaregFlexBox: {
    paddingVertical: Padding.p_smi,
    backgroundColor: Color.colorRoyalblue,
    borderRadius: Border.br_7xs,
    paddingHorizontal: Padding.p_8xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  textTypo2: {
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  parentPosition: {
    width: 344,
    left: 24,
    justifyContent: "center",
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.mulishRegular,
    textAlign: "left",
  },
  parent2FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    marginLeft: 20,
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  akarIconshomeFlexBox: {
    padding: Padding.p_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  regText: {
    top: 137,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.mulishBold,
    textAlign: "left",
    width: 200,
    color: Color.colorBlack,
    left: 96,
  },
  zaregText: {
    color: Color.colorWhite,
  },
  zaregForm: {
    top: 566,
    width: 200,
    left: 96,
    position: "absolute",
    paddingVertical: Padding.p_smi,
    backgroundColor: Color.colorRoyalblue,
    borderRadius: Border.br_7xs,
  },
  text: {
    width: 272,
    color: Color.colorBlack,
  },
  zaregText1: {
    color: Color.colorWhite,
  },
  zaregForm1: {
    width: 56,
    marginLeft: 17,
  },
  parent: {
    top: 246,
    left: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  group: {
    top: 304,
    left: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    top: 399,
    left: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  frameView: {
    top: 450,
    left: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  parent1: {
    top: 499,
    left: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  text5: {
    color: Color.colorBlack,
  },
  text6: {
    color: Color.colorBlack,
  },
  text7: {
    color: Color.colorRoyalblue,
  },
  parent2: {
    width: 332,
    height: 32,
  },
  autorizationScreenAuthInner: {
    top: 48,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke,
    borderWidth: 1,
    height: 79,
    paddingVertical: Padding.p_20xl,
    paddingHorizontal: Padding.p_8xs,
    left: 24,
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
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_base,
    position: "absolute",
    justifyContent: "center",
    overflow: "hidden",
  },
  autorizationScreenAuth: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 752,
    overflow: "hidden",
  },
});

export default AutorizationScreenAuth;
