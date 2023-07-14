import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Acceuil",
          headerShown: false,
          tabBarStyle: {backgroundColor:"#1A87DD",padding:5},
          tabBarLabelStyle: { color: "#fff" },
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={"#fff"} />,
        }}
      />
      <Tabs.Screen
        name="appointements"
        options={{
          title: "Rendez-vous",
          headerShown: false,
          tabBarStyle: {backgroundColor:"#1A87DD",padding:5},
          tabBarLabelStyle: { color: "#fff" },
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar"  color={"#fff"} />,
        }}
      />
    </Tabs>
  );
}
