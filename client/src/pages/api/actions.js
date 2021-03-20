import axios from 'axios'

export const DEFAULT_BASE = 'EUR'

const fetchLatestData = async (base = DEFAULT_BASE) =>
  (await axios.get(`https://api.ratesapi.io/api/latest?base=${base}`)).data

const fetchHistoricData = async (date, base = DEFAULT_BASE) =>
  (await axios.get(`https://api.ratesapi.io/api/${date}?base=${base}`)).data

export {
  fetchLatestData,
  fetchHistoricData
}
