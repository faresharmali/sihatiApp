import { StyleSheet } from 'react-native';

import { Redirect } from 'expo-router';
import {useState} from "react"
import { View } from 'react-native';
export default function TabOneScreen() {
    const [isLoggedIn,setIsLoggedIn]=useState(true)
  return (
    <View style={styles.container}>
      {isLoggedIn ? <Redirect href={"/auth"}/> :<Redirect href={"/auth/register-doctor"}/> }  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
