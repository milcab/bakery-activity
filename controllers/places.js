const express = require('express')
const router = express.Router()
let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/250/250'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http://placekitten.com/250/250'
}]

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new/index')
})

router.post('/new', (req, res) => {
    places.push(req.body);
    res.redirect('/places')
})

router.get('/show/:placeId', (req, res) => {
    res.render('places/show/index', { placeId: req.params.placeId })
})
router.get('/edit/:placeId', (req, res) => {
    res.render('places/edit/index', { placeId: req.params.placeId })
})

module.exports = router