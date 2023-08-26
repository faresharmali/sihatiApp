import { Icon, Input } from "native-base";
import { StyleSheet,ScrollView } from "react-native";

import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Avatar } from "native-base";
import AppointmentCard from "../../components/ui/cards/appointment.card";
import DoctorCard from "../../components/ui/cards/doctor.card";
import useAuth from "../../hooks/useAuth";
import React, { useEffect, useState } from "react";
import { getDoctors } from "../../api/user";
import { useDispatch } from "react-redux";
import { setDoctorsDB } from "../../redux/userReducer";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
export default function TabOneScreen() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useAuth();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctorsList();
  }, [user]);

  const getDoctorsList = async () => {
    if (!user.token) return;

    try {
      const data = await getDoctors(user.token);
      setDoctors(data);
      dispatch(setDoctorsDB(data));
    } catch (e: any) {
      console.log("err", e.response.data);
    }
  };
  const logout = async() => {
    await AsyncStorage.removeItem("user");
    router.replace("/auth/login");

  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1A87DD" />
      <View style={styles.header}>
        <View style={styles.heading}>
          <Text style={styles.title}>{user?.name}</Text>
          <Avatar
            size="md"
            bg="indigo.500"
            source={require("../../assets/images/avatar.png")}
          >
            JB
          </Avatar>
        </View>
        <TouchableOpacity onPress={logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Input
            style={styles.input}
            type="text"
            placeholder="Rechercher un medecin"
            leftElement={
              <View style={styles.iconContainer}>
                <AntDesign name="search1" size={24} color="black" />
              </View>
            }
            w="100%"
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.heading}>
            <Text style={styles.HeadingTitle}>Prochain rendez-vous</Text>
          </View>
          <AppointmentCard />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.heading}>
            <Text style={styles.HeadingTitle}>Top medecins</Text>
            <Text style={styles.HeadingBtn}>Voir tout</Text>
          </View>
          <ScrollView style={{maxHeight:320}}>
          {doctors.map((doctor, key) => (
            <DoctorCard doctor={doctor} key={key} />
            ))}
            </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  title1: {
    fontSize: 17,
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    padding: 20,

    flex: 1,
    width: "100%",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  header: {
    width: "100%",
    backgroundColor: "#1A87DD",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  inputContainer: {
    width: "100%",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#f5f5f5",
    height: 50,
  },
  iconContainer: {
    height: "100%",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingTop: 12,
    paddingLeft: 10,
  },
  heading: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  HeadingTitle: {
    fontSize: 20,
    color: "#1A87DD",
    fontWeight: "bold",
  },
  HeadingBtn: {
    color: "#1A87DD",
    fontSize: 17,
    fontWeight: "bold",
  },
});
