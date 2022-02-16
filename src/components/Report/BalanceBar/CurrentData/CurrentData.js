import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import months from '../../../../lib/monthsList.json'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import s from './CurrentData.module.scss'

function CurrentData({ setMonth, setYear }) {
  const [currentMonth, setCurrentMonth] = useState(null)
  const [currentYear, setCurrentYear] = useState(null)

  useEffect(() => {
    const date = dayjs()
    setCurrentMonth(date.month() + 1)
    setMonth(date.month() + 1)
    setCurrentYear(date.year())
    setYear(date.year())
  }, [])

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
