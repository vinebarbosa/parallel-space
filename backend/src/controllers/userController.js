const connection = require('./../database/connection')
const gerarID = require('./../utils/idGenerator')
const buttonsController = require('./buttonsController')

module.exports = {
  create: async (request, response) => {
    const { name, email, password } = request.body

    const id = gerarID(4)

    const user = {
      id,
      email,
      name,
      password
    }

    const bdUser = await connection('users')
      .select('*')
      .where('email', email)
      .first()

    // Criar o usuário
    if (bdUser === undefined) {
      await connection('users').insert(user)

      const bdUser = await connection('users')
        .select('*')
        .where('id', user.id)
        .first()

      buttonsController.createAll(bdUser)

      return response.json({ id: user.id })
    } else {
      return response.json({ error: 'Usuário já cadastrado' }).status(400)
    }
  },
  get: async (request, response) => {
    const { email, password } = request.body

    const user = await connection('users')
      .select('*')
      .where('email', email)
      .first()

    if (user === undefined) {
      return response.json({ error: 'Usuário não cadastrado' }).status(404)
    }

    if (user.password === password) {
      return response.json({ token: user.id })
    } else {
      return response.json({ error: 'Senha inválida' }).status(401)
    }
  }
}
