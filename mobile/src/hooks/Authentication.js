import { useContext } from 'react'

import { AuthContext } from '../contexts/Authcontext'

export default function useAuth() {
  return useContext(AuthContext)
}
