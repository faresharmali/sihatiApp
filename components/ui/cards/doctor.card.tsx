import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { Image } from "react-native";
import {useRouter} from "expo-router";
const DoctorCard = () => {
    const router=useRouter()
  return (
    <TouchableOpacity onPress={()=>router.push('/profiles/doctorProfile/')} style={styles.card}>
      <View style={styles.head}>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Dr . Ismal</Text>
          <Text style={styles.cardSpeciality}>Anatomie -Pathologique - Bouira</Text>
        <View style={styles.date}>
            <AntDesign name="star" size={20} color="orange" />
          <Text style={styles.dateText}>4.0</Text>
          <Text style={styles.dateText}>50 evalutations</Text>
        </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffff",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
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
  }
});
