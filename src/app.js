const path = require('path')
const express = require('express')

const app = express()
const port = 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/help', (req, res) => {
    res.send('This is the help page')
})

app.get('/about', (req, res) => {
    res.send('<h1>About Section</h1>')
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