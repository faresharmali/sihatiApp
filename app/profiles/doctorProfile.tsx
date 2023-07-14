import {
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";
import { Link } from "expo-router";

const doctorProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#1A87DD"
        style={Platform.OS === "ios" ? "light" : "auto"}
      />

      <View style={styles.header}>
        <Card />
      </View>

      <View style={styles.content}>
        <View style={styles.contentItem}>
          <Text style={styles.ItemTitle}>Informations :</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.label}>Numero de telephone :</Text>
            <Text>0660818412</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.label}>Wilaya :</Text>
            <Text>Bouira</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.label}>Addresse :</Text>
            <Text>Cité lpp bouira</Text>
          </View>
        </View>
        <View style={styles.contentItem}>
          <Text style={styles.ItemTitle}>A propos de medecin</Text>
          <Text style={styles.ItemText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            debitis, libero ad placeat nobis repudiandae. Voluptates tempore
          </Text>
        </View>
        <View style={styles.contentItem}>
          <Text style={styles.ItemTitle}>Localisation</Text>
          <Image
            style={styles.mapImage}
            source={require("../../assets/images/map.png")}
          />
        </View>
        <Link style={styles.btnText} href={"/reservation/fares"} asChild>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Prendre un rendez-vous</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default doctorProfile;

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.head}>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Dr . Ismal</Text>
          <Text style={styles.cardSpeciality}>
            Anatomie -Pathologique - Bouira
          </Text>
          <View style={styles.date}>
            <AntDesign name="star" size={20} color="orange" />
            <Text style={styles.dateText}>4.0</Text>
            <Text style={styles.dateText}>50 evalutations</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    backgroundColor: "#1A87DD",
    height: 120,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    width: "100%",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ffff",
    width: "90%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 60,
    borderWidth: 2,
    borderColor: "#0000001a",
  },
  head: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  cardTitle: {
    color: "#000",
    fontSize: 20,
  },
  cardSpeciality: {
    color: "#000",
  },
  date: {
    backgroundColor: "#ffffff59",
    width: "100%",

    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  dateText: {
    color: "#000",
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 10,
  },
  cardContent: {
    gap: 2,
  },

  content: {
    marginTop: 60,
    width: "100%",
    padding: 10,
  },
  contentItem: {
    marginBottom: 20,
    width: "100%",
  },
  ItemTitle: {
    fontSize: 17,
    fontWeight: "500",
    color: "#1A87DD",
  },
  ItemText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#000",
  },
  mapImage: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 15,
  },
  btn: {
    backgroundColor: "#1A87DD",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
  },
  label: {
    marginRight: 10,
    color: "#000",
    fontWeight: "500",
  },
});
