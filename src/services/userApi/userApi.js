import axios from 'axios'
import { setToken } from '../'

export const getUserBalance = async () => {
  setToken()
  const response = await axios.get('/user/balance')
  return response.data
}

export const setUserBalance = async value => {
  setToken()
  const response = await axios.patch('/user/balance', { value })
  return response.data
}
