import React, { createContext, useEffect, useState } from 'react'
import ObsWebSocket from 'obs-websocket-js'

export const ObsContext = createContext({})

export function ObsProvider({ children }) {
  const _obs = new ObsWebSocket()

  const [obs, setObs] = useState(new ObsWebSocket())

  useEffect(() => {
    async function connectToObs() {
      await _obs.connect({ address: '192.168.0.104:4444' })
      setObs(_obs)
    }
    connectToObs()
  }, [])

  async function getScenes() {
    const { scenes } = await obs.send('GetSceneList')
    const scenesNames = []
    scenes.map((scene) => {
      return scenesNames.push(scene.name)
    })
    return scenesNames
  }

  async function swithToScene(scene) {
    await obs.send('SetCurrentScene', { 'scene-name': scene })
  }

  async function startStopRecording() {
    await obs.send('StartStopRecording')
  }

  async function pauseRecording() {
    await obs.send('PauseRecording')
  }

  async function resumeRecording() {
    await obs.send('ResumeRecording')
  }

  async function startStopStreaming() {
    await obs.send('StartStopStreaming')
  }

  return (
    <ObsContext.Provider
      value={{
        getScenes,
        swithToScene,
        startStopRecording,
        pauseRecording,
        resumeRecording,
        startStopStreaming
      }}
    >
      {children}
    </ObsContext.Provider>
  )
}
