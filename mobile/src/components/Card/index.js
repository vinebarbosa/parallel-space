import React from 'react'
import { View, StyleSheet } from 'react-native'

function Card({ altura, children }) {
  const styles = StyleSheet.create({
    card: {
      height: altura,
      width: '80%',
      backgroundColor: '#202024',
      borderRadius: 20,
      alignItems: 'center'
    }
  })
  return <View style={styles.card}>{children}</View>
}

export default Card
