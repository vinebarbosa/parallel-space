import React from 'react'
import { View } from 'react-native'

import styles from './styles'

function HorizontalContainer({ children }) {
  return <View style={styles.container}>{children}</View>
}

export default HorizontalContainer
