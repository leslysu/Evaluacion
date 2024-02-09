import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';
import { Screen3 } from '../screens/Screen3';
import { Screen5 } from '../screens/Screen5';
import { Screen4 } from '../screens/Screen4';
import { StyleSheet } from 'react-native';



//Lista de Screens que son parte de nuestra navegación
export type RootStackParamList={
Screen1: undefined;
Screen2: undefined;
Screen3: undefined;
Screen4: undefined;
Screen5: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator=()=>{
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle:{
            },
            
        }}>   
      <Stack.Screen  name="Screen1" options={{title: 'Bienvenidos'}} component={Screen1} />
      <Stack.Screen name="Screen2" options={{title: 'Screen 2'}} component={Screen2} />
      <Stack.Screen name="Screen3" options={{title: 'Screen 3'}} component={Screen3} />
      <Stack.Screen name="Screen4" options={{title: 'Screen 4'}} component={Screen4} />
      <Stack.Screen name="Screen5" options={{title: 'Screen 5'}} component={Screen5} />

    


    </Stack.Navigator>
  );
}

