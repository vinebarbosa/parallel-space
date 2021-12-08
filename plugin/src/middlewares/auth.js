const connection = require('../database/connection')

async function Authenticate(request, response, next) {
  if (
    (request.headers.authorization === undefined) |
    (request.headers.authorization === '')
  )
    return response.sendStatus(401)

  const user = await connection('user')
    .select('*')
    .where('token', request.headers.authorization)
    .first()

  if (user === undefined) return response.sendStatus(401)

  return next()
}

module.exports = Authenticate
