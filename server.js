require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//routes



app.use('/breads', require('./controllers/breads_controller.js'))

app.get('*', (req, res) => {
    res.render('404/index')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('running at port', PORT);
})
