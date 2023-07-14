import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Appointements = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Appointements</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"#fff"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});


export default Appointements