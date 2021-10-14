import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#121214',
    marginTop: Constants.statusBarHeight,
    alignItems: 'center'
  },
  title: {
    marginTop: '30%',
    marginBottom: '20%'
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: '10%'
  },
  registerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  registerText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFF'
  },
  registerTextLink: {
    fontSize: 16,
    color: '#8257E5',
    fontWeight: '400'
  }
})
