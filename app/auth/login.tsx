import { StyleSheet, Image } from "react-native";
import { Button, Text, View } from "native-base";

import {} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import LabeledInput from "../../components/ui/form/Input";
export default function Login() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
  return (
    <SafeAreaView style={styles.container}>
      <Image
              style={styles.logo}
              source={require("../../assets/images/logo.png")}
            />
      <Text style={styles.title}> Se connecter</Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            {console.log("err", errors)}
          
            <LabeledInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="Nom d'utilisateur"
              type="text"
              name="email"
              label="Nom d'utilisateur"
              validation={{ errors, touched }}
            />
            <LabeledInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.email}
              placeholder="Mot de passe"
              type="password"
              name="password"
              label="Mot de passe"
              validation={{ errors, touched }}
            />
            <Button
              style={styles.btnPrimary}
              backgroundColor={"#4DCFE0"}
              onPress={handleSubmit as any}
            >
              Se connecter
            </Button>
            <Button style={styles.btnSecondary}>
              <Link style={styles.Link} href={"/auth"}>
                Creer un compte
              </Link>
            </Button>
          </View>
        )}
      </Formik>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },

  input: { backgroundColor: "#fff", height: 50 },
  formContainer: {
    width: "80%",
    gap: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  Link: {
    color: "#fff",
    textAlign: "center",
  },
  btnPrimary: {
    backgroundColor: "#4DCFE0",
    width: "100%",
    marginBottom: 5,
    marginTop: 20,
    borderRadius: 15,
  },
  btnSecondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#ffff",
    color: "#fff",
    width: "100%",
    borderRadius: 15,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
});
