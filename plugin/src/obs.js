const OBSWebSocket = require('obs-websocket-js')
const obs = new OBSWebSocket()

let CONNECTED = false

async function connect() {
  try {
    await obs.connect({ address: 'localhost:4444' })
  } catch {
    setTimeout(() => connect(), 5000)
  }
}

function getConnectionStatus() {
  return CONNECTED
}

async function getScenes() {
  const { scenes } = await obs.send('GetSceneList')
  const cenas = []
  scenes.forEach((cena) => cenas.push(cena.name))
  return cenas
}

async function swithScene(scene) {
  await obs.send('SetCurrentScene', { 'scene-name': scene })
}

async function record(command) {
  switch (command) {
    case 'start-stop':
      await obs.send('StartStopRecording')
      break
    case 'pause':
      await obs.send('PauseRecording')
      break
    case 'resume':
      await obs.send('ResumeRecording')
      break
    default:
      break
  }
}

async function stream(command) {
  switch (command) {
    case 'start-stop':
      await obs.send('StartStopStreaming')
      break
  }
}

obs.on('Exiting', () => {
  CONNECTED = false
  connect()
})

obs.on('ConnectionOpened', () => {
  CONNECTED = true
})

exports.connect = connect
exports.getConnectionStatus = getConnectionStatus
exports.getScenes = getScenes
exports.swithScene = swithScene
exports.record = record
exports.stream = stream
