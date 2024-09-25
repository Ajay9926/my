const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/productRoutes')
const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/myfirstapi")
  .then(() => {
    console.log('MongoDB is Connected')
  })
  .catch((err) => {
    console.log('Failed to Connect', err)
  })
app.use(router)

const port = 3000;
app.listen(port, () => {
  console.log(`Server is runnimg on port ${port}`)
})