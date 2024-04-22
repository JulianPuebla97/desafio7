const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(`mongodb+srv://julianpuebla97:coderhouse@cluster0.fbnrglq.mongodb.net/tienda`)
  .then(() => console.log("Connected database"))
  .catch((error) => console.error("Error Establishing a Database Connection", error))