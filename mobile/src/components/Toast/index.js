import React, { useEffect, useRef } from 'react'

import { Animated, Text } from 'react-native'

function Toast(props) {
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.delay(2000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      })
    ]).start(() => {
      props.onHide()
    })
  }, [])

  return (
    <Animated.View
      style={{
        opacity,
        transform: [
          {
            translateY: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [-20, 0]
            })
          }
        ],
        margin: 10,
        marginBottom: 5,
        backgroundColor: props.color,
        padding: 10,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 6,
        position: 'absolute',
        top: 35,
        left: 10,
        right: 10
      }}
    >
      <Text
        style={{
          color: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: 18,
          fontWeight: '600'
        }}
      >
        {props.message}
      </Text>
    </Animated.View>
  )
}

export default Toast
