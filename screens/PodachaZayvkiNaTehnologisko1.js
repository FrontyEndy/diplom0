import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const PodachaZayvkiNaTehnologisko1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.podachaZayvkiNaTehnologisko}>
      <Pressable
        style={styles.arrowIconWrapper}
        onPress={() => navigation.navigate("ZayvatilEkranAuth")}
      >
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow-btn.png")}
        />
      </Pressable>
      <View
        style={[styles.podachaZayvkiNaTehnologiskoInner, styles.kvadratBorder]}
      >
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo1]}>Заявитель</Text>
          <Text style={[styles.text1, styles.textTypo1]}>Объект</Text>
          <Text style={[styles.text2, styles.textTypo1]}>Документы</Text>
          <Text style={[styles.text2, styles.textTypo1]}>Готово</Text>
        </View>
      </View>
      <Text style={styles.podachaZayvkiText}>
        Подача заявки на технологическое присоединение
      </Text>
      <View style={styles.mestanahozdenObjectForm}>
        <Text style={[styles.mestanohoxdenObjectText, styles.dannieTypo]}>
          Местонахождение объекта присоединения
        </Text>
        <TextInput
          style={[styles.region, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.region, styles.textBorder]}
          placeholder="Пароль"
        />
        <TextInput
          style={[styles.region, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.region, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.region, styles.textBorder]}
          placeholder="Пароль"
        />
        <TextInput
          style={[styles.region, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.region, styles.textBorder]}
          placeholder="Emil"
        />
      </View>
      <View style={styles.mestanahozdenObjectForm}>
        <Text style={[styles.passportDannieText, styles.dannieTypo]}>
          Паспортные данные
        </Text>
        <TextInput
          style={[styles.vidDocument, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.vidDocument, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.vidDocument, styles.textBorder]}
          placeholder="Пароль"
        />
        <TextInput
          style={[styles.vidDocument, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.vidDocument, styles.textBorder]}
          placeholder="Emil"
        />
      </View>
      <View style={styles.tochkiPodkluchenizForm}>
        <Text style={[styles.mestanohoxdenObjectText, styles.dannieTypo]}>
          Точки подключения и данные энергопринимающих устройств
        </Text>
        <View style={styles.etapStroitelstva}>
          <Text style={[styles.etapStroit, styles.katTypo]}>
            Точки подключения (ВРУ,ТП,ВЛ,щит...)
          </Text>
          <TextInput
            style={[styles.etapStroitTextInput, styles.textBorder]}
            placeholder="Emil"
          />
        </View>
        <View style={styles.maxMosh20}>
          <View style={styles.uKvForm}>
            <Text style={[styles.uKv, styles.katTypo]}>U (кВ)</Text>
            <TextInput
              style={[styles.uKvTextInput, styles.textBorder]}
              placeholder="Emil"
            />
          </View>
          <View style={styles.formSpaceBlock}>
            <Text style={[styles.categoryText, styles.katTypo]}>Категория</Text>
            <TextInput
              style={[styles.uKvTextInput, styles.textBorder]}
              placeholder="Emil"
            />
          </View>
          <View style={[styles.moshForm, styles.formSpaceBlock]}>
            <Text style={[styles.moshKvt, styles.katTypo]}>Мощность(кВт)</Text>
            <TextInput
              style={[styles.moshInputForm, styles.textBorder]}
              placeholder="Emil"
            />
          </View>
        </View>
        <View style={[styles.itogoMochForm, styles.textBorder]}>
          <Text style={[styles.itogoMochText, styles.textTypo]}>
            Итого подключаемая мощность:
          </Text>
          <Text style={[styles.catText, styles.textTypo]}>I категория:</Text>
          <Text style={[styles.catText, styles.textTypo]}>II категория:</Text>
          <Text style={[styles.catText, styles.textTypo]}>III категория:</Text>
        </View>
        <View style={styles.addStrokyForm}>
          <Text style={[styles.addStrokyText, styles.textTypo]}>
            Добавить строку
          </Text>
        </View>
      </View>
      <View style={styles.srokiProektirovForm}>
        <Text style={[styles.mestanohoxdenObjectText, styles.dannieTypo]}>
          Сроки проектирования и поэтапного введения в эксплутацию объекта
        </Text>
        <View style={styles.etapStroitelstva1}>
          <Text
            style={[styles.etapStroit1, styles.textTypo]}
          >{`Этап строительства `}</Text>
          <TextInput
            style={[styles.etapStroitTextInput1, styles.textBorder]}
            placeholder="Emil"
          />
        </View>
        <View style={styles.maxMosh20}>
          <Text style={[styles.maxMoshText, styles.textTypo]}>
            Максимальная мощность
          </Text>
          <View style={styles.allForms}>
            <View style={styles.uKvForm}>
              <Text style={[styles.uKv, styles.katTypo]}>1 кат.</Text>
              <TextInput
                style={[styles.uKvTextInput, styles.textBorder]}
                placeholder="Emil"
              />
            </View>
            <View style={styles.katSpaceBlock}>
              <Text style={[styles.katText1, styles.katTypo]}>2 кат.</Text>
              <TextInput
                style={[styles.uKvTextInput, styles.textBorder]}
                placeholder="Emil"
              />
            </View>
            <View style={[styles.katForm2, styles.katSpaceBlock]}>
              <Text style={[styles.katText2, styles.katTypo]}>3 кат.</Text>
              <TextInput
                style={[styles.uKvTextInput, styles.textBorder]}
                placeholder="Emil"
              />
            </View>
          </View>
        </View>
        <View style={styles.sroki}>
          <View style={styles.srokiForm}>
            <Text style={[styles.srokiText, styles.textTypo]}>Сроки</Text>
          </View>
          <View style={[styles.proektirovanieForm, styles.katSpaceBlock]}>
            <Text style={[styles.proektirovaniiText, styles.katTypo]}>
              проектирования
            </Text>
            <TextInput
              style={[styles.proektForma, styles.formaLayout]}
              placeholder="Emil"
            />
          </View>
          <View style={[styles.proektirovanieForm, styles.katSpaceBlock]}>
            <Text style={[styles.katText1, styles.katTypo]}>ввода</Text>
            <TextInput
              style={[styles.vvodaForma, styles.formaLayout]}
              placeholder="Emil"
            />
          </View>
        </View>
        <View style={styles.addStrokyForm}>
          <Text style={[styles.addStrokyText, styles.textTypo]}>
            Добавить этап
          </Text>
        </View>
      </View>
      <View style={styles.dannieObjectPrisodForm}>
        <Text style={[styles.dannieObektaPrisod, styles.dannieTypo]}>
          Данные объекта присоединения
        </Text>
        <TextInput
          style={[styles.zapracgivaemayaMoshVsegoKvt, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.zapracgivaemayaMoshVsegoKvt, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.zapracgivaemayaMoshVsegoKvt, styles.textBorder]}
          placeholder="Пароль"
        />
        <TextInput
          style={[styles.zapracgivaemayaMoshVsegoKvt, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.zapracgivaemayaMoshVsegoKvt, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.zapracgivaemayaMoshVsegoKvt, styles.textBorder]}
          placeholder="Emil"
        />
        <Text style={[styles.priOsychText, styles.textTypo]}>
          При осуществлении технологического присоединения к объектам
          электросетевого хозяйства энергопринимающих устройств заявителей,
          ограничение режима потребления электрической энергии (мощности)
          которых может привести к экономическим, экологическим, социальным
          последствиям.
        </Text>
        <TextInput
          style={[styles.zapracgivaemayaMoshVsegoKvt, styles.textBorder]}
          placeholder="Пароль"
        />
        <TextInput
          style={[styles.zapracgivaemayaMoshVsegoKvt, styles.textBorder]}
          placeholder="Emil"
        />
        <Text style={[styles.priOsychText, styles.textTypo]}>
          Вариант 1: 15 процентов платы за технологическое присоединение
          вносятся в течение 15 дней со дня заключения договора; 30 процентов
          платы за технологическое присоединение вносятся в течение 60 дней со
          дня заключения договора, но не позже дня фактического присоединения;
          45 процентов платы за технологическое присоединение вносятся в течение
          15 дней со дня фактического присоединения; 10 процентов платы за
          технологическое присоединение вносятся в течение 15 дней со дня
          подписания акта об осуществлении технологического присоединения.
          Вариант 2: 5 процентов платы за технологическое присоединение в
          течение 15 дней со дня заключения договора; 95 процентов платы за
          технологическое присоединение в течение 3 лет со дня подписания
          Сторонами акта об осуществлении технологического присоединения равными
          долями ежеквартально.
        </Text>
        <TextInput
          style={[styles.zapracgivaemayaMoshVsegoKvt, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.kolvoTochek, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.kolvoTochek, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.kolvoTochek, styles.textBorder]}
          placeholder="Пароль"
        />
        <TextInput
          style={[styles.kolvoTochek, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.kolvoTochek, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.kolvoTochek, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.kolvoTochek, styles.textBorder]}
          placeholder="Emil"
        />
      </View>
      <View style={styles.agreeForm}>
        <View style={[styles.kvadrat, styles.kvadratBorder]} />
        <Text style={[styles.agreeText, styles.textTypo]}>
          <Text style={styles.text4}>{`Даю согласие ПАО «Камчатскэнерго» на
обработку моих персональных данных на
условиях и для целей, определенных
политикой обработки`}</Text>
          <Text style={styles.text5}>{` персональных
данных ПАО «Камчатскэнерго»`}</Text>
        </Text>
      </View>
      <Pressable
        style={styles.raspechatatBtn}
        onPress={() => navigation.navigate("AutorizationScreenAuth")}
      >
        <Text style={[styles.raspechatatBtn1, styles.dannieTypo]}>
          Продолжить
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  kvadratBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  textTypo1: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.mulishRegular,
  },
  dannieTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  textBorder: {
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
  },
  katTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
  },
  formSpaceBlock: {
    marginLeft: 55,
    alignItems: "center",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  katSpaceBlock: {
    marginLeft: 26,
    alignItems: "center",
  },
  formaLayout: {
    height: 33,
    width: 96,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
  },
  arrowIcon: {
    width: 40,
    height: 40,
  },
  arrowIconWrapper: {
    width: 342,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.mulishRegular,
  },
  text1: {
    marginLeft: 20,
    color: Color.colorRoyalblue,
    textAlign: "left",
    fontFamily: FontFamily.mulishRegular,
  },
  text2: {
    marginLeft: 20,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.mulishRegular,
  },
  parent: {
    width: 332,
    height: 32,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  podachaZayvkiNaTehnologiskoInner: {
    borderColor: Color.colorWhitesmoke,
    height: 79,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_20xl,
    marginTop: 47,
    justifyContent: "center",
    width: 344,
    borderRadius: Border.br_5xs,
  },
  podachaZayvkiText: {
    fontSize: FontSize.size_5xl,
    width: 345,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
    marginTop: 47,
  },
  mestanohoxdenObjectText: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    width: 344,
  },
  region: {
    marginTop: 28,
    width: 344,
    borderRadius: Border.br_5xs,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  mestanahozdenObjectForm: {
    width: 343,
    marginTop: 47,
  },
  passportDannieText: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  vidDocument: {
    marginTop: 29,
    width: 344,
    borderRadius: Border.br_5xs,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  etapStroit: {
    width: 344,
  },
  etapStroitTextInput: {
    marginTop: 12,
    width: 344,
    borderRadius: Border.br_5xs,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  etapStroitelstva: {
    marginTop: 18,
    justifyContent: "center",
    width: 344,
  },
  uKv: {
    width: 33,
  },
  uKvTextInput: {
    width: 57,
    marginTop: 3,
    borderRadius: Border.br_5xs,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  uKvForm: {
    alignItems: "center",
  },
  categoryText: {
    width: 51,
  },
  moshKvt: {
    width: 79,
  },
  moshInputForm: {
    width: 119,
    marginTop: 3,
    borderRadius: Border.br_5xs,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  moshForm: {
    width: 120,
  },
  maxMosh20: {
    marginTop: 18,
    width: 344,
    flexDirection: "row",
    alignItems: "center",
  },
  itogoMochText: {
    width: 200,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  catText: {
    width: 80,
    marginTop: 16,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  itogoMochForm: {
    borderRadius: Border.br_8xs,
    width: 248,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_8xs,
    overflow: "hidden",
    marginTop: 18,
  },
  addStrokyText: {
    alignSelf: "stretch",
    width: 77,
    fontFamily: FontFamily.interRegular,
    color: Color.colorRoyalblue,
  },
  addStrokyForm: {
    width: 351,
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  tochkiPodkluchenizForm: {
    height: 387,
    width: 343,
    marginTop: 47,
  },
  etapStroit1: {
    width: 108,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  etapStroitTextInput1: {
    marginLeft: 11,
    width: 225,
    borderRadius: Border.br_5xs,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  etapStroitelstva1: {
    marginTop: 18,
    width: 343,
    flexDirection: "row",
    alignItems: "center",
  },
  maxMoshText: {
    width: 99,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  katText1: {
    width: 34,
  },
  katText2: {
    width: 35,
  },
  katForm2: {
    width: 60,
  },
  allForms: {
    width: 225,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  srokiText: {
    width: 91,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  srokiForm: {
    justifyContent: "flex-end",
    width: 91,
    flexDirection: "row",
    alignItems: "center",
  },
  proektirovaniiText: {
    width: 85,
  },
  proektForma: {
    marginTop: 4,
  },
  proektirovanieForm: {
    width: 104,
  },
  vvodaForma: {
    marginTop: 3,
  },
  sroki: {
    marginTop: 18,
    justifyContent: "center",
    width: 344,
    flexDirection: "row",
    alignItems: "center",
  },
  srokiProektirovForm: {
    height: 322,
    marginTop: 47,
    width: 344,
  },
  dannieObektaPrisod: {
    width: 343,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  zapracgivaemayaMoshVsegoKvt: {
    marginTop: 26,
    width: 344,
    borderRadius: Border.br_5xs,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  priOsychText: {
    marginTop: 26,
    color: Color.colorBlack,
    fontFamily: FontFamily.mulishRegular,
    width: 344,
  },
  kolvoTochek: {
    marginTop: 26,
    width: 345,
    borderRadius: Border.br_5xs,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  dannieObjectPrisodForm: {
    width: 343,
    marginTop: 47,
    alignItems: "center",
  },
  kvadrat: {
    borderColor: Color.colorGray_200,
    width: 22,
    height: 21,
    backgroundColor: Color.colorWhite,
  },
  text4: {
    color: Color.colorBlack,
  },
  text5: {
    color: Color.colorCornflowerblue,
  },
  agreeText: {
    width: 296,
    height: 77,
    marginLeft: 18,
    fontFamily: FontFamily.mulishRegular,
  },
  agreeForm: {
    width: 326,
    marginTop: 47,
    flexDirection: "row",
  },
  raspechatatBtn1: {
    color: Color.colorWhite,
    fontFamily: FontFamily.mulishRegular,
  },
  raspechatatBtn: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorRoyalblue,
    width: 334,
    paddingHorizontal: Padding.p_52xl,
    paddingVertical: Padding.p_2xs,
    overflow: "hidden",
    marginTop: 47,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  podachaZayvkiNaTehnologisko: {
    flex: 1,
    width: "100%",
    height: 4047,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_21xl,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
});

export default PodachaZayvkiNaTehnologisko1;
