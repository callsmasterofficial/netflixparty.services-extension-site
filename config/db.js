const mongoose = require('mongoose')

module.exports = function () {
  return new Promise((resolve, reject) => {
    if (mongoose.connection.readyState === 1) {
      return resolve()
    }
    mongoose.connect(
      `mongodb+srv://manavthakkar:wakandaforever@cluster0.qhwgn.mongodb.net/extensionDB?retryWrites=true&w=majority`
    )

    mongoose.connection.on('connected', () => {
      resolve()
    })

    mongoose.connection.on('error', (err) => {
      reject()
    })
  })
}
