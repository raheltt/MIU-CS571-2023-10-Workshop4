import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';


export default function App() {

  return (
      <View style={styles.container}>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
