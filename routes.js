const express = require('express')

const homeController = require('./controllers/HomeController')
const loginController = require('./controllers/LoginController')
const itemController = require('./controllers/Itemcontroller')

const item = require('./models/item')
const router = express.Router()

//HomeController
router.get('/', homeController.index)
router.get('/profile', homeController.profile)

//LoginController
router.get('/login', loginController.index)
router.post('/auth', loginController.auth)


module.exports = router