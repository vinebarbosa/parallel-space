const express = require('express')

const routes = express.Router()

routes.post('/user', (request, response) => {
  response.json({
    mensagem: 'Usuário cadastrado com sucesso!'
  })
})

routes.get('/user', (request, response) => {
  response.json({
    user: 'Vinícios',
    token: 'jd29u2nd88'
  })
})

routes.put('/button', (request, response) => {
  console.log(request.body)
  response.sendStatus(200)
})

routes.get('/buttons', (request, response) => {
  response.json([
    {
      id: 0,
      type: 'obs',
      category: 'stream',
      scene: null,
      command: 'start',
      path: null,
      icon: 'https://parallelspacejs.com.br/image/23124'
    },
    {
      id: 1,
      type: 'system',
      category: 'open-app',
      scene: null,
      command: null,
      path: 'C:/programFiles/chrome/chrome.exe',
      icon: 'https://parallelspacejs.com.br/image/23124'
    }
  ])
})

routes.get('/image/:id', (request, response) => {
  console.log(request.params.id)
  response.json({ imagem: 'taí a tua imagem' })
})

module.exports = routes
