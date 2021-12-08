import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFF'
  },
  logoContainer: {
    width: '30%',
    height: '100%',
    backgroundColor: '#121214',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoutButton: {
    position: 'absolute',
    top: 20,
    left: 15,
    flexDirection: 'row'
  },
  logoutButtonText: {
    color: '#CCC',
    paddingLeft: 5
  },
  pads: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
