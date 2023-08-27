import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

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
          tabBarStyle: { ...tabBarStyle },
          tabBarLabelStyle: { color: "#fff" },
          headerShown: false,

          title: "Acceuil",
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
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={"#fff"} />,
        }}
      />
    </Tabs>
  );
}
