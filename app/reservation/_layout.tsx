import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";



export default function Layout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      headerBackButtonMenuEnabled: false,
    }}>
      <Tabs.Screen
        name="[slug]"
        options={{
          title: "Acceuil",
        }}
      />
     
    </Stack>
  );
}
