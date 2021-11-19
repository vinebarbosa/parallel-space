const connection = require('../database/connection')

const SessionController = {
  login: async (request, response) => {
    if (request.headers.authorization === undefined)
      return response.sendStatus(401)
    await connection('user').update({ token: '' })
    await connection('user').update({ token: request.headers.authorization })
    return response.send()
  },
  logout: async (request, response) => {
    await connection('user').update({ token: '' })
    return response.send()
  }
}

module.exports = SessionController
