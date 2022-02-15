import { useState } from 'react'
import DatePicker from 'react-datepicker'
import sprite from '../../../images/FinanceView/icons.svg'
import s from '../../../styles/component/FinanceView/Main/Calendar.module.scss'

function Calendar({ changeDate }) {
  const [startDate, setStartDate] = useState(new Date())

  const handleChangeDate = e => {
    setStartDate(e)
    changeDate(e)
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
