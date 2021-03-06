import React, { createContext, useEffect, useState } from 'react'

import api from '../services/api'
import { plugin }  from '../services/plugin'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [name, setName] = useState('')

  async function Login(email, password) {
    try {
      const response = await api.post('session', { email, password })

      const { token, name } = response.data

      if (token && name) {
        localStorage.setItem('@ParallelSpace:name', name)
        localStorage.setItem('@ParallelSpace:token', token)
        api.defaults.headers.common.Authorization = token
        plugin.defaults.headers.common.Authorization = token
        setName(name)
      }
    } catch (e) {
      return e.response.data.error
    }
  }

  async function Logout() {
    localStorage.clear()
    setName('')
    try {
      await plugin.post('logout')
    } catch{}
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
    function LoadStoragedData() {
      const _name =  localStorage.getItem('@ParallelSpace:name')
      const _token = localStorage.getItem('@ParallelSpace:token')

      if (_token && _name) {
        api.defaults.headers.common.Authorization = _token
        plugin.defaults.headers.common.Authorization = _token
        setName(_name)
      }
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
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
