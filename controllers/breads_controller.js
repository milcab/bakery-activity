const express = require('express')
const breadsRouter = express.Router()
const breadsModel = require('../models/bread.js')

breadsRouter.get('/', (req, res) => {
    res.json(breadsModel)
})

// INDEX
breadsRouter.get('/index', (req, res) => {
    res.render('index', { name: "milca" })
})

module.exports = breadsRouter