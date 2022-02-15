import { useState, useEffect } from 'react'
import SummaryListItem from './SummaryListItem'
import {
  getExpensesForLastSixMonth,
  getIncomesForLastSixMonth,
} from '../../../services'
import s from '../../../styles/component/FinanceView/Summary/Summary.module.scss'

function Summary({ isExpense }) {
  const [expenses, setExpenses] = useState({})
  const [incomes, setIncomes] = useState({})

  useEffect(() => {
    getExpensesForLastSixMonth().then(res => setExpenses(res.data)),
      getIncomesForLastSixMonth().then(res => setIncomes(res.data))
  }, [])

  return (
    <div className={s.container}>
      <p className={s.title}> Сводка</p>
      <ul>
        {isExpense
          ? expenses.length > 0 &&
            expenses.map(({ totalAmount, month }) => (
              <SummaryListItem month={month} value={totalAmount} key={month} />
            ))
          : incomes.length > 0 &&
            incomes.map(({ totalAmount, month }) => (
              <SummaryListItem month={month} value={totalAmount} key={month} />
            ))}
      </ul>
    </div>
  )
}

export default Summary
