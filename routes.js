const express = require('express')
const router = express.Router()

const defalt_login_mame = process.env.LOGIN_NAME
const defalt_password = process.env.PASSWORD

router.post('/auth', (req, res) => {
    let message = 'ログインできません'
    const login_name = req.body.login_name
    const password = req.body.password
    console.log(login_name)
    console.log(password)
    res.send(message)

    if(login_name == defalt_login_mame
        && password == defalt_password)
        {message = 'ログインしました'}
        res.send(message)
})

router.get('/', (req, res) => {
    res.render('index.ejs')
})


router.get('/profile', (req, res) => {
    res.send('ホクホクのイモ')
})


module.exports = router