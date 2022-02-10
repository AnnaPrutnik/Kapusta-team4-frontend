import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import months from './month.json'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import s from './CurrentData.module.scss'

const CurrentData = () => {
  const dispatch = useDispatch()

  // const date = useSelector(state => state.transaction.date)
  const currentMonth = new Date().getMonth() + 1
  const currentYear = new Date().getFullYear()

  const [month, setMonth] = useState(currentMonth)
  const [year, setYear] = useState(currentYear)

  const months = {
    1: 'январь',
    2: 'февраль',
    3: 'март',
    4: 'апрель',
    5: 'май',
    6: 'июнь',
    7: 'июль',
    8: 'август',
    9: 'сентябрь',
    10: 'октябрь',
    11: 'ноябрь',
    12: 'декабрь',
  }

  const handleRight = () => {
    if (month <= 11) {
      setMonth(prev => (prev += 1))
    } else {
      setMonth(1)
      setYear(prev => (prev += 1))
    }
  }

  const handleLeft = () => {
    if (month <= 1) {
      setMonth(12)
      setYear(prev => (prev -= 1))
    } else {
      setMonth(prev => (prev -= 1))
    }
  }

  return (
    <div className={s.wrap}>
      <span className={s.label}>Текущий период:</span>
      <div className={s.wrapBtn}>
        <button className={s.btn} type="button" onClick={() => handleLeft()}>
          <MdKeyboardArrowLeft className={s.icon} />
        </button>
        <p className={s.title}>
          {/* НОЯБРЬ 2021 */}
          {months[month]} {year}
        </p>
        <button className={s.btn} type="button" onClick={() => handleRight()}>
          <MdKeyboardArrowRight className={s.icon} />
        </button>
      </div>
    </div>
  )
}

export default CurrentData
