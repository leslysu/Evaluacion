import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {Screen2} from './Screen2';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'Screen1'> {}

export const Screen1 = ({navigation}: Props) => {
  return (
    <View style={styles.style}>
      <Button title="Imagen 1" onPress={() => navigation.navigate('Screen2')} />
      <Button title="Imagen 2" onPress={() => navigation.navigate('Screen3')} />
      <Button title="<=" onPress={() => navigation.navigate('Screen4')} />
      <Button title=">=" onPress={() => navigation.navigate('Screen5')} />
    </View>
  );
};
const styles=StyleSheet.create({
  style:{
    marginVertical:20
  }
})
