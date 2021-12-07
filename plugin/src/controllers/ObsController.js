const obs = require('../obs')

module.exports = {
  getScenes: async (request, response) => {
    if (!obs.getConnectionStatus()) {
      return response.json({ error: 'Não conectadado' })
    }

    const cenas = await obs.getScenes()
    return response.json(cenas)
  },
  swithScene: async (request, response) => {
    const { scene } = request.query

    if (!obs.getConnectionStatus()) {
      return response.json({ error: 'Não conectadado' })
    }

    const cenas = await obs.getScenes()

    if (cenas.includes(scene)) await obs.swithScene(scene)
    else return response.json({ error: 'Cena não encontrada' })
    return response.send()
  },
  record: async (request, response) => {
    const { command } = request.query

    if (!obs.getConnectionStatus()) {
      return response.json({ error: 'Não conectadado' })
    }

    await obs.record(command)
    return response.send()
  },
  stream: async (request, response) => {
    if (!obs.getConnectionStatus()) {
      return response.json({ error: 'Não conectadado' })
    }

    await obs.stream()
    return response.send()
  }
}
