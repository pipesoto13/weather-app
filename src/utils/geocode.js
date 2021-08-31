const request = require('request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoicGlwZXNvdG8xMyIsImEiOiJja2V3YmN6MjMxdzRtMnlvbWVzcjk4M3ltIn0.2_KKrhFgzx5ljS7shXG28A`
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined)
    } else {
      const { place_name:location } = body.features[0]
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location,
      })
    }
  })
}

module.exports = geocode

// const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGlwZXNvdG8xMyIsImEiOiJja2V3YmN6MjMxdzRtMnlvbWVzcjk4M3ltIn0.2_KKrhFgzx5ljS7shXG28A'

/* 
request({url: url2, json: true}, (error, response) => {
  if (error) {
    console.log('Unable to connect to location services!')
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location. Try another search.')
  } else {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
  }
})
 */