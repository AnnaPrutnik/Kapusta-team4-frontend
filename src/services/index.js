import axios from 'axios'

// axios.defaults.baseURL = 'https://goit-fs35-team4-kapusta.herokuapp.com/api'

axios.defaults.baseURL = 'http://localhost:5000/api'

export { setToken, setHeaders, unsetHeaders } from './token/token'
export {
  signUpUser,
  loginUser,
  logoutUser,
  currentUser,
} from './authApi/authApi'
export {
  getIncomeCategory,
  getExpenseCategory,
} from './categoryApi/categoryApi'

export {
  addTransaction,
  deleteTransaction,
  getTransactionsForOneDay,
} from './transactionsApi/transactionsApi'

export { getUserBalance, setUserBalance } from './userApi/userApi'

export {
  getExpensesForLastSixMonth,
  getIncomesForLastSixMonth,
  getStatsExpenseForMonth,
  getStatsIncomesForMonth,
  getStatsCategoriesForMonth,
} from './statisticApi/statisticApi'
