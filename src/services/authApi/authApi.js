import axios from 'axios'
import { setHeaders, unsetHeaders } from '../index'

export const signUpUser = async credentials => {
  const { data } = await axios.post('/auth/signup', credentials)
  return data
}

export const loginUser = async credentials => {
  const { data } = await axios.post('/auth/login', credentials)
  setHeaders(data.token)
  return data
}

export const logoutUser = async () => {
  await axios.get('/auth/logout')
  unsetHeaders()
}

export const currentUser = async () => {
  const { data } = await axios.get('/auth/refresh')
  return data
}
