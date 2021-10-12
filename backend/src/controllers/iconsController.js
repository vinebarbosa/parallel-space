const aws = require('aws-sdk')
const s3 = new aws.S3()

const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const connection = require('./../database/connection')

module.exports = {
  upload: async (request, response) => {
    try {
      const { key, originalname: name, location: _url = '' } = request.file

      // eslint-disable-next-line camelcase
      const button_id = request.headers.buttonid
      const userId = request.headers.authorization

      const bdUser = await connection('users')
        .select('*')
        .where('id', userId)
        .first()

      const bdButton = await connection('buttons')
        .select('*')
        .where('id', button_id)
        .first()

      if (bdUser.id !== bdButton.user_id) {
        response.status(401).json({ error: 'Não autorizado' })
      }

      if (bdUser.id === bdButton.user_id) {
        const id = key.slice(0, 32)
        let url = _url
        if (url === '') url = `${process.env.APP_URL}/files/${key}`
        const newImage = { id, key, name, url, button_id }
        await connection('icons').insert(newImage)
        response.send(newImage)
      } else {
        return response.status(401).json({ error: 'Não autorizado' })
      }
    } catch {
      return response.sendStatus(400)
    }
  },

  get: async (request, response) => {
    const imageId = request.params.id
    const image = await connection('icons').where('id', imageId).first()

    if (image) return response.send(image)
    else return response.status(404).json({ error: 'Imagem não encontrada' })
  },

  delete: async (request, response) => {
    try {
      const imageId = request.params.id
      const userId = request.headers.authorization

      const bdUser = await connection('users')
        .select('*')
        .where('id', userId)
        .first()

      const image = await connection('icons')
        .select('*')
        .where('id', imageId)
        .first()

      const bdButton = await connection('buttons')
        .select('*')
        .where('id', image.button_id)
        .first()

      if (bdUser.id !== bdButton.user_id) {
        response.status(401).json({ error: 'Não autorizado' })
      }

      if (process.env.STORAGE_TYPE === 's3') {
        await s3
          .deleteObject({
            Bucket: process.env.AWS_BUCKET,
            Key: image.key
          })
          .promise()
      } else {
        promisify(fs.unlink)(
          path.resolve(__dirname, '..', '..', 'temp', 'uploads', image.key)
        )
      }
      await connection('icons').where('id', imageId).delete()
      return response.send()
    } catch (error) {
      return response.sendStatus(400)
    }
  }
}
