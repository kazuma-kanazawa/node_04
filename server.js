const express = require('express')

const dotenv = require('dotenv')

require('dotenv').config()
const host = process.env.HOST
const port = process.env.PORT

const routes = require('./routes')

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))

const layouts = require('express-ejs-layouts')
app.set('layouts', 'layouts/default');
app.set('view engine', 'ejs')
app.use(layouts);

app.use(routes)

app.listen(port, host, () => {
    console.log('http://' + host + ':' + port)
})