import React from 'react'
import s from './ReportMenu.module.scss'

const ReportMenu = ({ totalTrans }) => {
  let incomes = 0
  let expenses = 0

  totalTrans?.map(transaction =>
    transaction.isExpense
      ? (expenses = transaction.total)
      : (incomes = transaction.total),
  )

  return (
    <div className={s.wrap}>
      <div className={s.outcome}>
        <p className={s.title}>Расходы:</p>
        <span className={s.expenses}>
          {expenses > 0 ? `- ${expenses}` : '0'} UAH
        </span>
      </div>
      <div className={s.income}>
        <p className={s.title}>Доходы:</p>
        <span className={s.profits}>
          {incomes > 0 ? `+ ${incomes}` : '0'} UAH
        </span>
      </div>
    </div>
  )
}

export default ReportMenu
