const connection = require('./../database/connection')
const gerarID = require('../utils/idGenerator')
const buttonsController = require('./buttonsController')
const localAddressesController = require('./localAddressesController')

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
      localAddressesController.create(bdUser)

      return response.status(201).json({ id: user.id })
    } else {
      return response.status(409).json({ error: 'Usuário já cadastrado' })
    }
  }
}
