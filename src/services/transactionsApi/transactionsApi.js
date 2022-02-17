import axios from 'axios'

export const addTransaction = async data => {
  const transaction = { ...data }
  const response = await axios.post('/transactions', transaction)
  return response.data
}

export const deleteTransaction = async id => {
  const response = await axios.delete(`/transactions/${id}`)
  return response.data
}

export const getTransactionsForOneDay = async date => {
  const response = await axios.get(`/transactions/${date}`)
  return response.data
}
