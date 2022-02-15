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
          {expenses
            ? `- ${new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'UAH',
              }).format(expenses)}`
            : `0,00 грн.`}
        </span>
      </div>
      <div className={s.income}>
        <p className={s.title}>Доходы:</p>
        <span className={s.profits}>
          {incomes
            ? `+ ${new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'UAH',
              }).format(incomes)}`
            : `0,00 грн.`}
        </span>
      </div>
    </div>
  )
}

export default ReportMenu
