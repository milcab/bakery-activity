const express = require('express')
const breadsRouter = express.Router()
const breads = require('../models/bread')

// show list of breads
breadsRouter.get('/', (req, res) => {
    res.render('breads/list', {
        title: "breads page",
        breads: breads
    })
})

// SHOW bread by index
breadsRouter.get('/:arrayIndex', (req, res) => {
    if (breads[req.params.arrayIndex]) {
        res.render('breads/show', {
            bread: breads[req.params.arrayIndex],
            index: req.params.arrayIndex,
        })
    } else {
        res.render('404')
    }
})

// SHOW new bread form
breadsRouter.get('/new', (req, res) => {
    res.render('breads/new')
})

// SHOW edit bread form
breadsRouter.get('/edit/:arrayIndex', (req, res) => {
    if (breads[req.params.arrayIndex]) {
        res.render('breads/edit', {
            bread: breads[req.params.arrayIndex],
            index: req.params.arrayIndex,
        })
    } else {
        res.render('404')
    }
})

// NEW
breadsRouter.post('/:arrayIndex', (req, res) => {
    // TODO: add new bread to the breads array
})

// DELETE
breadsRouter.delete('/:arrayIndex', (req, res) => {
    // TODO: remove bread from the breads array by arrayIndex
})

// EDIT
breadsRouter.put('/:arrayIndex', (req, res) => {
    // TODO: edit bread from the breads array by arrayIndex
})

module.exports = breadsRouter