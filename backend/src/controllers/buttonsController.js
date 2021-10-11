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
  }
}
