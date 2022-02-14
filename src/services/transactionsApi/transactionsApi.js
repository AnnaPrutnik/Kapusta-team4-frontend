import axios from 'axios'
import { setToken } from '../'

//  должно приходить от фронта body с полями:
// date: string,
// description: string,
// category: id as string,
// amount: string, но внутри значение которое можно привести к числу
// isExpense: boolean + (true - затраты, false - доходы)

export const addTransaction = async data => {
  setToken()
  const transaction = { ...data }
  const response = await axios.post('/transactions', transaction)
  return response.data
}

export const deleteTransaction = async id => {
  setToken()
  const response = await axios.delete(`/transactions/${id}`)
  return response.data
}

export const getTransactionsForOneDay = async date => {
  setToken()
  const response = await axios.get(`/transactions/${date}`)
  return response.data
}
