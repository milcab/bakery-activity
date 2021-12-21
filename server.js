require('dotenv').config()

const express = require('express')
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to Awesome App about Breads!')
})
app.use('/breads', require('./controllers/breads_controller.js'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('running at port', PORT);
})
