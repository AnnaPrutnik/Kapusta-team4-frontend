import s from './ReportMenu.module.scss'

const ReportMenu = () => {
  const totalIncome = 1000000
  const totalOutcome = 1000000
  return (
    <div className={s.wrap}>
      <div className={s.outcome}>
        <p className={s.title}>Расходы:</p>
        <span className={s.expenses}>- {totalOutcome} грн</span>
      </div>
      <div className={s.income}>
        <p className={s.title}>Доходы:</p>
        <span className={s.profits}>+ {totalIncome} грн</span>
      </div>
    </div>
  )
}

export default ReportMenu
