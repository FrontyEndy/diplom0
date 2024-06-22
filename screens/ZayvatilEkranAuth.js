import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const ZayvatilEkranAuth = () => {
  const [viboraOpen, setViboraOpen] = useState(false);
  const [viboraValue, setViboraValue] = useState(
    "необходимостью подключения нового объекта"
  );
  const [viboraItems, setViboraItems] = useState([
    {
      value: "необходимостью подключения нового объекта",
      label: "необходимостью подключения нового объекта",
    },
    {
      value: "увеличением объема максимальной мощности",
      label: "увеличением объема максимальной мощности",
    },
    {
      value: "изменением категории надежности",
      label: "изменением категории надежности",
    },
    { value: "временным подключением", label: "временным подключением" },
  ]);
  const navigation = useNavigation();

  return (
    <View style={[styles.zayvatilEkranAuth, styles.iconLayout]}>
      <Text style={[styles.vSvaziS, styles.vSvaziSTypo]}>В связи с:</Text>
      <View
        style={[styles.parametriZayvkiTextWrapper, styles.zaregFormFlexBox]}
      >
        <Text style={[styles.parametriZayvkiText, styles.vSvaziSTypo]}>
          Параметры заявки
        </Text>
      </View>
      <View style={[styles.zayvatilEkranAuthInner, styles.zaregFormSpaceBlock]}>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>Заявитель</Text>
          <Text style={[styles.text1, styles.textTypo]}>Объект</Text>
          <Text style={[styles.text1, styles.textTypo]}>Документы</Text>
          <Text style={[styles.text1, styles.textTypo]}>Готово</Text>
        </View>
      </View>
      <Pressable
        style={[styles.zaregForm, styles.zaregFormSpaceBlock]}
        onPress={() => navigation.navigate("PodachaZayvkiNaTehnologisko1")}
      >
        <Text style={[styles.zaregText, styles.textTypo]}>Продолжить</Text>
      </Pressable>
      <View style={styles.vibora}>
        <DropDownPicker
          style={[styles.dropdownpicker, styles.dropdownpickerBorder]}
          open={viboraOpen}
          setOpen={setViboraOpen}
          value={viboraValue}
          setValue={setViboraValue}
          items={viboraItems}
          dropDownContainerStyle={styles.viboradropDownContainer}
        />
      </View>
      <View style={[styles.loverMenu, styles.parentFlexBox]}>
        <View style={styles.akarIconshomeFlexBox}>
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/home-icon3.png")}
          />
        </View>
        <Pressable
          style={[styles.mdicalculator, styles.parentFlexBox]}
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
          onPress={() => navigation.navigate("AutorizationScreen")}
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
  viboradropDownContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#e5e5e5",
    borderWidth: 1,
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  vSvaziSTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  zaregFormFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  zaregFormSpaceBlock: {
    paddingHorizontal: Padding.p_8xs,
    justifyContent: "center",
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  dropdownpickerBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  akarIconshomeFlexBox: {
    padding: Padding.p_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  vSvaziS: {
    top: 275,
    width: 343,
    left: 24,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  parametriZayvkiText: {
    width: 184,
  },
  parametriZayvkiTextWrapper: {
    top: 207,
    width: 344,
    flexDirection: "row",
    left: 24,
    position: "absolute",
  },
  text: {
    color: Color.colorRoyalblue,
  },
  text1: {
    marginLeft: 20,
    color: Color.colorBlack,
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_base,
  },
  parent: {
    width: 332,
    height: 32,
  },
  zayvatilEkranAuthInner: {
    top: 25,
    borderColor: Color.colorWhitesmoke,
    height: 79,
    paddingVertical: Padding.p_20xl,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_8xs,
    width: 344,
    left: 24,
  },
  zaregText: {
    color: Color.colorWhite,
  },
  zaregForm: {
    top: 474,
    left: 95,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorRoyalblue,
    width: 200,
    paddingVertical: Padding.p_smi,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  dropdownpicker: {
    borderColor: Color.colorGainsboro,
    backgroundColor: Color.colorWhite,
  },
  vibora: {
    top: 328,
    left: 23,
    height: 40,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    width: 344,
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
  zayvatilEkranAuth: {
    flex: 1,
    height: 752,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default ZayvatilEkranAuth;
