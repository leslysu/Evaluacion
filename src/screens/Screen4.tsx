import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';

export const Screen4 = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  const handleCalculate = () => {
    if (!number1 || !number2) {
      Alert.alert('Error', 'Por favor ingrese números en ambos campos');
      return;
    }

    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      Alert.alert('Error', 'Por favor ingrese números válidos');
      return;
    }

    if (num1 > num2) {
      Alert.alert('Resultado', `${num1} es mayor que ${num2}`);
    } else if (num2 > num1) {
      Alert.alert('Resultado', `${num2} es mayor que ${num1}`);
    } else {
      Alert.alert('Resultado', 'Ambos números son iguales');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese un número"
        keyboardType="numeric"
        onChangeText={setNumber1}
        value={number1}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese un número"
        keyboardType="numeric"
        onChangeText={setNumber2}
        value={number2}
      />
      <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calcular Mayor</Text>
      </TouchableOpacity>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8C59EA',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

