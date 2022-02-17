import axios from 'axios'

export const setUserBalance = async value => {
  const response = await axios.patch('/user/balance', { value })
  return response.data
}
