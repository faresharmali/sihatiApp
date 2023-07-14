import { StyleSheet } from "react-native";

import { Redirect } from "expo-router";
import { useState, useEffect } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "native-base";
import { useDispatch } from "react-redux";
import { setSignedUser } from "../redux/userReducer";

export default function TabOneScreen() {
  const dispatch = useDispatch()

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      // await AsyncStorage.removeItem("user");  

      const user = await AsyncStorage.getItem("user");  
      if (user) {
        dispatch(setSignedUser(JSON.parse(user)))
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setIsLoading(false);

    };
    checkLogin();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading...</Text>}

      {(!isLoggedIn && !isLoading) && <Redirect href={"/auth/login"} />}
      {(isLoggedIn && !isLoading) && <Redirect href={"/patient"} />}

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
