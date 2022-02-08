import s from '../Summary.module.scss'

const SummaryListItem = ({ id, month, value }) => {
  return (
    <>
      <li className={s.item}>
        <p>{month}</p>
        <p>{value}</p>
      </li>
    </>
  )
}

export default SummaryListItem
