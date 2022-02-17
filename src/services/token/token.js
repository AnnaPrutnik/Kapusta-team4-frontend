import axios from 'axios'

export const setHeaders = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const unsetHeaders = () => {
  axios.defaults.headers.common.Authorization = ''
}
