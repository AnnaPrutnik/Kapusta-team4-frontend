import { useState, useEffect } from 'react'
import SummaryListItem from './SummaryListItem'
import {
  getExpensesForLastSixMonth,
  getIncomesForLastSixMonth,
} from '../../../services'
import s from '../../../styles/component/FinanceView/Summary/Summary.module.scss'

function Summary({ isExpense, length }) {
  const [expenses, setExpenses] = useState({})
  const [incomes, setIncomes] = useState({})

  useEffect(() => {
    getExpensesForLastSixMonth().then(res => {
      setExpenses(res.data)
    }),
      getIncomesForLastSixMonth().then(res => setIncomes(res.data))
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
