import { useEffect, useState } from 'react'
import s from './ReportMenu.module.scss'

function ReportMenu({ totalTrans }) {
  const [incomes, setIncomes] = useState(null)
  const [expenses, setExpenses] = useState(null)

  useEffect(() => {
    if (totalTrans.length === 0) {
      handleChangeStats(null, null)
    } else {
      if (totalTrans.length === 2) {
        totalTrans.map(transaction =>
          transaction.isExpense
            ? setExpenses(transaction.total)
            : setIncomes(transaction.total),
        )
      } else {
        if (totalTrans[0].isExpense) {
          handleChangeStats(totalTrans[0].total, null)
        } else {
          handleChangeStats(null, totalTrans[0].total)
        }
      }
    }
  }, [totalTrans])

  const handleChangeStats = (expense, income) => {
    setExpenses(expense)
    setIncomes(income)
  }
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
