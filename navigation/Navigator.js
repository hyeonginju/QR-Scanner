import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';
import QRscanner from '../screen/QRscanner';
import Setting from '../screen/Setting';

const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="QRscanner"
          component={QRscanner}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Setting" component={Setting}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
