require('dotenv').config()

const express = require('express')
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//routes
app.use('/places', require('./controllers/places.js'))

app.get('*', (req, res) => {
    res.render('404/index')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('running at port', PORT);
})
