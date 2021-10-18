const connection = require('../database/connection')

module.exports = {
  create: async (request, response) => {
    const { email, password } = request.body

    const user = await connection('users')
      .select('*')
      .where('email', email)
      .first()

    if (user === undefined) {
      return response.status(404).json({ error: 'Usuário não cadastrado' })
    }

    if (user.password === password) {
      return response.json({ token: user.id, name: user.name })
    } else {
      return response.status(401).json({ error: 'Senha incorreta' })
    }
  }
}
