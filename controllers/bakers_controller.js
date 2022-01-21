// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')
// in the new route
baker.get('/new', (req, res) => {
    Baker.find()
        .then(foundBakers => {
            res.render('breads/new', {
                bakers: foundBakers
            })
        })
})

// Index: 
baker.get('/', (req, res) => {
    Baker.find()
        .then(foundBakers => {
            res.send(foundBakers)
        })
})                    

baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

// export
module.exports = baker

