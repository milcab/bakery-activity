require('dotenv').config()

const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const bakersController = require('./controllers/bakers_controller')



// MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))

// DEPENDENCIES

// Connect to mongodb
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('connected to mongo:', process.env.MONGO_URI)
    }
);

// home page
app.get('/', (req, res) => {
    res.render('index')
})
// breads rotes
app.use('/breads', require('./controllers/breads'))

// bakers rotes
app.use('/bakers', bakersController)

//bakers


// page not found
app.get('*', (req, res) => {
    res.render('error404')
})


// start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('running at port', PORT);
})
