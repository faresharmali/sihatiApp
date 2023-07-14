import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Avatar } from "native-base";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


// create array of time slots for each day from 8:00 to 18:00 with 30 min interval



const AppointmentCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.head}>
        <Avatar
          size="md"
          bg="indigo.500"
          source={require("../../../assets/images/doctor.png")}
        
        >
          JB
        </Avatar>
        <View>
          <Text style={styles.cardTitle}>Dr . Muhammed</Text>
          <Text style={styles.cardSpeciality}>Gastro</Text>
        </View>
      </View>
        <View style={styles.date}>
        <AntDesign name="calendar" size={24} color="white" />
            <Text style={styles.dateText}>Dimanche , 29 Juillet</Text>
            <Ionicons name="time-outline" size={24} color="white" />
            <Text style={styles.dateText}>12:00</Text>
        </View>
    </View>
  );
};

export default AppointmentCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1A87DD",
    width: "100%",
    minHeight: 100,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  head: {
    flexDirection: "row",
     gap: 10,
     alignItems: "center",
  },
  cardTitle: {
    color: "#fff",
    fontSize: 20,

  },
    cardSpeciality: {
    color: "#fff",

    },
    date:{
        backgroundColor:"#ffffff59",
        width:"100%",
        height:50,
        marginTop:10,
        borderRadius:10,
        flexDirection:"row",
        gap:10,
        alignItems:"center",
        padding:5,
    },
    dateText:{
        color:"#fff",
    }
});
