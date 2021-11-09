const connection = require('../database/connection')

module.exports = {
  get: async function (request, response) {
    const id = request.headers.authorization
    // eslint-disable-next-line camelcase
    const { local_address } = await connection('local_addresses')
      .select('*')
      .where('user_id', id)
      .first()

    return response.json({ localAddress: local_address })
  },

  create: async function (request, response) {
    const row = {
      local_address: request.headers.localaddress,
      user_id: request.headers.authorization
    }

    await connection('local_addresses').insert(row)

    return response.sendStatus(201)
  }
}
