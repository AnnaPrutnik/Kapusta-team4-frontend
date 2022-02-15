import s from '../../../styles/component/FinanceView/Main/Buttons.module.scss'

function Buttons({ isExpense, changeExpense, notMobile, isShowForm }) {
  const handleClickExpense = () => {
    changeExpense(true)
    if (notMobile) {
      return
    }
    isShowForm(true)
  }

  const handleClickIncomes = () => {
    changeExpense(false)
    if (notMobile) {
      return
    }
    isShowForm(true)
  }

  return (
    <div className={s.section}>
      <button
        onClick={handleClickExpense}
        className={isExpense ? s.btn_active : s.btn_disabled}
      >
        Расход
      </button>
      <button
        onClick={handleClickIncomes}
        className={!isExpense ? s.btn_active : s.btn_disabled}
      >
        Доход
      </button>
    </div>
  )
}

export default Buttons
