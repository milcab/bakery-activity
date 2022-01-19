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

function goHome(res) {
    res.status(303).redirect('/breads')
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
        goHome(res);
    });
})

// [GET] /breads/breadId Renders Bread Details Page
breadsRouter.get('/bread/:breadId', async (req, res) => {
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
    bread.findByIdAndUpdate(req.params.breadId, breadData, { new: true }).then(() => {
        goHome(res);
    });
})

// [DELETE] /breads/breadId Deletes Bread by Id
breadsRouter.delete('/:breadId', (req, res) => {
    bread.findByIdAndDelete(req.params.breadId)
        .then(() => {
            goHome(res);
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
        goHome(res);
    });
})

module.exports = breadsRouter