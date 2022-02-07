import React, { useState } from 'react'
import ReportCategoryItem from '../ReportCategoryItem/ReportCategoryItem'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useSelector } from 'react-redux'

import s from './ReportCategoryList.module.scss'

const ReportCategoryList = ({ data }) => {
  const [typeTrans, setTypeTrans] = useState('outcome')

  const handleClick = () => {
    if (typeTrans === 'income') {
      setTypeTrans('outcome')
    }
    if (typeTrans === 'outcome') {
      setTypeTrans('income')
    }
  }

  return (
    <div className={s.wrap}>
      <div className={s.btn}>
        <button
          className={s.btn_left}
          type="button"
          onClick={() => handleClick()}
        >
          <MdKeyboardArrowLeft size={20} style={{ color: '#FF751D' }} />
        </button>
        {typeTrans === 'income' ? (
          <p className={s.title}> Расходы </p>
        ) : (
          <p className={s.title}> Доходы </p>
        )}
        <button
          className={s.btn_right}
          type="button"
          onClick={() => handleClick()}
        >
          <MdKeyboardArrowRight size={20} style={{ color: '#FF751D' }} />
        </button>
      </div>
      <div>
        <ReportCategoryItem data={data} />
        {/* {typeTrans === 'outcome' ? (
          <>
            <ReportCategoryItem data={outcome} />
          </>
        ) : (
          <>
            <ReportCategoryItem data={income} />
          </>
        )} */}
      </div>
    </div>
  )
}

export default ReportCategoryList
