import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { Provider } from "react-redux";
import store from "../redux/store";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Provider store={store}>
        <NativeBaseProvider>
          <Stack initialRouteName="doctor">
            <Stack.Screen name="auth" options={{ headerShown: false }} />
            <Stack.Screen name="doctor" options={{ headerShown: false }} />
            <Stack.Screen name="patient" options={{ headerShown: false }} />
            <Stack.Screen name="profiles" options={{ headerShown: false }} />
            <Stack.Screen name="reservation" options={{ headerShown: false }} />
          </Stack>
        </NativeBaseProvider>
      </Provider>
    </>
  );
}
