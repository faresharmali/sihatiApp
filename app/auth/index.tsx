import { StyleSheet, Image, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Button } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Fontisto } from "@expo/vector-icons";
export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.png")}
        />
        <Link href="/auth/register-patient" asChild>
          <Button style={styles.btnPrimary}>
            <Box style={styles.icon}>
              <MaterialCommunityIcons
                name="emoticon-sick-outline"
                size={24}
                color="#fff"
              />

              <Text style={styles.btnText}> Espace Patients</Text>
            </Box>
          </Button>
        </Link>
        <Link href="/auth/register-doctor" asChild>
        <Button style={styles.btnSecondary}>
          <Box style={styles.icon}>
            <Fontisto name="doctor" size={24} color="#fff" />
            <Text style={styles.btnText}> Espace Medecins</Text>
          </Box>
        </Button>
        </Link>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A87DD",
  },
  formContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  btnPrimary: {
    backgroundColor: "#4DCFE0",
    width: "100%",
    color: "#fff",
    marginBottom: 5,
    marginTop: 20,
    borderRadius: 15,
    height: 60,
  },
  btnSecondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#ffff",
    color: "#fff",
    width: "100%",
    height: 60,
    borderRadius: 15,
    flexDirection: "row",
  },
  icon: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    width: "100%",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
