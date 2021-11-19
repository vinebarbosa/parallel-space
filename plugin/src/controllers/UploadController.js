const multer = require('multer')
const path = require('path')

const multerConfig = require('../config/multer')

const UploadController = {
  upload: multer(multerConfig).single('file'),
  handleResponse: (request, response) => {
    const { destination, filename } = request.file
    return response.json({ filePath: path.resolve(destination, filename) })
  }
}

module.exports = UploadController
