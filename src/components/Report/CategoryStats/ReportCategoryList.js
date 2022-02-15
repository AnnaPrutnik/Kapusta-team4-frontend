import { useState } from 'react'
import ReportCategoryItem from './ReportCategoryItem'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import s from '../../../styles/component/ReportView/CategoryStats//ReportCategoryList.module.scss'

function ReportCategoryList({ categories, isExpense, changeIsExpense }) {
  const handleClick = () => {
    isExpense ? changeIsExpense(false) : changeIsExpense(true)
  }

  return (
    <div className={s.wrap}>
      <div className={s.wrapBtn}>
        <button className={s.btn} type="button" onClick={() => handleClick()}>
          <MdKeyboardArrowLeft className={s.icon} />
        </button>
        <p className={s.title}>{isExpense ? 'Расходы' : 'Доходы'} </p>
        <button className={s.btn} type="button" onClick={() => handleClick()}>
          <MdKeyboardArrowRight className={s.icon} />
        </button>
      </div>
      <div>
        <ReportCategoryItem data={categories} />
      </div>
    </div>
  )
}

export default ReportCategoryList