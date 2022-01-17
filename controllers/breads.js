const express = require('express')
const breadsRouter = express.Router()
const mockData = require("./mockData.json")
const bread = require('../models/bread')

function cleanFormData(formData) {
    return {
        ...formData,
        image: formData.image || undefined,
        hasGluten: formData.hasGluten === 'on'
    }
}

// [GET] /breads renders list of breads
breadsRouter.get('/', async (req, res) => {
    const breads = await bread.find()

    res.render('breads/list', {
        title: "breads page",
        breads
    })
})

// [POST] /breads Add new bread object
breadsRouter.post('/', (req, res) => {
    const breadData = cleanFormData(req.body);

    bread.create(breadData).then(() => {
        res.redirect('/breads')
    });
})

// [GET] /breads/breadId Renders Bread Details Page
breadsRouter.get('/:breadId', async (req, res) => {
    const foundBread = await bread.findById(req.params.breadId);

    if (foundBread) {
        res.render('breads/show', {
            bread: foundBread
        })
    } else {
        res.render('error404')
    }
})

// [PUT] /breads/breadId updates Bread by Id
breadsRouter.put('/:breadId', async (req, res) => {
    const breadData = cleanFormData(req.body);
    bread.findByIdAndUpdate(req.params.breadId, breadData).then(() => {
        res.redirect('/breads')
    });
})

// [DELETE] /breads/breadId Deletes Bread by Id
breadsRouter.delete('/:breadId', (req, res) => {
    bread.findByIdAndDelete(req.params.breadId)
        .then(() => {
            res.status(303).redirect('/breads')
        })
})

// [GET] /breads/breadId/edit Renders Edit Form by bread Id
breadsRouter.get('/:breadId/edit', async (req, res) => {
    const { breadId } = req.params;
    const foundBread = await bread.findById(breadId);
    if (foundBread) {
        res.render('breads/edit', {
            bread: foundBread
        })
    } else {
        res.render('error404')
    }
})

// [GET] /breads/new Renders renders new bread form page
breadsRouter.get('/new', (req, res) => {
    res.render('breads/new')
})

// [GET] /breads/mockData adds 4 test breads to collection and redirects to /breads
breadsRouter.get('/mockData', (req, res) => {
    bread.insertMany(mockData).then(() => {
        res.redirect('/breads')
    });
})

module.exports = breadsRouter