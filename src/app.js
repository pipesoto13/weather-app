const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

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