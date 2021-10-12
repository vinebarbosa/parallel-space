const connection = require('./../database/connection')
const gerarID = require('./../utils/idGenerator')

module.exports = {
  createAll: (user) => {
    const buttons = []

    for (let index = 0; index < 15; index++) {
      buttons.push({
        id: gerarID(4),
        position: index,
        user_id: user.id
      })
    }

    buttons.map(async (button) => {
      await connection('buttons').insert(button)
    })
  },
  get: async (request, response) => {
    const id = request.headers.authorization
    const buttons = await connection('buttons').select('*').where('user_id', id)
    if (buttons.length === 0) {
      return response.status(401).json({ error: 'Usuário não autorizado' })
    }
    return response.json(buttons)
  },
  update: async (request, response) => {
    try {
      const button = request.body
      const id = request.headers.authorization // id de quem está logado

      const bdButton = await connection('buttons')
        .select('*')
        .where('id', button.id)
        .first()
      // Se o usuário que está tentando modificar o botão foi quem o criou
      if (id === bdButton.user_id) {
        await connection('buttons').where('id', button.id).update(button)
        return response.sendStatus(204)
      } else {
        return response.status(401).json({ error: 'Usuário não autorizado' })
      }
    } catch {
      return response.status(400).json({ error: 'Requisição inválida' })
    }
  }
}
