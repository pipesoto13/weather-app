const request = require('request')

const forecast = (long, lat, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=3bec3ad818203f9d56b33a6255c49729&query=${lat},${long}`
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services!', undefined)
    } else if (body.error) {
      callback('Unable to find location. Try another search.', undefined)
    } else {
      const { temperature, feelslike, weather_descriptions } = body.current
      callback(undefined, {
        temperature,
        feelslike,
        weather_descriptions,
      })
    }
  })
}

module.exports = forecast

// const url = 'http://api.weatherstack.com/current?access_key=3bec3ad818203f9d56b33a6255c49729&query=Medellin'


// request({url: url, json: true}, (err, response) => {
//   console.log(`It is currently ${response.body.current.temperature} degress out. It feels like ${response.body.current.feelslike} degress out.`);
// })