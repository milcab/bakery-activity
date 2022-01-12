const express = require('express')
const breadsRouter = express.Router()

const bread = require('../models/bread')

// show list of breads
breadsRouter.get('/', async (req, res) => {
    const breads = await bread.find()

    res.render('breads/list', {
        title: "breads page",
        breads
    })
})

// SHOW bread by index
breadsRouter.get('/show/:breadId', async (req, res) => {
    const foundBread = await bread.findById(req.params.breadId);

    if (foundBread) {
        res.render('breads/show', {
            bread: foundBread,
            index: req.params.arrayIndex,
        })
    } else {
        res.render('error404')
    }
})

// SHOW bread by index
breadsRouter.get('/:arrayIndex/edit', async (req, res) => {
    const breads = await bread.find();

    if (breads[req.params.arrayIndex]) {
        res.render('breads/edit', {
            bread: breads[req.params.arrayIndex],
            index: req.params.arrayIndex,
        })
    } else {
        res.render('error404')
    }
})

// SHOW new bread form
breadsRouter.get('/new', (req, res) => {
    res.render('breads/new')
})

// SHOW edit bread form
breadsRouter.get('/edit/:arrayIndex', async (req, res) => {
    const breads = await bread.find();
    if (breads[req.params.arrayIndex]) {
        res.render('breads/edit', {
            bread: breads[req.params.arrayIndex],
            index: req.params.arrayIndex,
        })
    } else {
        res.render('error404')
    }
})

// UPDATE
breadsRouter.put('/:arrayIndex', (req, res) => {
    if (!req.body.image) {
        req.body.image = undefined
    }

    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }

    // breads[req.params.arrayIndex] = req.body
    res.redirect(`/breads`)
})

// NEW
breadsRouter.post('/:arrayIndex', (req, res) => {
    req.body.image = req.body.image || undefined
    req.body.hasGluten = req.body.hasGluten === 'on'

    bread.create(req.body).then(() => {
        res.redirect('/breads')
    });
})

breadsRouter.delete('/:id', (req, res) => {
    // const breads = await bread.find();
    // let id = Number(req.params.id)
    // if (isNaN(id)) {
    //     res.render('error404')
    // }
    // else if (!breads[id]) {
    //     res.render('error404')
    // }
    // else {
    //     // bread.splice(id, 1)
    res.redirect('/breads')
    // }
})

module.exports = breadsRouter