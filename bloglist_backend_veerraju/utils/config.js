require('dotenv').config()

let PORT = 3003
let MONGODB_URI = "mongodb://localhost:27017/"
let SECRET = process.env.SECRET

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI
}

module.exports = {
  MONGODB_URI,
  PORT,
  SECRET
}