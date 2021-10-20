import React, { createContext } from 'react'
import api from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  async function Login(email, password) {
    try {
      await api.post('session', { email, password })
    } catch (error) {
      return error.response.data.error
    }
  }

  async function Registro(email, password, name) {
    try {
      await api.post('user', { email, password, name })
      return 'OK'
    } catch (error) {
      return error.response.data.error
    }
  }
  return (
    <AuthContext.Provider value={{ Login, Registro }}>
      {children}
    </AuthContext.Provider>
  )
}
