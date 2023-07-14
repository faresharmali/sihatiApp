import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Input } from "native-base";

interface props {
  label: string;
  validation: any;
  name: string;
  type: "text" | "password" | undefined;
  placeholder: string;
  value: string;
  props?: any;
  onChangeText: any;
  onBlur: any;
}

const LabeledInput: React.FC<props> = ({
  name,
  onChangeText,
  onBlur,
  label,
  validation,
  type,
  placeholder,
  value
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Input
        onChangeText={onChangeText}
        onBlur={onBlur}
        style={styles.input}
        isInvalid={validation.touched[name] && validation.errors[name]}
  
        type={type}
        placeholder={placeholder}
        w="100%"
        value={value}
      />
     
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: { backgroundColor: "#fff", height: 50,

 },
  label: {
    color: "#fff",

    marginBottom: 5,
  },
  errorMessage: {
    color: "red",
    marginTop: 5,
  },
});

export default LabeledInput;
