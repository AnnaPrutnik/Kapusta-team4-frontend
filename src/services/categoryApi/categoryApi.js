import axios from 'axios'
import { setToken } from '../'

export const getIncomeCategory = async () => {
  setToken()
  const { data } = await axios.get('/category/incomes')
  return data.data
}

export const getExpenseCategory = async () => {
  setToken()
  const { data } = await axios.get('/category/expenses')
  return data.data
}
