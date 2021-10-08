import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pedro corno</Text>
      <StatusBar backgroundColor="#FFF" style="dark" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#FFF',
    fontSize: 18
  }
})
