const express = require('express')
const mongoose = require('mongoose')

const dotenv = require('dotenv').config()
const app = express()

//connect DB
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, () => console.log('DB is successfully connected'))

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//start server

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server is running'))

