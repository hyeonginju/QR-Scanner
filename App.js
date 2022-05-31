import React from 'react';
import Navigator from './navigation/Navigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
enableScreens();

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
}
