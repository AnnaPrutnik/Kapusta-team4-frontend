import s from '../Summary.module.scss'
import monthList from '../../../lib/monthsList.json'

const SummaryListItem = ({ month, value }) => {
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
