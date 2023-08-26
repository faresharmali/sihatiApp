import FontAwesome from '@expo/vector-icons/FontAwesome';
import {  Tabs } from 'expo-router';


function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
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
    <Tabs
  
    >
      <Tabs.Screen
        name="index"
        
        options={{
          tabBarStyle: { ...tabBarStyle },
          tabBarLabelStyle: { color: "#fff" },
          headerShown: false,

          title: 'doctor',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={"#fff"} />,
        }}
      />
      <Tabs.Screen
        name="appointements"
        options={{
          title:"appointements",
          tabBarIcon: ({ color }) => <TabBarIcon name="usd"  color={"#fff"} />,
        }}
      />
    

    </Tabs>
  );
}
