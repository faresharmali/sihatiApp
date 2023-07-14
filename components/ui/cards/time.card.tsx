import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const TimaCard = ({ time,onDayPress }: any) => {
  return (
    <TouchableOpacity style={styles.card} onPress={()=>onDayPress(time)}>
      <Ionicons name="time-outline" size={24} color="black" />
      <Text style={styles.dateText}>{time}</Text>
    </TouchableOpacity>
  );
};

export default TimaCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffff",
    borderWidth: 2,
    borderColor: "#0000001a",
    width: "100%",
    height: 50,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
  },
  dateText: {
    color: "#000",
  },
});
