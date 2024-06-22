import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const PodachaZayvkiNaTehnologisko2 = () => {
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
  const [dataDoverenostiDatePicker, setDataDoverenostiDatePicker] =
    useState(undefined);
  const [doverenostDeystvoetDoDatePicker, setDoverenostDeystvoetDoDatePicker] =
    useState(undefined);
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
          source={require("../assets/arrow-icon.png")}
        />
      </Pressable>
      <Text style={styles.podachaZayvkiText}>
        Подача заявки на технологическое присоединение
      </Text>
      <View style={styles.vSvyzi}>
        <Text style={[styles.vSvaziS, styles.textTypo2]}>В связи с:</Text>
        <View style={styles.vibora}>
          <DropDownPicker
            style={[styles.dropdownpicker, styles.textBorder]}
            open={viboraOpen}
            setOpen={setViboraOpen}
            value={viboraValue}
            setValue={setViboraValue}
            items={viboraItems}
            dropDownContainerStyle={styles.viboradropDownContainer}
          />
        </View>
      </View>
      <View style={styles.adressForm}>
        <Text style={[styles.adressText, styles.textTypo2]}>Адрес</Text>
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
      <View style={styles.adressForm}>
        <Text style={[styles.kontaknieDannieText, styles.textTypo2]}>
          Контактные данные
        </Text>
        <View style={styles.formiKontakniDannih}>
          <TextInput
            style={[styles.familia, styles.textBorder]}
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
          <RNKDatepicker
            style={styles.dataDoverenosti}
            date={dataDoverenostiDatePicker}
            onSelect={setDataDoverenostiDatePicker}
            controlStyle={styles.dataDoverenostiDatePickerValue}
          />
          <RNKDatepicker
            style={styles.dataDoverenosti}
            date={doverenostDeystvoetDoDatePicker}
            onSelect={setDoverenostDeystvoetDoDatePicker}
            controlStyle={styles.doverenostDeystvoetDoValue}
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
      <View style={styles.adressForm}>
        <Text style={[styles.passportDannieText, styles.textTypo2]}>
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
      <View style={styles.vSvyzi}>
        <Text style={[styles.passportDannieText1, styles.textTypo2]}>
          Технические параметры подключаемого объекта
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
          placeholder="Emil"
        />
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
      </View>
      <View style={styles.srokiProektirovForm}>
        <Text style={[styles.srokiProektirovText, styles.textTypo2]}>
          Сроки проектирования и поэтапного введения в эксплутацию объекта
        </Text>
        <View style={styles.teplovauaNagryzkaForm}>
          <View style={styles.teplovayaNagryzkaGkal}>
            <Text style={[styles.teplovayaNagryzkaGkal1, styles.textTypo1]}>
              Тепловая нагрузка, Гкал/час
            </Text>
          </View>
          <View style={[styles.allForms, styles.allFlexBox]}>
            <View style={styles.otoplenie}>
              <Text style={[styles.otoplenieText, styles.textTypo]}>
                Отопление
              </Text>
              <TextInput
                style={[styles.otoplenieTextInput, styles.textBorder]}
                placeholder="Emil"
              />
            </View>
            <View style={styles.ventilycia}>
              <Text style={[styles.ventilyciaText, styles.textTypo]}>
                Вентиляция
              </Text>
              <TextInput
                style={[styles.otoplenieTextInput, styles.textBorder]}
                placeholder="Emil"
              />
            </View>
            <View style={styles.tepliveiZaveci}>
              <Text style={[styles.tepliveiZaveciText, styles.textTypo]}>
                Тепловые завесы
              </Text>
              <TextInput
                style={[styles.otoplenieTextInput, styles.textBorder]}
                placeholder="Emil"
              />
            </View>
            <View style={styles.gvsCred}>
              <Text style={[styles.tepliveiZaveciText1, styles.textTypo]}>{`ГВС,
среднее`}</Text>
              <TextInput
                style={[styles.otoplenieTextInput, styles.textBorder]}
                placeholder="Emil"
              />
            </View>
          </View>
        </View>
        <View style={[styles.allForms2, styles.allFlexBox]}>
          <View style={styles.otoplenie}>
            <Text style={[styles.otoplenieText, styles.textTypo]}>{`ГВС,
максимум`}</Text>
            <TextInput
              style={[styles.otoplenieTextInput, styles.textBorder]}
              placeholder="Emil"
            />
          </View>
          <View style={styles.ventilycia}>
            <Text style={[styles.kondicionirovanieText, styles.textTypo]}>
              Кондиционирование
            </Text>
            <TextInput
              style={[styles.otoplenieTextInput, styles.textBorder]}
              placeholder="Emil"
            />
          </View>
          <View style={styles.prochee}>
            <Text style={[styles.kondicionirovanieText, styles.textTypo]}>
              Прочее
            </Text>
            <TextInput
              style={[styles.vsegoSYthectomMaxTextInpu, styles.textBorder]}
              placeholder="Emil"
            />
          </View>
          <View style={styles.vsegoSYthectomSred}>
            <Text style={[styles.kondicionirovanieText, styles.textTypo]}>
              Всего (с учетом ГВС средн.)
            </Text>
            <TextInput
              style={[styles.otoplenieTextInput, styles.textBorder]}
              placeholder="Emil"
            />
          </View>
          <View style={styles.vsegoSYthectomMax}>
            <Text style={[styles.kondicionirovanieText, styles.textTypo]}>
              Всего (с учетом ГВС макс.)
            </Text>
            <TextInput
              style={[styles.otoplenieTextInput, styles.textBorder]}
              placeholder="Emil"
            />
          </View>
        </View>
        <View style={styles.temperatyrnuiGrafik}>
          <Text style={[styles.temperatyrnuiGrafikText, styles.textTypo1]}>
            Температурный график
          </Text>
          <View
            style={[
              styles.temperatyrnuiGrafikTextInpuParent,
              styles.textSpaceBlock,
            ]}
          >
            <TextInput style={styles.temperatyrnuiLayout} placeholder="Emil" />
            <TextInput
              style={[
                styles.temperatyrnuiGrafikTextInpu1,
                styles.temperatyrnuiLayout,
              ]}
              placeholder="Emil"
            />
          </View>
        </View>
        <View style={styles.temperatyrnuiGrafik}>
          <Text style={[styles.temperatyrnuiGrafikText, styles.textTypo1]}>
            Схема подключения
          </Text>
          <TextInput
            style={[styles.sxemaPodklucheniaTextInput, styles.textSpaceBlock]}
            placeholder="Emil"
          />
        </View>
      </View>
      <View style={styles.kontaknieDannieTextParent}>
        <Text style={[styles.kontaknieDannieText, styles.textTypo2]}>
          Прочая информация
        </Text>
        <View style={styles.formiKontakniDannih}>
          <TextInput
            style={[styles.familia, styles.textBorder]}
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
            placeholder="Emil"
          />
        </View>
      </View>
      <View style={styles.agreeForm}>
        <View style={[styles.kvadrat, styles.textBorder]} />
        <Text style={[styles.agreeText, styles.textTypo1]}>
          <Text style={styles.text}>{`Даю согласие ПАО «Камчатскэнерго» на
обработку моих персональных данных на
условиях и для целей, определенных
политикой обработки`}</Text>
          <Text style={styles.text1}>{` персональных
данных ПАО «Камчатскэнерго»`}</Text>
        </Text>
      </View>
      <View style={[styles.raspechatatBtn, styles.allFlexBox]}>
        <Text style={[styles.raspechatatBtn1, styles.textTypo3]}>
          Распечатать
        </Text>
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
  dataDoverenostiDatePickerValue: {},
  doverenostDeystvoetDoValue: {},
  textTypo2: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  textBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  textTypo1: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  allFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
  },
  textSpaceBlock: {
    marginLeft: 11,
    width: 224,
  },
  temperatyrnuiLayout: {
    width: 99,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  textTypo3: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  arrowIcon: {
    width: 40,
    height: 40,
  },
  arrowIconWrapper: {
    width: 327,
    flexDirection: "row",
    alignItems: "center",
  },
  podachaZayvkiText: {
    fontSize: FontSize.size_5xl,
    marginTop: 47,
    width: 344,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.mulishRegular,
  },
  vSvaziS: {
    width: 95,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  dropdownpicker: {
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
  },
  vibora: {
    marginTop: 30,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    width: 344,
    height: 40,
  },
  vSvyzi: {
    marginTop: 47,
    width: 344,
  },
  adressText: {
    width: 70,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  gorod: {
    marginTop: 31,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    height: 40,
    width: 344,
  },
  adressForm: {
    width: 339,
    marginTop: 47,
  },
  kontaknieDannieText: {
    width: 128,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  familia: {
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    height: 40,
    width: 344,
  },
  imya: {
    marginTop: 28,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    height: 40,
    width: 344,
  },
  dataDoverenosti: {
    marginTop: 28,
  },
  formiKontakniDannih: {
    marginTop: 28,
  },
  passportDannieText: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  vidDocument: {
    marginTop: 29,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    height: 40,
    width: 344,
  },
  passportDannieText1: {
    width: 339,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  srokiProektirovText: {
    width: 342,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  teplovayaNagryzkaGkal1: {
    width: 59,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  teplovayaNagryzkaGkal: {
    flexDirection: "row",
    alignItems: "center",
  },
  otoplenieText: {
    width: 56,
  },
  otoplenieTextInput: {
    marginTop: 3,
    width: 57,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    height: 40,
  },
  otoplenie: {
    alignItems: "center",
  },
  ventilyciaText: {
    width: 59,
  },
  ventilycia: {
    marginLeft: 15,
    alignItems: "center",
  },
  tepliveiZaveciText: {
    width: 51,
  },
  tepliveiZaveci: {
    height: 77,
    marginLeft: 15,
    alignItems: "center",
  },
  tepliveiZaveciText1: {
    width: 58,
  },
  gvsCred: {
    height: 78,
    marginLeft: 15,
  },
  allForms: {
    width: 252,
    marginLeft: 22,
    height: 88,
    justifyContent: "center",
  },
  teplovauaNagryzkaForm: {
    width: 377,
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  kondicionirovanieText: {
    width: 55,
  },
  vsegoSYthectomMaxTextInpu: {
    marginTop: 16,
    width: 57,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    height: 40,
  },
  prochee: {
    height: 69,
    marginLeft: 15,
    width: 57,
    alignItems: "center",
  },
  vsegoSYthectomSred: {
    height: 114,
    marginLeft: 15,
    alignItems: "center",
  },
  vsegoSYthectomMax: {
    height: 91,
    marginLeft: 15,
    alignItems: "center",
  },
  allForms2: {
    height: 88,
    justifyContent: "center",
    marginTop: 18,
    width: 343,
  },
  temperatyrnuiGrafikText: {
    width: 108,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  temperatyrnuiGrafikTextInpu1: {
    marginLeft: 25,
  },
  temperatyrnuiGrafikTextInpuParent: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  temperatyrnuiGrafik: {
    marginTop: 18,
    width: 343,
    flexDirection: "row",
    alignItems: "center",
  },
  sxemaPodklucheniaTextInput: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_5xs,
    height: 40,
  },
  srokiProektirovForm: {
    height: 383,
    width: 343,
    marginTop: 47,
  },
  kontaknieDannieTextParent: {
    marginTop: 47,
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
    width: 296,
    marginLeft: 18,
    height: 77,
    fontFamily: FontFamily.mulishRegular,
  },
  agreeForm: {
    width: 331,
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
    overflow: "hidden",
    paddingHorizontal: Padding.p_52xl,
    paddingVertical: Padding.p_2xs,
    width: 343,
    marginTop: 47,
  },
  podachaZayvkiNaTehnologisko: {
    flex: 1,
    width: "100%",
    height: 4927,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_21xl,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
});

export default PodachaZayvkiNaTehnologisko2;
