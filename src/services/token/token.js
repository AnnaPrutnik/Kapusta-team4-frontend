import axios from 'axios'

export const setToken = () => {
  const storage = localStorage.getItem('persist:auth')
  const { token } = JSON.parse(storage)
  setHeaders(JSON.parse(token))
}

export const setHeaders = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const unsetHeaders = () => {
  axios.defaults.headers.common.Authorization = ''
}
