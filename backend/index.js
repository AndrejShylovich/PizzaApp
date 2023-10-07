const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const dotenv = require('dotenv').config()
const app = express()


//connect DB
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, () => console.log('DB is successfully connected'))

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//start server
const pizzasController = require('./controllers/pizzasController')

app.use('/api/pizzas', pizzasController)

const port = process.env.PORT || 8000;

app.listen(port, () => console.log('Server is running'))

