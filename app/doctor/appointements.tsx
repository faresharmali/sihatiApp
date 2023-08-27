import { Icon, Input } from "native-base";
import { StyleSheet } from "react-native";

import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Avatar } from "native-base";
import AppointmentCard from "../../components/ui/cards/appointment.card";
import DoctorCard from "../../components/ui/cards/doctor.card";
import useAuth from "../../hooks/useAuth";
import React, { useEffect, useState } from "react";
import { getDoctorAppointements, getMyAppointements } from "../../api/appointements";
import { isAfterOrEqual, isEqual } from "../../utils/date.utils";
import { Calendar } from "react-native-calendars";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function Appointments() {
  const { user } = useAuth();
  useEffect(() => {
    getAppointements();
  }, [user]);

  const [appointements, setAppointements] = useState([]);
  const [selected, setSelected] = React.useState<any>({
    dateString: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
  });

  const getAppointements= async() => {
    if (!user.token) return;
    try {
      const data = await getDoctorAppointements(user.token,user.Doctor?.identifier);
      setAppointements(data);
    } catch (e: any) {
      console.log("err", e);
    }
  }

  useEffect(() => {
    getAppointements();
  }, [user]);
  const router = useRouter();
  const logout = async () => {
    await AsyncStorage.removeItem("user");
    router.replace("/auth/login");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading}>
        <TouchableOpacity onPress={logout}>
            <SimpleLineIcons name="logout" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>{user?.name}</Text>
          <Avatar
            size="md"
            bg="indigo.500"
            source={require("../../assets/images/avatar.png")}
          >
            JB
          </Avatar>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <View>
          <Calendar
          minDate={Date()}
          enableSwipeMonths={true}
          onDayPress={(day) => {
            setSelected(day);
          }}
          markedDates={{
            [selected.dateString]: {
              selected: true,
              selectedColor: "#1A87DD",
            },
          }}
          monthFormat={"MM yyyy"}
          firstDay={0}
        />
          </View>
          <View style={styles.heading}>
            <Text style={styles.HeadingTitle}>Mes rendez-vous</Text>
      
          </View>
          {appointements
            .filter((a: any) =>isEqual(a.date,selected.dateString))
            .map((appointement:any, i) => (
              <AppointmentCard key={i} type="patient" appointement={appointement} person={appointement.patient} />
            ))}
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
  content: {
    padding: 20,

    flex: 1,
    width: "100%",
  },
});
