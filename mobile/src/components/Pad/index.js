import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Image } from 'react-native'

import api from '../../services/api'
import plugin from '../../services/plugin'

import { Skeleton } from '../Skeleton'

import { styles } from './styles'

export function Pad({ button }) {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    async function getPluginAddress() {
      const { data } = await api.get('localaddress')
      plugin.defaults.baseURL = data.localAddress

      getURL()
    }

    async function getURL() {
      try {
        const { data } = await api.get(`image/${button.id}`)
        setImageUrl(data.url)
      } catch {}
    }
    getPluginAddress()
  }, [])

  useEffect(() => {
    async function getURL() {
      try {
        const { data } = await api.get(`image/${button.id}`)
        setImageUrl(data.url)
      } catch {}
    }
    getURL()
  }, [])

  async function getScenes() {
    const { data } = await plugin.get('scenes')
    if (data.error !== undefined) return data.error
    else return data
  }

  async function swithToScene(scene) {
    await plugin.post(`scene?scene=${scene}`)
  }

  async function startStopRecording() {
    await plugin.post(`record?command=start-stop`)
  }

  async function pauseRecording() {
    await plugin.post(`record?command=pause`)
  }

  async function resumeRecording() {
    await plugin.post(`record?command=resume`)
  }

  async function startStopStreaming() {
    await plugin.post(`stream?command=start-stop`)
  }

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

      if (typeof scenes === typeof []) {
        await swithToScene(button.description)
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
    <>
      {button?.id && (
        <TouchableOpacity style={styles.container} onPress={handleClick}>
          <Image
            style={styles.icon}
            source={{ uri: imageUrl !== '' ? imageUrl : undefined }}
          />
        </TouchableOpacity>
      )}
      {!button?.id && <Skeleton />}
    </>
  )
}
