import { StatusBar } from 'expo-status-bar';
import React from 'react'; //to use JFX
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <>
    <View style={styles.container}>
    <Text style={styles.titleText}>
        LOGIN</Text>
    <StatusBar style="auto" />
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b4c68',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText:{
    fontFamily:"sans-serif",
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold",
  }
});
