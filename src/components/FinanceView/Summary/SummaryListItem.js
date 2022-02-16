import monthList from '../../../lib/monthsList.json'
import s from './Summary.module.scss'

function SummaryListItem({ month, value }) {
  return (
    <>
      <li className={s.item}>
        <p>{monthList[month]}</p>
        <p>{value}</p>
      </li>
    </>
  )
}

export default SummaryListItem
