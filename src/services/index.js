import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL



export { setHeaders, unsetHeaders } from './token/token'
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

export { setUserBalance } from './userApi/userApi'

export {
  getExpensesForLastSixMonth,
  getIncomesForLastSixMonth,
  getStatsExpenseForMonth,
  getStatsIncomesForMonth,
  getStatsCategoriesForMonth,
} from './statisticApi/statisticApi'
