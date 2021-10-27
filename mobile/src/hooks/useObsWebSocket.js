import { useContext } from 'react'

import { ObsContext } from '../contexts/ObsContext'

export default function useObs() {
  return useContext(ObsContext)
}
