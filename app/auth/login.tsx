import { StyleSheet, Image,Keyboard } from "react-native";
import { Button, HStack, Heading, Spinner, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import LabeledInput from "../../components/ui/form/Input";
import { login } from "../../api/auth";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setSignedUser } from "../../redux/userReducer";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
  const [Loading, setLoading] = React.useState(false);

  const SignIn = async (values: any, { setErrors }: any) => {
    setLoading(true);
    Keyboard.dismiss();
    try {
      const data = await login(values.email, values.password);
      console.log("data", data);
      await AsyncStorage.setItem("user", JSON.stringify(data));
      dispatch(setSignedUser(data));
      if (data.role === "DOCTOR") {
        router.replace("/doctor");
      } else {
        router.replace("/patient");
      }
    } catch (e: any) {
      console.log(e);
      if (e.response?.data?.message) {
        setErrors({
          email: "Données incorrect",
          password: "Données incorrect",
        });
      }
    }
    setLoading(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={SignIn}
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
            <LabeledInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="Email"
              type="text"
              name="email"
              label="Email"
              validation={{ errors, touched }}
            />
            <LabeledInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder="Mot de passe"
              type="password"
              name="password"
              label="Mot de passe"
              validation={{ errors, touched }}
            />
            {!Loading && (
              <>
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
              </>
            )}
            {Loading && (
              <HStack space={2} justifyContent="center">
                <Spinner color={"white"} accessibilityLabel="Loading posts" />
                <Heading color="white" fontSize="md">
                  Patienter
                </Heading>
              </HStack>
            )}
          </View>
        )}
      </Formik>
      <Image
        style={styles.img}
        source={require("../../assets/images/wave.svg")}
      />
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
  img: {
    width: "100%",
    height: 100,
    zIndex: 11,
  },
});
