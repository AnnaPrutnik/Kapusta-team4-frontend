import { useEffect, useState } from 'react'
import s from '../../../styles/component/ReportView/CommonStats/ReportMenu.module.scss'

function ReportMenu({ totalTrans }) {
  const [incomes, setIncomes] = useState(null)
  const [expenses, setExpenses] = useState(null)

  useEffect(() => {
    if (totalTrans.length === 0) {
      setIncomes(null)
      setExpenses(null)
    } else {
      totalTrans.map(transaction =>
        transaction.isExpense
          ? setExpenses(transaction.total)
          : setIncomes(transaction.total),
      )
    }
  }, [totalTrans])

  return (
    <div className={s.wrap}>
      <div className={s.outcome}>
        <p className={s.title}>Расходы:</p>
        <span className={s.expenses}>
          {expenses ? `- ${expenses}` : '0'} UAH
        </span>
      </div>
      <div className={s.income}>
        <p className={s.title}>Доходы:</p>
        <span className={s.profits}>{incomes ? `+ ${incomes}` : '0'} UAH</span>
      </div>
    </div>
  )
}

export default ReportMenu
