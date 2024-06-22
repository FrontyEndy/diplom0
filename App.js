const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./components/MenuScreen";
import HomeScreenAuth from "./screens/HomeScreenAuth";
import PodachaZayvkiNaTehnologisko from "./screens/PodachaZayvkiNaTehnologisko";
import PodachaZayvkiNaTehnologisko1 from "./screens/PodachaZayvkiNaTehnologisko1";
import PodachaZayvkiNaTehnologisko2 from "./screens/PodachaZayvkiNaTehnologisko2";
import RegistrationScreen from "./screens/RegistrationScreen";
import AutorizationScreen from "./screens/AutorizationScreen";
import MoiZayvki from "./screens/MoiZayvki";
import AutorizationScreenAuth from "./screens/AutorizationScreenAuth";
import ProfilePolzovatelyAuth from "./screens/ProfilePolzovatelyAuth";
import ZayvkaCompletedAuth from "./screens/ZayvkaCompletedAuth";
import MoiZayvkiAuth from "./screens/MoiZayvkiAuth";
import SvodPoZayvke from "./screens/SvodPoZayvke";
import ZayvatilEkranAuth from "./screens/ZayvatilEkranAuth";
import CalculatorScreen from "./screens/CalculatorScreen";
import HelloScreen from "./screens/HelloScreen";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Mulish-Regular": require("./assets/fonts/Mulish-Regular.ttf"),
    "Mulish-Bold": require("./assets/fonts/Mulish-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="HomeScreen"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeScreenAuth"
                component={HomeScreenAuth}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PodachaZayvkiNaTehnologisko"
                component={PodachaZayvkiNaTehnologisko}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PodachaZayvkiNaTehnologisko1"
                component={PodachaZayvkiNaTehnologisko1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PodachaZayvkiNaTehnologisko2"
                component={PodachaZayvkiNaTehnologisko2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RegistrationScreen"
                component={RegistrationScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AutorizationScreen"
                component={AutorizationScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MoiZayvki"
                component={MoiZayvki}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AutorizationScreenAuth"
                component={AutorizationScreenAuth}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfilePolzovatelyAuth"
                component={ProfilePolzovatelyAuth}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ZayvkaCompletedAuth"
                component={ZayvkaCompletedAuth}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MoiZayvkiAuth"
                component={MoiZayvkiAuth}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SvodPoZayvke"
                component={SvodPoZayvke}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ZayvatilEkranAuth"
                component={ZayvatilEkranAuth}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CalculatorScreen"
                component={CalculatorScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HelloScreen"
                component={HelloScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <HelloScreen />
          )}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
