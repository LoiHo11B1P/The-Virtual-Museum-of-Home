const router = require('express').Router()
const res = require('express/lib/response')
// const db = require('../models')

router.get('/', (req, res) => {
    res.json('Users Controller is working')
})

module.exports = router