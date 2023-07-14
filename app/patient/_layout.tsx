import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

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
  const tabBarStyle = {
    backgroundColor: "#1A87DD",
    padding: 5,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  };

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Acceuil",
          headerShown: false,
          tabBarStyle: { ...tabBarStyle },
          tabBarLabelStyle: { color: "#fff" },
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={"#fff"} />,
        }}
      />
      <Tabs.Screen
        name="appointements"
        options={{
          title: "Rendez-vous",
          headerShown: false,
          tabBarStyle: { ...tabBarStyle },
          tabBarLabelStyle: { color: "#fff" },
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar" size={24} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="medecins"
        options={{
          title: "Medecins",
          headerShown: false,
          tabBarStyle: { ...tabBarStyle },
          tabBarLabelStyle: { color: "#fff" },
          tabBarIcon: ({ color }) => (
            <Fontisto name="doctor" size={24} color="white" />
          ),
        }}
      />
    </Tabs>
  );
}
