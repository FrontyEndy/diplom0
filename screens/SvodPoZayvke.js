import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const SvodPoZayvke = () => {
  return (
    <View style={styles.svodPoZayvke}>
      <Text style={[styles.text, styles.textFlexBox]}>Свод по заявке</Text>
      <View style={[styles.frameParent, styles.containerLayout]}>
        <View style={[styles.wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.text1, styles.textFlexBox]}>Название</Text>
        </View>
        <View style={[styles.container, styles.wrapperFlexBox]}>
          <Text style={[styles.text1, styles.textFlexBox]}>
            Статус документа
          </Text>
        </View>
      </View>
      <View style={[styles.buttons, styles.wrapperFlexBox]}>
        <View style={[styles.electrocetiBtn, styles.btnFlexBox]}>
          <Text style={[styles.electrocetiText, styles.textTypo]}>
            Документы заявителя
          </Text>
        </View>
        <View style={[styles.teplocetiBtn, styles.btnFlexBox]}>
          <Text style={[styles.teplocetiText, styles.textTypo]}>
            Документы сетевой организации
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  containerLayout: {
    height: 14,
    flexDirection: "row",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnFlexBox: {
    paddingVertical: Padding.p_3xs,
    width: 275,
    backgroundColor: Color.colorRoyalblue,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
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
    width: 157,
    height: 24,
    position: "absolute",
    textAlign: "left",
    color: Color.colorBlack,
  },
  text1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
  },
  wrapper: {
    width: 56,
    flexDirection: "row",
  },
  container: {
    width: 128,
    flexDirection: "row",
    height: 14,
  },
  frameParent: {
    top: 292,
    justifyContent: "space-between",
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
    marginTop: 40,
  },
  buttons: {
    top: 183,
    height: 40,
    width: 344,
    left: 24,
    position: "absolute",
  },
  svodPoZayvke: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 1512,
    overflow: "hidden",
  },
});

export default SvodPoZayvke;
