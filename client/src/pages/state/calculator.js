import { fetchHistoricData } from '../api/actions.js'

// State is represented by a list of key-objects
// key: SYMBOL
// object: {
//   PRICE: float
//   INDICATOR: int
//   CHANGE: float
//   GRAPH: Array of x-axis and y-axis
// }

// ====== HELPER FUNCTIONS FOR FETCH DATA ======

// eslint-disable-next-line no-extend-native
Date.prototype.prevDays = function (days) {
  const date = new Date(this.valueOf())
  // Return the current date minus days
  date.setDate(date.getDate() - days)
  return date
}

// Returns the array of dates we are looking through
function getDates (startDate, stopDate) {
  const dateArray = []
  let currentDate = startDate
  while (currentDate >= stopDate) {
    // Converts date string into YYYY-MM-DD format
    let date = currentDate.toUTCString().split(', ')[1]
    date = new Date(date).toISOString().split('T')[0]
    dateArray.push(date)
    currentDate = currentDate.prevDays(1)
  }
  return dateArray
}

// This function adds new entries to the state map following the sample state
function addToState (array, key, value, date) {
  array[key] = {
    price: value.toPrecision(6),
    indicator: null,
    change: null,
    graph: [
      [date],
      [value]
    ]
  }
}

// This function adds values to the graph array in the current state map
function addToGraph (array, key, value, date) {
  array[key].graph[0].unshift(date)
  array[key].graph[1].unshift(value)
}

// This function calculates the change in percentage from the first day of tracking to the last
function calculateChange (array, key) {
  // Obtain the current value and the latest recorded value
  const curVal = array[key].graph[1][array[key].graph[1].length - 1]
  const prevVal = array[key].graph[1][0]
  // Calculate percentage change and set array values
  if (curVal > prevVal) {
    array[key].indicator = 1
    array[key].change = '+' + (100 * (curVal - prevVal) / prevVal).toFixed(2) + '%'
  } else if (curVal === prevVal) {
    array[key].indicator = 0
    array[key].change = (0).toFixed(2) + '%'
  } else {
    array[key].indicator = -1
    array[key].change = (100 * (curVal - prevVal) / prevVal).toFixed(2) + '%'
  }
}

// =============================================

// Calls API to fetch and cache the required data
async function fetchData (base, timeframe) {
  // const data = await fetchLatestData()
  // const cacheId = data.base + data.date
  // Obtain the dates of the previous 7 days in yy-mm-dd format
  const dateArray = getDates(new Date(), (new Date()).prevDays(timeframe))
  // For each value in the data array, send an HTTP request
  await Promise.all(dateArray.map(async (date) => {
    try {
      // Check to see if the data we require has already been cached
      let pastData
      if (window.localStorage.getItem(base + date) === null) {
        // Otherwise, simply fetch the data from ratesapi.io
        pastData = await fetchHistoricData(date, base)
        // Cache the fetched data
        const cacheId = pastData.base + date
        window.localStorage.setItem(cacheId, JSON.stringify(pastData.rates))
      }
    } catch (error) {
      console.log('error' + error)
    }
  }))
  // Return the array of dates used
  return dateArray
}

// Function to generate the index state based on the dates given
function genState (dateArray, base) {
  // Initialise the state array
  const rateData = {}
  // Loop through the dates in the date array
  for (let i = 0; i < dateArray.length; i++) {
    // Retrieve the rates for each date using current base
    const date = dateArray[i]
    let rates = window.localStorage.getItem(base + date)

    // Generate state using day 1 rates
    if (i === 0) {
      rateData[base] = {
        price: 1,
        indicator: null,
        change: null,
        graph: null
      }
    }

    // Loop through each rate
    rates = JSON.parse(rates)
    for (const key of Object.keys(rates)) {
      if (key !== base) {
        if (i === 0) {
          // Generate state using day 1 rates
          addToState(rateData, key, rates[key], date)
        } else if (i < dateArray.length - 1) {
          // Add the rate data to the graphs
          addToGraph(rateData, key, rates[key], date)
        } else {
          // Lastly, add the rate data to the graphs then calculate the final
          // indicator and change values
          addToGraph(rateData, key, rates[key], date)
          calculateChange(rateData, key)
        }
      }
    }
  }
  return rateData
}

export const FETCH_DATA = 'FETCH_DATA'

// Implemented as if it can be extended in the future
export const calculator = async (action, base, timeframe) => {
  switch (action) {
    case FETCH_DATA: {
      const dA = await fetchData(base, timeframe)
      const rD = genState(dA, base)
      return rD
    }
  }
}
