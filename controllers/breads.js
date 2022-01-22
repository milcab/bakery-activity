const express = require('express')
const bread = express.Router()
const mockData = require("./mockData.json")
const Bread = require('../models/bread')
const Baker = require('../models/baker')

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
bread.get('/', async (req, res) => {
    const breads = await Bread.find()
    const bakers = await Baker.find()

    res.render('index', {
        breads,
        bakers,
        title: 'Index Page'
    })
})

// [POST] /breads Add new bread object
bread.post('/', (req, res) => {
    const breadData = cleanFormData(req.body);

    Bread.create(breadData).then(() => {
        goHome(res);
    });
})

// [GET] /breads/breadId Renders Bread Details Page
bread.get('/bread/:breadId', async (req, res) => {
    const foundBread = await Bread.findById(req.params.breadId);

    if (foundBread => {
        const bakedBy = foundBread.getBakedBy()
        console.log(bakedBy)
    }) {
        res.render('breads/show', {
            bread: foundBread
        })
    } else {
        res.render('error404')
    }
})

// [PUT] /breads/breadId updates Bread by Id
bread.put('/:breadId', async (req, res) => {
    const breadData = cleanFormData(req.body);
    Bread.findByIdAndUpdate(req.params.breadId, breadData, { new: true }).then(() => {
        goHome(res);
    });
})

// [DELETE] /breads/breadId Deletes Bread by Id
bread.delete('/:breadId', (req, res) => {
    Bread.findByIdAndDelete(req.params.breadId)
        .then(() => {
            goHome(res);
        })
})

// [GET] /breads/breadId/edit Renders Edit Form by bread Id
bread.get('/:breadId/edit', async (req, res) => {
    const { breadId } = req.params;
    const foundBread = await Bread.findById(breadId);
    const bakers = await Baker.find();
    if (foundBread) {
        res.render('breads/edit', {
            bread: foundBread,
            bakers
        })
    } else {
        res.render('error404')
    }
})

// [GET] /breads/new Renders renders new bread form page
bread.get('/new', (req, res) => {
    res.render('breads/new')
})

// [GET] /breads/mockData adds 4 test breads to collection and redirects to /breads
bread.get('/mockData', (req, res) => {
    Bread.insertMany(mockData).then(() => {
        goHome(res);
    });
})

module.exports = bread