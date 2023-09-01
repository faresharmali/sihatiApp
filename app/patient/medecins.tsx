import { StyleSheet ,TouchableOpacity} from "react-native";

import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { Avatar } from "native-base";
import AppointmentCard from "../../components/ui/cards/appointment.card";
import DoctorCard from "../../components/ui/cards/doctor.card";
import useAuth from "../../hooks/useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
export default function Appointments() {
  const { doctors } = useAuth();
  const router = useRouter();
  const { user } = useAuth();

  const logout = async() => {
    await AsyncStorage.removeItem("user");
    router.replace("/auth/login");

  }
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
          <View style={styles.heading}>
            <Text style={styles.HeadingTitle}>Medecins</Text>
          </View>
          {doctors.map((doctor: any) => (
            <DoctorCard doctor={doctor} key={doctor.identifier} />
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
