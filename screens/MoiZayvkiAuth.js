import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const MoiZayvkiAuth = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.moiZayvkiAuth}>
      <Text style={[styles.text, styles.textFlexBox]}>{`Мои заявки `}</Text>
      <View style={styles.frameParent}>
        <View style={[styles.wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.text1, styles.textFlexBox]}>Номер</Text>
        </View>
        <View style={[styles.container, styles.frameFlexBox]}>
          <Text style={[styles.text1, styles.textFlexBox]}>Дата</Text>
        </View>
        <View style={[styles.frame, styles.frameFlexBox]}>
          <Text style={[styles.text1, styles.textFlexBox]}>Вид заявки</Text>
        </View>
        <View style={[styles.frameView, styles.frameFlexBox]}>
          <Text style={[styles.text1, styles.textFlexBox]}>
            Адрес подключения
          </Text>
        </View>
      </View>
      <View style={[styles.buttons, styles.wrapperFlexBox]}>
        <View style={[styles.electrocetiBtn, styles.btnFlexBox]}>
          <Text style={[styles.electrocetiText, styles.textTypo]}>
            Электросети
          </Text>
        </View>
        <View style={[styles.teplocetiBtn, styles.btnFlexBox]}>
          <Text style={[styles.teplocetiText, styles.textTypo]}>Теплосети</Text>
        </View>
      </View>
      <Pressable
        style={[styles.arrowIconWrapper, styles.wrapperFlexBox]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow-btn.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameFlexBox: {
    marginLeft: 22,
    alignItems: "center",
    flexDirection: "row",
  },
  btnFlexBox: {
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.colorRoyalblue,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_base,
  },
  text: {
    top: 93,
    left: 139,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 120,
    height: 24,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
  },
  wrapper: {
    justifyContent: "center",
    width: 40,
  },
  container: {
    width: 29,
    justifyContent: "center",
  },
  frame: {
    width: 66,
    justifyContent: "center",
  },
  frameView: {
    width: 142,
    justifyContent: "flex-end",
  },
  frameParent: {
    top: 292,
    height: 14,
    flexDirection: "row",
    width: 344,
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
    marginLeft: 40,
  },
  buttons: {
    top: 148,
    height: 40,
    justifyContent: "center",
    width: 344,
    left: 24,
    alignItems: "center",
    position: "absolute",
  },
  arrowIcon: {
    height: 40,
    width: 40,
  },
  arrowIconWrapper: {
    top: 40,
    left: 25,
    width: 342,
    position: "absolute",
  },
  moiZayvkiAuth: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 1512,
    overflow: "hidden",
    flex: 1,
  },
});

export default MoiZayvkiAuth;
