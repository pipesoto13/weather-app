const path = require('path')
const express = require('express')

const app = express()
const port = 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Felipe Soto C',
    })
})

// app.get('/help', (req, res) => {
//     res.send('This is the help page')
// })

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'This is a help text',
    })
})

// app.get('/about', (req, res) => {
//     res.send('<h1>About Section</h1>')
// })

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Felipe Soto C',
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 25,
        location: 'Medellín',
    })
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})