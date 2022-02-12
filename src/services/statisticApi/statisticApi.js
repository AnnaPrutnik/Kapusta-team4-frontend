import axios from 'axios'
import { setToken } from '../'

export const getExpensesForLastSixMonth = async () => {
  setToken()
  const response = await axios.get('/statistics/expenses')
  return response.data
}

export const getIncomesForLastSixMonth = async () => {
  setToken()
  const response = await axios.get('/statistics/incomes')
  return response.data
}

export const getStatsExpenseForMonth = async (month, year) => {
  setToken()
  const response = await axios.get(`/statistics/expenses/${year}-${month}`)
  return response.data
}

export const getStatsIncomesForMonth = async (month, year) => {
  setToken()
  const response = await axios.get(`/statistics/incomes/${year}-${month}`)
  return response.data
}

export const getStatsCategoriesForMonth = async (month, year, categoryId) => {
  setToken()
  const response = await axios.get(`/statistics/categories/${year}-${month}`, {
    categoryId,
  })
  return response.data
}
