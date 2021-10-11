const connection = require('./../database/connection')
const crypto = require('crypto')

module.exports = {
  createAll: async (user) => {
    const buttons = []

    for (let index = 0; index < 15; index++) {
      buttons.push({
        id: crypto.randomBytes(4).toString('HEX'),
        position: index,
        user_id: user.id
      })
    }

    buttons.map(async (button) => {
      await connection('buttons').insert(button)
    })
  }
}
