import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from './Buttons.module.scss'

const Buttons = ({ isExpense, changeExpense, notMobile, isShowForm }) => {
  let navigate = useNavigate()

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
