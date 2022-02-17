import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'

import sprite from '../../../../images/FinanceView/icons.svg'
import s from './Calendar.module.scss'

function Calendar({ changeDate }) {
  const [startDate, setStartDate] = useState(new Date())

  useEffect(() => {
    const date = dayjs(startDate).format()
    changeDate(date)
  }, [])

  const handleChangeDate = e => {
    const date = dayjs(e).format()
    setStartDate(e)
    changeDate(date)
  }

  return (
    <div className={s.date}>
      <div className={s.icon}>
        <svg width="20" height="20">
          <use href={`${sprite}#Calendar`}></use>
        </svg>
      </div>
      <DatePicker
        dateFormat="dd.MM.yyyy"
        closeOnScroll={true}
        selected={startDate}
        onChange={handleChangeDate}
        className={s.calendar}
        calendarClassName={s.dates}
      />
    </div>
  )
}

export default Calendar
