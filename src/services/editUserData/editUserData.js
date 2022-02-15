import axios from 'axios'
import { setToken } from '../'

export const setUserName = async value => {
  setToken()
  const { data } = await axios.put('/user', { value })
  return data
}

export const setUserAvatar = async value => {
  setToken()
  console.log(value)
  const { data } = await axios.patch('/user/avatar', { value })
  return data
}
