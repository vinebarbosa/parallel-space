const connection = require('./../database/connection')
const crypto = require('crypto')
const buttonsController = require('./buttonsController')

module.exports = {
  create: async (request, response) => {
    const { name, email, password } = request.body

    const id = crypto.randomBytes(4).toString('HEX')

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

    if (bdUser === undefined) {
      // Criar o usuário
      await connection('users').insert(user)

      const bdUser = await connection('users')
        .select('*')
        .where('id', user.id)
        .first()

      buttonsController.createAll(bdUser)

      return response.json(user.id)
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
