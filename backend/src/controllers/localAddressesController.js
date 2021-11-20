const connection = require('../database/connection')

module.exports = {
  get: async function (request, response) {
    const id = request.headers.authorization
    try {
      // eslint-disable-next-line camelcase
      const { local_address } = await connection('local_addresses')
        .select('*')
        .where('user_id', id)
        .first()

      return response.json({ localAddress: local_address })
    } catch {
      return response.json({ error: 'Usuário não autorizado' })
    }
  },
  create: async (user) => {
    const row = {
      local_address: '',
      user_id: user.id
    }

    await connection('local_addresses').insert(row)
  },
  update: async function (request, response) {
    const row = {
      local_address: request.query.local_address,
      user_id: request.headers.authorization
    }

    try {
      await connection('local_addresses')
        .where('user_id', row.user_id)
        .update(row)
      return response.send()
    } catch (err) {
      return response.sendStatus(401)
    }
  }
}
