import { useContext } from 'react'

import { AuthContext } from '../contexts/Authcontext'

export function useAuth() {
  return useContext(AuthContext)
}
