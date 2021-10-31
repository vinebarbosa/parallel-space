const { spawn } = require('child_process')

function open(request, response) {
  spawn('explorer', [request.headers.url])
  response.send()
}

module.exports = open
