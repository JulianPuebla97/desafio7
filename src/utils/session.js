const session = require("express-session")
const MongoStore = require("connect-mongo")
require("dotenv").config()

const mainSession = (app) => {
  app.use(session({
    secret: "secretCoder",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://julianpuebla97:coderhouse@cluster0.fbnrglq.mongodb.net/tienda`,
      ttl: 24 * 60 * 60
    })
  }))
}

module.exports = mainSession