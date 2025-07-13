const { MongoClient }  = require('mongodb');

let dbConnection
let uri = process.env.MONGO_URI

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
