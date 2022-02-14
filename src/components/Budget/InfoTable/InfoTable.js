import React from 'react'
import s from './InfoTable.module.scss'
import sprite from '../../../images/Budget/Sprite.svg'

const InfoTable = ({ transactions }) => {
  console.log(transactions)

  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr className={s.header}>
          <th className={s.head_date}>Дата</th>
          <th className={s.head_description}>Описание</th>
          <th className={s.category}>Категория</th>
          <th className={s.amount}>Сумма</th>
          {/* <th style={{ color: 'transparent' }}>Удалить</th> */}
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
              <span>
                <svg width="18" height="18">
                  <use href={`${sprite}#Delete`}></use>
                </svg>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default InfoTable