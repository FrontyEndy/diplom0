import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const PodachaZayvkiNaTehnologisko = () => {
  const [frameRadioValue, setFrameRadioValue] = useState("Физическое лицо");
  const navigation = useNavigation();

  return (
    <View style={styles.podachaZayvkiNaTehnologisko}>
      <Pressable
        style={styles.arrowIconWrapper}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow-btn.png")}
        />
      </Pressable>
      <Text style={[styles.podachaZayvkiText, styles.textTypo1]}>
        Подача заявки на технологическое присоединение
      </Text>
      <View style={styles.parametriZayvkiTextWrapper}>
        <Text style={[styles.parametriZayvkiText, styles.textTypo1]}>
          Параметры заявки
        </Text>
      </View>
      <View style={styles.otKogoTextParent}>
        <Text style={[styles.otKogoText, styles.textTypo1]}>От кого:</Text>
        <View
          style={styles.wrapper}
          value={frameRadioValue}
          onValueChange={setFrameRadioValue}
        >
          <RadioButton.Group
            value={frameRadioValue}
            onValueChange={setFrameRadioValue}
          >
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
                  value="Индивидуальный предприниматель"
                />
                <Text>Индивидуальный предприниматель</Text>
              </View>
            </View>
          </RadioButton.Group>
        </View>
      </View>
      <Text style={[styles.vSvaziS, styles.textTypo1]}>В связи с:</Text>
      <View style={styles.otKogoTextParent}>
        <TextInput
          style={[styles.vibora, styles.textBorder]}
          placeholder="Emil"
        />
      </View>
      <View style={styles.otKogoTextParent}>
        <Text style={[styles.dannieZayvatilyText, styles.textTypo1]}>
          Данные заявителя
        </Text>
        <View style={styles.polnoeNaimWrapper}>
          <TextInput
            style={[styles.vibora, styles.textBorder]}
            placeholder="Emil"
          />
        </View>
        <TextInput
          style={[styles.snils, styles.textBorder]}
          placeholder="Пароль"
        />
        <TextInput
          style={[styles.snils, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput style={[styles.snils, styles.textBorder]} />
      </View>
      <View style={styles.otKogoTextParent}>
        <Text style={[styles.adressText, styles.textTypo1]}>Адрес</Text>
        <TextInput
          style={[styles.gorod, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.gorod, styles.textBorder]}
          placeholder="Пароль"
        />
        <TextInput
          style={[styles.gorod, styles.textBorder]}
          placeholder="Emil"
        />
      </View>
      <View style={styles.otKogoTextParent}>
        <Text style={[styles.kontaknieDannieText, styles.textTypo1]}>
          Контактные данные
        </Text>
        <View style={styles.formiKontakniDannih}>
          <TextInput
            style={[styles.vibora, styles.textBorder]}
            placeholder="Emil"
          />
          <TextInput
            style={[styles.imya, styles.textBorder]}
            placeholder="Пароль"
          />
          <TextInput
            style={[styles.imya, styles.textBorder]}
            placeholder="Emil"
          />
          <TextInput
            style={[styles.imya, styles.textBorder]}
            placeholder="Emil"
          />
          <TextInput
            style={[styles.imya, styles.textBorder]}
            placeholder="Пароль"
          />
          <TextInput
            style={[styles.imya, styles.textBorder]}
            placeholder="Emil"
          />
          <TextInput
            style={[styles.imya, styles.textBorder]}
            placeholder="Emil"
          />
          <TextInput
            style={[styles.imya, styles.textBorder]}
            placeholder="Пароль"
          />
          <TextInput
            style={[styles.imya, styles.textBorder]}
            placeholder="Emil"
          />
        </View>
      </View>
      <View style={styles.otKogoTextParent}>
        <Text style={[styles.mestanohoxdenObjectText, styles.textTypo1]}>
          Местонахождение объекта присоединения
        </Text>
        <TextInput
          style={[styles.imya, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.imya, styles.textBorder]}
          placeholder="Пароль"
        />
        <TextInput
          style={[styles.imya, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.imya, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.imya, styles.textBorder]}
          placeholder="Пароль"
        />
        <TextInput
          style={[styles.imya, styles.textBorder]}
          placeholder="Emil"
        />
        <TextInput
          style={[styles.imya, styles.textBorder]}
          placeholder="Emil"
        />
      </View>
      <View style={styles.otKogoTextParent}>
        <Text style={[styles.passportDannieText, styles.textTypo1]}>
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
        <Text style={[styles.mestanohoxdenObjectText, styles.textTypo1]}>
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
          <Text style={[styles.itogoMochText, styles.textTypo1]}>
            Итого подключаемая мощность:
          </Text>
          <Text style={[styles.catText, styles.textTypo1]}>I категория:</Text>
          <Text style={[styles.catText, styles.textTypo1]}>II категория:</Text>
          <Text style={[styles.catText, styles.textTypo1]}>III категория:</Text>
        </View>
        <View style={styles.addStrokyForm}>
          <Text style={[styles.addStrokyText, styles.textTypo1]}>
            Добавить строку
          </Text>
        </View>
      </View>
      <View style={styles.srokiProektirovForm}>
        <Text style={[styles.mestanohoxdenObjectText, styles.textTypo1]}>
          Сроки проектирования и поэтапного введения в эксплутацию объекта
        </Text>
        <View style={styles.etapStroitelstva1}>
          <Text
            style={[styles.etapStroit1, styles.textTypo1]}
          >{`Этап строительства `}</Text>
          <TextInput
            style={[styles.etapStroitTextInput1, styles.textBorder]}
            placeholder="Emil"
          />
        </View>
        <View style={styles.maxMosh20}>
          <Text style={[styles.maxMoshText, styles.textTypo1]}>
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
            <Text style={[styles.srokiText, styles.textTypo1]}>Сроки</Text>
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
          <Text style={[styles.addStrokyText, styles.textTypo1]}>
            Добавить этап
          </Text>
        </View>
      </View>
      <View style={styles.dannieObjectPrisodForm}>
        <Text style={[styles.dannieObektaPrisod, styles.textTypo1]}>
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
        <View style={[styles.kvadrat, styles.textBorder]} />
        <Text style={[styles.agreeText, styles.textTypo]}>
          <Text style={styles.text}>{`Даю согласие ПАО «Камчатскэнерго» на
обработку моих персональных данных на
условиях и для целей, определенных
политикой обработки`}</Text>
          <Text style={styles.text1}>{` персональных
данных ПАО «Камчатскэнерго»`}</Text>
        </Text>
      </View>
      <View style={styles.raspechatatBtn}>
        <Text style={[styles.raspechatatBtn1, styles.textTypo]}>
          Распечатать
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameRadioText: {},
  view: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  textBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  katTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  formSpaceBlock: {
    marginLeft: 55,
    alignItems: "center",
  },
  katSpaceBlock: {
    marginLeft: 26,
    alignItems: "center",
  },
  formaLayout: {
    height: 33,
    width: 96,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    fontFamily: FontFamily.mulishRegular,
    textAlign: "left",
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
  podachaZayvkiText: {
    fontSize: FontSize.size_5xl,
    marginTop: 47,
    width: 345,
    color: Color.colorBlack,
  },
  parametriZayvkiText: {
    width: 184,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  parametriZayvkiTextWrapper: {
    marginTop: 47,
    width: 345,
    flexDirection: "row",
    alignItems: "center",
  },
  otKogoText: {
    width: 125,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapper: {
    width: 207,
    flexWrap: "wrap",
    marginTop: 11,
    flexDirection: "row",
  },
  otKogoTextParent: {
    width: 343,
    marginTop: 47,
  },
  vSvaziS: {
    width: 343,
    fontSize: FontSize.size_xl,
    marginTop: 47,
    color: Color.colorBlack,
  },
  vibora: {
    width: 344,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  dannieZayvatilyText: {
    width: 272,
    height: 30,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  polnoeNaimWrapper: {
    marginTop: 27,
  },
  snils: {
    marginTop: 27,
    width: 344,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  adressText: {
    width: 70,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  gorod: {
    marginTop: 31,
    width: 344,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  kontaknieDannieText: {
    width: 128,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  imya: {
    marginTop: 28,
    width: 344,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  formiKontakniDannih: {
    marginTop: 28,
  },
  mestanohoxdenObjectText: {
    width: 344,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  passportDannieText: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  vidDocument: {
    marginTop: 29,
    width: 344,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
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
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
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
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
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
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
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
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  catText: {
    width: 80,
    marginTop: 16,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  itogoMochForm: {
    borderRadius: Border.br_8xs,
    width: 248,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_8xs,
    overflow: "hidden",
    marginTop: 18,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
  },
  addStrokyText: {
    alignSelf: "stretch",
    color: Color.colorRoyalblue,
    width: 77,
    fontSize: FontSize.size_xs,
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
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  etapStroitTextInput1: {
    marginLeft: 11,
    width: 225,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
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
    fontSize: FontSize.size_xs,
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
    marginLeft: 20,
    width: 225,
    flexDirection: "row",
    alignItems: "center",
  },
  srokiText: {
    width: 91,
    fontSize: FontSize.size_xs,
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
    width: 344,
    marginTop: 47,
  },
  dannieObektaPrisod: {
    width: 343,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  zapracgivaemayaMoshVsegoKvt: {
    marginTop: 26,
    width: 344,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  priOsychText: {
    marginTop: 26,
    fontSize: FontSize.size_xs,
    width: 344,
    color: Color.colorBlack,
  },
  kolvoTochek: {
    marginTop: 26,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 40,
    backgroundColor: Color.colorWhite,
    width: 345,
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
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  text: {
    color: Color.colorBlack,
  },
  text1: {
    color: Color.colorCornflowerblue,
  },
  agreeText: {
    width: 296,
    height: 77,
    marginLeft: 18,
    fontSize: FontSize.size_xs,
  },
  agreeForm: {
    width: 326,
    marginTop: 47,
    flexDirection: "row",
  },
  raspechatatBtn1: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
  },
  raspechatatBtn: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorRoyalblue,
    width: 334,
    paddingHorizontal: Padding.p_52xl,
    paddingVertical: Padding.p_2xs,
    overflow: "hidden",
    justifyContent: "center",
    marginTop: 47,
    flexDirection: "row",
    alignItems: "center",
  },
  podachaZayvkiNaTehnologisko: {
    flex: 1,
    width: "100%",
    height: 5605,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_21xl,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
});

export default PodachaZayvkiNaTehnologisko;
