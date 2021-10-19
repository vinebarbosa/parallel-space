import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '80%',
    marginBottom: 15
  },
  input: {
    height: 50,
    flex: 1,
    backgroundColor: '#121214',
    color: '#FFF',
    fontSize: 16,
    paddingHorizontal: 50,
    borderRadius: 10
  },
  icon: {
    position: 'absolute',
    left: 12,
    top: 13
  },
  securityIcon: {
    position: 'absolute',
    top: 13,
    right: 15
  }
})
