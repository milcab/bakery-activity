const express = require('express')
const router = express.Router()

const places = require('../models/places')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new/index')
})

router.post('/new', (req, res) => {
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }

    places.push(req.body)
    res.redirect('/places')
})

router.get('/show/:placeId', (req, res) => {
    res.render('places/show/index', { placeId: req.params.placeId })
})
router.get('/edit/:placeId', (req, res) => {
    res.render('places/edit/index', { placeId: req.params.placeId })
})

module.exports = router