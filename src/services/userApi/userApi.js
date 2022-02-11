import axios from 'axios'
import { setToken } from '../'

export const getBalance = async () => {
  setToken()
  const response = await axios.get('/user/balance')
  return response.data
}

export const setBalance = async value => {
  setToken()
  const response = await axios.patch('/user/balance', value)
  return response.data
}
