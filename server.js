require('dotenv').config()

const express = require('express')
const app = express()
const methodOverride = require('method-override')

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))
// DEPENDENCIES

//routes
app.use('/', require('./controllers/breads.js'))
app.get('*', (req, res) => {
    res.render('404/index')
})


// start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('running at port', PORT);
})
