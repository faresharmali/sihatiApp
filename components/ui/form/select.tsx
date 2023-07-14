// @ts-nocheck
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Input, Select } from "native-base";

interface props {
  label: string;
  validation: any;
  name: string;
  value: string;
  props?: any;
  onSelect: any;
  options: any;
}

const SelectInput: React.FC<props> = ({
  name,
  onSelect,
  label,
  validation,
  options,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Select
        selectedValue={value}
        minWidth="100%"
        backgroundColor={"#fff"}
        style={styles.input}
        isInvalid={validation.touched[name] && validation.errors[name]}
        placeholder="Selectionner"
        _selectedItem={{
          bg: "#1A87DD",
        }}
        mt={1}
        onValueChange={(itemValue) => onSelect(itemValue)}
      >
        {options.map((item: string, index: number) => (
          <Select.Item key={index} label={item} value={item} />
        ))}
      </Select>
     
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

export default SelectInput;
