import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TimaCard from "../../components/ui/cards/time.card";
import { useLocalSearchParams } from 'expo-router';

const index = () => {
  const { slug } = useLocalSearchParams();
  const [selected, setSelected] = React.useState<any>({
    dateString: "2021-05-16",
  });
  const timeSlots = () => {
    let slots: any = [];
    let start = 8;
    let end = 16;
    for (let i = start; i < end; i++) {
      slots.push(`${i}:00 - ${i}:30`);
      slots.push(`${i}:30 - ${i + 1}:00`);
    }
    return slots;
  };
  const isWeekend = (date:string) => {
    const day = new Date(date).getDay();
    return  day === 5;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Reservation</Text>
      </View>
      <View style={{ paddingTop: 0 }}>
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
      {selected && !isWeekend(selected.dateString) &&   (
        <View style={styles.DatesContainer}>
          <Text style={styles.datesTitle}>
            Disponibilité de {selected.dateString}
          </Text>
          <ScrollView style={{ width: "100%" }}>
            <View style={styles.timesContainer}>
              {timeSlots().map((time: any, index: number) => (
                <TimaCard time={time} key={index} />
              ))}
            </View>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#1A87DD",
    height: 50,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  DatesContainer: {
    padding: 10,
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  datesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  timesContainer: {
    width: "100%",
    marginTop: 10,
  },
});
