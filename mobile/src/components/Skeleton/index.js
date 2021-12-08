import React, { useEffect } from 'react'
import { View, Animated, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles'

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

export function Skeleton() {
  const AnimatedValue = new Animated.Value(0)

  useEffect(() => {
    Animated.loop(
      Animated.timing(AnimatedValue, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true
      })
    ).start()
  })

  const translateX = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-90, 90]
  })

  return (
    <View style={styles.container}>
      <AnimatedLinearGradient
        colors={['#292A2D', '#313237', '#292A2D']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          ...StyleSheet.absoluteFill,
          transform: [{ translateX: translateX }]
        }}
      />
    </View>
  )
}
