import React from 'react'
import sprite from '../../../images/report/sprite.svg'
import { v4 as uuidv4 } from 'uuid'
import trans from './trans.json'
import s from './ReportCategoryItem.module.scss'
// import trans from './outcome.json';

const ReportCategoryItem = ({ data }) => {
  // console.log(trans);

  return (
    <ul className={s.list}>
      {trans.length === 0 ? (
        <p className={s.text}>За данный период транзакций нет</p>
      ) : (
        trans.map(item => (
          <li key={uuidv4()} className={s.item}>
            <p className={s.sum}>{item.sum}</p>
            <div className={s.thumb}>
              <svg className={s.icon}>
                <use href={`${sprite}#${item.label}`} />
              </svg>
              <div className={s.circle}></div>
            </div>
            <h3 className={s.category}>{item.category}</h3>
          </li>
        ))
      )}
    </ul>
  )
}

export default ReportCategoryItem
