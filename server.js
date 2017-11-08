const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const router = require('./router')
const app = express()

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
router(app)

mongoose.connect('mongodb://localhost/to-do')
const db = mongoose.connection
db.on('error', () => console.error('@mongoose Connection error'))
db.on('open', () => console.log('@mongoose Connection open'))

app.listen(3001, () => console.log('App is listening at port 3001!'))
