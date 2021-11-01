import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import useObs from '../../hooks/useObsWebSocket'
import api from '../../services/api'
import plugin from '../../services/plugin'

import { styles } from './styles'

export function Pad({ button }) {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    async function getURL() {
      try {
        const { data } = await api.get(`image/${button.id}`)
        setImageUrl(data.url)
      } catch {}
    }
    getURL()
  }, [])

  const {
    getScenes,
    swithToScene,
    startStopRecording,
    pauseRecording,
    resumeRecording,
    startStopStreaming
  } = useObs()

  async function handleClick() {
    switch (button.type) {
      case 'obs':
        handleObsCommand(button)
        break
      case 'system':
        handleSystemCommand(button)
        break
      default:
        break
    }
  }

  async function handleObsCommand(button) {
    if (button.category === 'scene') {
      const scenes = await getScenes()
      if (scenes[button.description] !== undefined) {
        await swithToScene(scenes[button.description])
      }
    } else if (button.category === 'record') {
      switch (button.description) {
        case 'start-stop':
          startStopRecording()
          break
        case 'pause':
          pauseRecording()
          break
        case 'resume':
          resumeRecording()
          break
        default:
          break
      }
    } else if (button.category === 'streaming') {
      startStopStreaming()
    }
  }

  function handleSystemCommand(button) {
    if ((button.category === 'link') | (button.category === 'shortcut')) {
      plugin.post(`/open?url=${button.description}`)
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Image
        style={styles.icon}
        source={{ uri: imageUrl !== '' ? imageUrl : undefined }}
      />
    </TouchableOpacity>
  )
}
