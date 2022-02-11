import axios from 'axios'
import { setToken } from '../'

//  должно приходить от фронта body с полями:
// date: string,
//     description: string,
// category: id as string,
// amount: string, но внутри значение которое можно привести к числу
// isExpense: boolean + (true - затраты, false - доходы)

export const addTransaction = async (data, isExpense) => {
  setToken()
  const transaction = { ...data, isExpense }
  const response = await axios.post('/transactions', transaction)
  return response.data
}

export const deleteTransaction = async id => {
  setToken()
  const response = await axios.delete(`/transactions/:${id}`)
  return response.data
}
