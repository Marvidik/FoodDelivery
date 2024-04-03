import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ placeholder, onChangeText, value, style }) => {
  return (
    <TextInput
      style={[styles.input, style]} // Merge the styles provided via props with the default styles
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#EAEDF1', 
  },
});

export default CustomTextInput;
