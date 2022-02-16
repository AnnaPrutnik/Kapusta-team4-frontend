import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import SummaryListItem from './SummaryListItem'
import {
  getExpensesForLastSixMonth,
  getIncomesForLastSixMonth,
} from '../../../services'
import s from '../../../styles/component/FinanceView/Summary/Summary.module.scss'

function Summary({ isExpense, length }) {
  const [expenses, setExpenses] = useState({})
  const [incomes, setIncomes] = useState({})

  const monthSort = items => {
    const date = new Date()
    const monthNow = date.getMonth() + 1
    items.map(el => {
      if (el.month - monthNow <= 0) {
        el.monthSort = el.month + 12
      } else {
        el.monthSort = el.month
      }
    })
    return items.sort((a, b) => (a.monthSort < b.monthSort ? 1 : -1))
  }

  useEffect(() => {
    getExpensesForLastSixMonth().then(res => {
      setExpenses(monthSort(res.data))
    }),
      getIncomesForLastSixMonth().then(res => setIncomes(monthSort(res.data)))
  }, [length])

  return (
    <div className={s.container}>
      <p className={s.title}> Сводка</p>
      <ul>
        {isExpense
          ? expenses.length > 0 &&
            expenses.map(({ totalAnount, month }) => (
              <SummaryListItem month={month} value={totalAnount} key={month} />
            ))
          : incomes.length > 0 &&
            incomes.map(({ totalAnount, month }) => (
              <SummaryListItem month={month} value={totalAnount} key={month} />
            ))}
      </ul>
    </div>
  )
}

export default Summary
