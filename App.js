import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Layout from './solution/components/Layout';

export default function App() {

  return (
     <NavigationContainer>

     <Layout/>
     <Home/>


     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
