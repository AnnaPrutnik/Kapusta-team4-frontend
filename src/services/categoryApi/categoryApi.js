import axios from 'axios'

export const getIncomeCategory = async () => {
  const { data } = await axios.get('/category/incomes')
  console.log(data)
  return data.categories
}

export const getExpenseCategory = async () => {
  const { data } = await axios.get('/category/outcomes')
  console.log(data)
  return data.categories
}
