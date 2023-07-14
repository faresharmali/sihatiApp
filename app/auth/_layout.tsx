import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack, Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';



export default function TabLayout() {

  return (
    <Stack
     >
       <Tabs.Screen
         name="index"
         options={{
           headerShown:false,
         }}
       />
      <Tabs.Screen
        name="login"
        options={{
          headerShown:false,
        }}
      />
      <Tabs.Screen
        name="register-doctor"
        options={{
          title: 'register doctor',
          headerShown:false,

        }}
      />
      <Tabs.Screen
        name="register-patient"
        options={{
          title: 'register patient',
          headerShown:false,
        }}
      />
    
     
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
