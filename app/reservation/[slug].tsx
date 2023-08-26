import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";

import React,{useEffect, useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TimaCard from "../../components/ui/cards/time.card";
import { useLocalSearchParams, useRouter } from "expo-router";
import { CreateAppointement, getDoctorAppointements, getDoctorFreeTime } from "../../api/appointements";
import useAuth from "../../hooks/useAuth";
import { Button, HStack, Modal, VStack } from "native-base";

const index = () => {
  const { slug } = useLocalSearchParams();
  const { user } = useAuth();
  const router = useRouter();
  
  const [selected, setSelected] = React.useState<any>({
    dateString: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
  });

  const [FreeTimes, setFreeTimes] = useState([])

  const [selectedTime, setSelectedTime] = React.useState<any>(new Date());
  const [isFetching, setIsFetching] = React.useState(false);
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

  const times = timeSlots();
  const isWeekend = (date: string) => {
    const day = new Date(date).getDay();
    return day === 5;
  };
  const [showModal, setShowModal] = useState(false);
  const onTimePress = async (time: any) => {
    setSelectedTime(time)
    setShowModal(true);

  };
  const onConfirm = async () => {
    const appointement = {
      doctorId: slug,
      patientId: user.identifier,
      date: selected.dateString,
      timeIndex:times.indexOf(selectedTime),
      selectedTime,
    };
    try {
      const data = await CreateAppointement(appointement, user.token);
      setShowModal(false);
      router.replace("/patient/appointements");
      console.log("data",data);
    } catch (e:any) {
      console.log("err",e.response.data);
    }
  }



  const getAppointements = async (day?:any) => {
    if (!user.token) return;
    const dayString=day?day.dateString:selected.dateString
    console.log("dayString",dayString);

    try {
      setIsFetching(true);
      const data = await getDoctorFreeTime(user.token, slug as string,dayString);
      setFreeTimes(data);
      setIsFetching(false);

    } catch (e: any) {
      console.log("err", e.response.data);
    }

  };
  useEffect(() => {
    getAppointements();
  }, [user]);



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
            getAppointements(day);
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
      {selected && !isWeekend(selected.dateString) && (
        <View style={styles.DatesContainer}>
          <Text style={styles.datesTitle}>
            Disponibilité de {selected.dateString}
          </Text>
          <ScrollView style={{ width: "100%" }}>
            {isFetching ? <Text>Loading...</Text> : (

              <View style={styles.timesContainer}>
              {FreeTimes.map((time: any, index: number) => (
                <TimaCard onDayPress={onTimePress} time={time} key={index} />
                ))}
            </View>
                )}
          </ScrollView>
        </View>
      )}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Confirmation</Modal.Header>
          <Modal.Body>
           <Text>Rendez vous le : {selected.dateString} à {selectedTime}  </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" onPress={onConfirm}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
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
