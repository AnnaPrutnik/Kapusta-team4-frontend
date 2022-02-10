import axios from 'axios'

export const getBalance = () => {
  const response = await axios.get('/user/balance')
  return response.data
}

export const setBalance = value => {
  const response = await axios.patch('/user/balance', value)
  return response.data
}
