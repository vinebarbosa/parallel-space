const open = require('open')

function launch(request, response) {
  const url = request.query.url

  if (url.includes('.lnk')) {
    open(url, { app: { name: 'explorer' } })
  } else {
    open(url)
  }

  response.send()
}

module.exports = launch
