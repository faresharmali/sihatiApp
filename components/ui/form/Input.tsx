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

const LabeledInput: React.FC<props> = ({name, label,validation,type,placeholder }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={styles.input}
        type={type}
        placeholder={placeholder}
        w="100%"
      />
      {validation.touched[name] && validation.errors[name] && (
        <Text style={styles.errorMessage}>{validation.errors[name]}</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({

  input: { backgroundColor: "#fff", height: 50,  },
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
