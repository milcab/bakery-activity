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

// UPDATE
breadsRouter.put('/:arrayIndex', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }

    breads[req.params.arrayIndex] = req.body
    res.redirect(`/breads/${req.params.arrayIndex}`)
})

// NEW
breadsRouter.post('/:arrayIndex', (req, res) => {
    // TODO: add new bread to the breads array
})

breadsRouter.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!breads[id]) {
        res.render('error404')
    }
    else {
        breads.splice(id, 1)
        res.redirect('/breads')
    }
})

module.exports = breadsRouter