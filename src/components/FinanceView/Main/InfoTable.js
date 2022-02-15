import { useState } from 'react'
import sprite from '../../../images/FinanceView/icons.svg'
import s from '../../../styles/component/FinanceView/Main/InfoTable.module.scss'
import ExitModal from '../../Modal/ExitModal'

function InfoTable({ transactions, deleteTransaction }) {
  const [showModal, setShowModal] = useState(false)
  const [transId, setTransId] = useState(null)

  const handleClickDelete = e => {
    deleteTransaction(transId)
    handleCloseModal()
  }

  const handleOpenModal = e => {
    setShowModal(true)
    setTransId(e.currentTarget.dataset.id)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setTransId(null)
  }

  return (
    <>
      <table className={s.table}>
        <thead className={s.head}>
          <tr className={s.header}>
            <th className={s.head_date}>Дата</th>
            <th className={s.head_description}>Описание</th>
            <th className={s.category}>Категория</th>
            <th className={s.amount}>Сумма</th>
          </tr>
        </thead>
        <tbody className={s.body}>
          {transactions.map(item => (
            <tr key={item._id} className={s.row}>
              <td className={s.date}>{item.convertDate}</td>
              <td className={s.description}>{item.description}</td>
              <td className={s.category}>{item.categoryId.category}</td>
              {item.isExpense ? (
                <td className={s.expense}>- {item.transactionAmount} грн.</td>
              ) : (
                <td className={s.income}>{item.transactionAmount} грн.</td>
              )}
              <td className={s.delete}>
                <button
                  className={s.btn}
                  onClick={handleOpenModal}
                  data-id={item._id}
                >
                  <svg width="18" height="18">
                    <use href={`${sprite}#Delete`}></use>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <ExitModal
          handleClickLeft={handleClickDelete}
          handleClickRight={handleCloseModal}
          onClose={handleCloseModal}
          modalTitle={'Вы уверенны?'}
        />
      )}
    </>
  )
}

export default InfoTable
