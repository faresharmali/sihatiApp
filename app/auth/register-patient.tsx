import { StyleSheet, Image } from "react-native";
import {
  Button,
  CheckIcon,
  HStack,
  Heading,
  ScrollView,
  Select,
  Spinner,
  Text,
  View,
} from "native-base";

import {} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import LabeledInput from "../../components/ui/form/Input";
import { CreatePatient, login } from "../../api/auth";
import React from "react";

export default function EspacePatient() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    phone: Yup.string().required(),

    name: Yup.string().required(),
  });

  const InitialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
  };
  const router = useRouter();

  const Register = async (values: any, { setErrors }: any) => {
    try {
      setLoading(true);
      const data= await CreatePatient(values);
      router.push("/auth/login");
    } catch (e: any) {
      if (e.response?.data?.message) {
        console.log("error", e.response?.data?.message);
        setErrors({
          email: "Données incorrect",
          password: "Données incorrect",
        });
      }
    }
    setLoading(false);

  };

  const [Loading, setLoading] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Espace Patient</Text>
      <Formik
        initialValues={InitialValues}
        onSubmit={Register}
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
            <ScrollView style={styles.scrollContainer}>
              <LabeledInput
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                placeholder="Nom Prénom"
                type="text"
                name="name"
                label="Nom Prénom"
                validation={{ errors, touched }}
              />
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

              <LabeledInput
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                placeholder="Numero de telephone"
                type="text"
                name="phone"
                label="Numero de telephone"
                validation={{ errors, touched }}
              />

              {!Loading && (
                <Button onPress={handleSubmit as any} style={styles.btnPrimary}>
                  Creer mon compte
                </Button>
              )}

              {Loading && (
                <HStack space={2} justifyContent="center">
                  <Spinner color={"white"} accessibilityLabel="Loading posts" />
                  <Heading color="white" fontSize="md">
                    Patienter
                  </Heading>
                </HStack>
              )}
            </ScrollView>
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
    paddingTop: 50,
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

  logo: {
    width: 120,
    height: 120,
    marginBottom: 40,
  },
  scrollContainer: {
    width: "100%",
  },
});
