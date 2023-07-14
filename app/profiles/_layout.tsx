import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";



export default function ProfileLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      headerBackButtonMenuEnabled: false,
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Acceuil",
        }}
      />
   
    </Stack>
  );
}
