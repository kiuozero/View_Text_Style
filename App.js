import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.boldText}>Hello Guys</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>let <Text>my</Text> go</Text>
        <Text>let go</Text>
        <Text>let go</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a6e4d0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'red',
    padding: 20,
  },
  boldText:{
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: '#fff',
    padding: 20,
  }
});

