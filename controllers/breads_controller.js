const express = require('express')
const breadsRouter = express.Router()
const breadsModel = require('../models/bread')


breadsRouter.get('/', (req, res) => {
    res.render('index', {
        title: "breads page",
        breads: breadsModel
    })
})

// SHOW
breadsRouter.get('/:arrayIndex', (req, res) => {
    if (breadsModel[req.params.arrayIndex]) {
        res.render('breads/show/index', {
            bread: breadsModel[req.params.arrayIndex],
            index: req.params.arrayIndex,
        })
    } else {
        res.render('404')
    }
})

breadsRouter.delete('/:arrayIndex', (req, res) => {
    res.send('deleted')
})

breadsRouter.post('/:arrayIndex', (req, res) => {
    res.send('ok')
})

module.exports = breadsRouter