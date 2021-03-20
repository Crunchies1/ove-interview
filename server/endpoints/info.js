const axios = require('axios')

module.exports = async function (req, res) {
  // Get all the input data
  const base = req.query.base || 'EUR'
  const current = req.query.current || 'GBP'

  // Fetch the data from ratesapi.io
  const result = await axios.get(`https://api.ratesapi.io/api/latest?base=${base}`).catch(err => err)
  const data = result.data

  // If axios call returns an error (by wrong base)
  if (data === undefined) {
    res.status(400).send('Base ' + base + ' is not supported.')
  } else {
    // grab the rates from data
    const rateData = data.rates

    let price
    if (rateData[current] !== undefined) {
      price = rateData[current]
      // Return the calculated price to the user
      res.status(201).send('Price: ' + price.toString())
    } else {
      // If current currency is invalid
      res.status(400).send('Current ' + current + ' is not supported.')
    }
  }
}
