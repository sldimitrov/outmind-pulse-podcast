const { MongoClient }  = require('mongodb');

let dbConnection
// TODO: replace string with environment variable
let uri = 'mongodb+srv://outmindbros:I7JwWDHKopEq3BId@cluster0.magnzko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db()
        return cb()
      })
      .catch((err) => {
        console.error('Failed to connect to the database', err)
        return cb(err)
      })
  },
  getDb: () => dbConnection
}
