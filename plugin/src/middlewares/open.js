const { spawn } = require('child_process')
const _open = require('open')

function open(request, response) {
  const url = request.query.url

  if (url.includes('.lnk')) {
    spawn('explorer', [url])
  } else {
    _open(url)
  }

  response.send()
}

module.exports = open
