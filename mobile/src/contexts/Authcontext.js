import React, { createContext, useEffect, useState } from 'react'
import api from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  async function Login(email, password) {
    try {
      const response = await api.post('session', { email, password })

      const { token, name } = response.data

      if (token && name) {
        await AsyncStorage.setItem('@ParallelSpaceJS:name', name)
        await AsyncStorage.setItem('@ParallelSpaceJS:token', token)
        api.defaults.headers.common.Authorization = token
        setName(name)
      }
    } catch (error) {
      return error.response.data.error
    }
  }

  async function Logout() {
    await AsyncStorage.clear()
    setName('')
  }

  async function Registro(email, password, name) {
    try {
      await api.post('user', { email, password, name })
      return 'OK'
    } catch (error) {
      return error.response.data.error
    }
  }

  useEffect(() => {
    async function LoadStoragedData() {
      const _name = await AsyncStorage.getItem('@ParallelSpaceJS:name')
      const _token = await AsyncStorage.getItem('@ParallelSpaceJS:token')

      if (_token && _name) {
        api.defaults.headers.common.Authorization = _token
        setName(_name)
      }
      setIsLoading(false)
    }
    LoadStoragedData()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        Login,
        Registro,
        Logout,
        signed: name !== '',
        name: name,
        isLoading: isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
