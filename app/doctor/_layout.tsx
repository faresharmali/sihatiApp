import FontAwesome from '@expo/vector-icons/FontAwesome';
import {  Tabs } from 'expo-router';


function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  return (
    <Tabs
  
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'doctor',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="appointements"
        options={{
          title:"appointements",
          tabBarIcon: ({ color }) => <TabBarIcon name="usd"  color={color} />,
        }}
      />
    

    </Tabs>
  );
}
