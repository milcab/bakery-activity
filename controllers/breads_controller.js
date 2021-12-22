const express = require('express')
const breadsRouter = express.Router()
const breadsModel = require('../models/bread')

breadsRouter.get('/', (req, res) => {
    res.render('index', {
        title: "breads page",
        breads: breadsModel
    })
})

// INDEX
breadsRouter.get('/index', (req, res) => {
    res.render('index', { name: "milca" })
})

module.exports = breadsRouter