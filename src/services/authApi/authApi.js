import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api'

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}

export const signUpUser = async credentials => {
  const { data } = await axios.post('/auth/signup', credentials)
  return data
}

export const loginUser = async credentials => {
  const { data } = await axios.post('/auth/login', credentials)
  token.set(data.token)
  return data
}

export const logoutUser = async () => {
  await axios.get('/users/logout')
  token.unset()
}
