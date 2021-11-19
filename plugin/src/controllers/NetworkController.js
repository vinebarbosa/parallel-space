const ip = require('ip')

const NetworkController = {
  get: async (request, response) => {
    return response.json({ localAddress: ip.address() })
  }
}

module.exports = NetworkController
