const crypto = require('crypto')

module.exports = function gerarID(bytes) {
  return crypto.randomBytes(bytes).toString('HEX')
}
