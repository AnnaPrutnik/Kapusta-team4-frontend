import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import AddTransaction from '../AddTransaction/AddTransaction'
import { MdKeyboardBackspace } from 'react-icons/md'
import s from './MobileForm.module.scss'

const MobileForm = ({ onClick, date, changeTransactions, isExpense }) => {
  const handleCloseModal = () => {
    onClick(false)
  }

  return (
    <div className={s.container}>
      <div className={s.wrap}>
        <MdKeyboardBackspace onClick={handleCloseModal} className={s.icon} />
      </div>
      <div className={s.content}>
        <AddTransaction
          date={date}
          changeTransactions={changeTransactions}
          isExpense={isExpense}
          onCloseForm={onClick}
        />
      </div>
    </div>
  )
}

export default MobileForm
