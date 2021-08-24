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
    res.send('This is the about page')
})

app.get('/weather', (req, res) => {
    res.send('This is the weather page')
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})