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

  const [isPatient, setIsPatient] = useState(false);
  const [isDoctor, setIsDoctor] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      // await AsyncStorage.removeItem("user");  

      const user = await AsyncStorage.getItem("user");  
      if (user) {
        dispatch(setSignedUser(JSON.parse(user)))
        console.log("user",JSON.parse(user));
        if(JSON.parse(user).role === "DOCTOR"){
          setIsDoctor(true);
        }else{

          setIsPatient(true);
        }
      } else {
        setIsPatient(false);
      }
      setIsLoading(false);

    };
    checkLogin();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && <View style={styles.container}></View>}

      {(!isPatient && !isDoctor && !isLoading) && <Redirect href={"/auth/login"} />}
      {(isPatient && !isLoading) && <Redirect href={"/patient"} />}
      {(isDoctor && !isLoading) && <Redirect href={"/doctor"} />}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#1A87DD"
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
