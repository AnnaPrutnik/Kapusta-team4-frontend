import { useState, useEffect } from 'react'
import {
  getExpensesForLastSixMonth,
  getIncomesForLastSixMonth,
} from '../../services'

import s from './Summary.module.scss'
import SummaryListItem from './SummaryListItem/SummaryListItem'

const Summary = ({ isExpense }) => {
  const [expenses, setExpenses] = useState({})
  const [incomes, setIncomes] = useState({})

  console.log(isExpense)
  useEffect(() => {
    getExpensesForLastSixMonth().then(res => {
      console.log('ex-', res.data), setExpenses(res.data)
    }),
      getIncomesForLastSixMonth().then(res => {
        console.log('in+', res.data), setIncomes(res.data)
      })
  }, [])

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
