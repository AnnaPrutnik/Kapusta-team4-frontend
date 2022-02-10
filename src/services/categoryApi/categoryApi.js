import axios from 'axios';

export const getIncomeCategory = async () => {
  const { data } = await axios.get('/category/incomes')
  return data.data
}

export const getExpenseCategory = async () => {
  const { data } = await axios.get('/category/expenses')
  return data.data
}
