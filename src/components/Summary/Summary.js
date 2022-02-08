import s from './Summary.module.scss'
import SummaryListItem from './SummaryListItem/SummaryListItem'

const Summary = () => {
  //   const list = [
  //     { id: 1, month: 'february', value: 10000.0 },
  //     { id: 2, month: 'february', value: 10000.0 },
  //     { id: 3, month: 'february', value: 10000.0 },
  //     { id: 4, month: 'february', value: 10000.0 },
  //     { id: 5, month: 'february', value: 10000.0 },
  //     { id: 6, month: 'february', value: 10000.0 },
  //   ]

  const list = []
  return (
    <div className={s.container}>
      <p className={s.title}> Сводка</p>
      <ul>
        {list.length > 0 &&
          list.map(({ month, value, id }) => (
            <SummaryListItem month={month} value={value} key={id} />
          ))}
      </ul>
    </div>
  )
}

export default Summary
