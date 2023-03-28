import axios from 'axios'

axios.defaults.baseURL = 'https://kapusta-app-backend.onrender.com/api'

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
