import React from 'react'
import sprite from '../../../images/report/sprite.svg'
import s from './ReportCategoryItem.module.scss'
// import items from './trans.json'

const ReportCategoryItem = ({ data: items }) => {
  return (
    <ul className={s.list}>
      {items && items.length === 0 ? (
        <p className={s.text}>За данный период транзакций нет</p>
      ) : (
        items &&
        items.map(item => (
          <li key={item.categoryId._id} className={s.item}>
            <p className={s.sum}>{item.sum}</p>
            <div className={s.thumb}>
              {
                <svg className={s.icon}>
                  <use href={`${sprite}#${item.categoryId._id}`} />
                </svg>
              }
            </div>
            <h3 className={s.category}>{item.categoryId.category}</h3>
          </li>
        ))
      )}
    </ul>
  )
}

export default ReportCategoryItem
