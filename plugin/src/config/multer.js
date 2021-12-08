const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'temp', 'uploads'),
  storage: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, path.resolve(__dirname, '..', '..', 'temp', 'uploads'))
    },
    filename: (request, file, callback) => {
      crypto.randomBytes(8, (err, hash) => {
        if (err) callback(err)
        const fileName = `${hash.toString('hex')}-${file.originalname}`
        callback(null, fileName)
      })
    }
  }),
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: (request, file, callback) => {
    const allowedMimes = [
      'application/octet-stream',
      'application/x-ms-shortcut'
    ]
    allowedMimes.includes(file.mimetype)
      ? callback(null, true)
      : callback(new Error('Invalid file type'))
  }
}
