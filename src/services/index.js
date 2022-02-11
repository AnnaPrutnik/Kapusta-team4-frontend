import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api'

export { setToken, setHeaders, unsetHeaders } from './token/token'
// export {} from './authApi'
