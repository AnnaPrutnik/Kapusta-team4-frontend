import React from 'react'
import s from './TableMobile.module.scss'
import sprite from '../../../images/Budget/Sprite.svg'

const TableMobile = ({ transactions, deleteTransaction }) => {
  const handleClickDelete = e => {
    const id = e.currentTarget.dataset.id
    deleteTransaction(id)
  }

  return (
    <table className={s.table}>
      {transactions.length > 0 && (
        <tbody>
          {transactions.map(item => (
            <tr className={s.row} key={item._id}>
              <td className={s.info}>
                <div className={s.description}>{item.description}</div>
                <div className={s.wrap}>
                  <span className={s.date}>{item.convertDate}</span>
                  <span className={s.category}>{item.categoryId.category}</span>
                </div>
              </td>
              <td>
                {item.isExpense ? (
                  <span className={s.expense}>
                    {`-${item.transactionAmount} грн.`}
                  </span>
                ) : (
                  <span className={s.income}>
                    {`${item.transactionAmount} грн.`}
                  </span>
                )}
              </td>

              <td className={s.delete}>
                <button className={s.btn} onClick={handleClickDelete}>
                  <svg width="18" height="18">
                    <use href={`${sprite}#Delete`}></use>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  )
}

export default TableMobile
