import axios from 'axios'

export const getBalance = async () => {
  const response = await axios.get('/user/balance')
  return response.data
}

export const setBalance = async value => {
  const response = await axios.patch('/user/balance', value)
  return response.data
}
