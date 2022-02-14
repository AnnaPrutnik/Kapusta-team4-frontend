import React, { useState } from 'react'
import ReportCategoryItem from '../ReportCategoryItem/ReportCategoryItem'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import s from './ReportCategoryList.module.scss'

const ReportCategoryList = ({ incomes, expenses }) => {
  const [typeTrans, setTypeTrans] = useState('expenses')

  const handleClick = () => {
    typeTrans === 'incomes' ? setTypeTrans('expenses') : setTypeTrans('incomes')
  }

  return (
    <div className={s.wrap}>
      <div className={s.wrapBtn}>
        <button className={s.btn} type="button" onClick={() => handleClick()}>
          <MdKeyboardArrowLeft className={s.icon} />
        </button>
        {typeTrans === 'expenses' ? (
          <p className={s.title}> Расходы </p>
        ) : (
          <p className={s.title}> Доходы </p>
        )}
        <button className={s.btn} type="button" onClick={() => handleClick()}>
          <MdKeyboardArrowRight className={s.icon} />
        </button>
      </div>
      <div>
        {typeTrans === 'expenses' ? (
          <>
            <ReportCategoryItem data={expenses} />
          </>
        ) : (
          <>
            <ReportCategoryItem data={incomes} />
          </>
        )}
      </div>
    </div>
  )
}

export default ReportCategoryList
