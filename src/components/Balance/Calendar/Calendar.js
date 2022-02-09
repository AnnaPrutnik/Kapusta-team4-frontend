import { ReactComponent as CalendarIcon } from './calendar.svg'
// import { Calendar as CalendarIcon } from '../../../images/expense_income/svg/svg.js'
import s from './Calendar.module.scss'

const Calendar = () => {
  const todayDate = new Date()

  const dateString =
    ('0' + todayDate.getDate()).slice(-2) +
    '.' +
    ('0' + (todayDate.getMonth() + 1)).slice(-2) +
    '.' +
    todayDate.getFullYear()

  return (
    <div className={s.CalendarContainer}>
      <CalendarIcon />
      <div className={s.Date}>{dateString}</div>
    </div>
  )
}

export default Calendar
