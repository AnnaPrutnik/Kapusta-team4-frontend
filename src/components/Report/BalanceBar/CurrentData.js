import { useState, useEffect } from 'react'
// import months from './month.json'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import s from '../../../styles/component/ReportView/BalanceBar/CurrentData.module.scss'

function CurrentData({ month, setMonth, year, setYear }) {
  const [currentMonth, setCurrentMonth] = useState(month)
  const [currentYear, setCurrentYear] = useState(year)

  useEffect(() => {
    const date = convertDate()
    setCurrentMonth(date[0])
    setMonth(date[0])
    setCurrentYear(date[1])
    setYear(date[1])
  }, [])

  const convertDate = () => {
    const date = new Date()
    const currentMonth = date.getMonth() + 1
    const currentYear = date.getFullYear()
    return [currentMonth, currentYear]
  }

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

  const handleIncrement = () => {
    if (currentMonth <= 11) {
      setMonth(prev => (prev += 1))
      setCurrentMonth(prev => (prev += 1))
    } else {
      setMonth(1)
      setCurrentMonth(1)
      setYear(prev => (prev += 1))
      setCurrentYear(prev => (prev += 1))
    }
  }

  const handleDecrement = () => {
    if (currentMonth <= 1) {
      setMonth(12)
      setCurrentMonth(12)
      setYear(prev => (prev -= 1))
      setCurrentYear(prev => (prev -= 1))
    } else {
      setCurrentMonth(prev => (prev -= 1))
      setMonth(prev => (prev -= 1))
    }
  }

  return (
    <div className={s.wrap}>
      <span className={s.label}>Текущий период:</span>
      <div className={s.wrapBtn}>
        <button className={s.btn} type="button" onClick={handleDecrement}>
          <MdKeyboardArrowLeft className={s.icon} />
        </button>
        <p className={s.title}>
          {months[currentMonth]} {currentYear}
        </p>
        <button className={s.btn} type="button" onClick={handleIncrement}>
          <MdKeyboardArrowRight className={s.icon} />
        </button>
      </div>
    </div>
  )
}

export default CurrentData
