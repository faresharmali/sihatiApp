import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack, Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  console.log('tab layout');

  return (
    <View style={styles.container}>    
    <Stack
     >
       <Tabs.Screen
         name="index"
         options={{
           headerShown:false,
           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
         }}
       />
      <Tabs.Screen
        name="login"
        options={{
          headerShown:false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="register-doctor"
        options={{
          title: 'register doctor',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="register-patient"
        options={{
          title: 'register patient',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    
     
    </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  }
});
