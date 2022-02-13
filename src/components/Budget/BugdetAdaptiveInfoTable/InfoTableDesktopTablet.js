import React from 'react';
import s from '../Budget.module.scss';
import { Delete } from '../../../images/Budget/svg/svg';


const InfoTableDesktopTablet = ({ categories, items, expenseBtn }) => {

  console.log(items);

  return (
    <div className={s.info_table}>
      <div className={s.titles_and_results}>
        <table>
          <thead>
          <tr>
            <th>Дата</th>
            <th>Описание</th>
            <th>Категория</th>
            <th>Сумма</th>
            <th style={{ color: 'transparent' }}>Удалить</th>
          </tr>
          </thead>
          <tbody>
          {(items.filter(item => item.isExpense === expenseBtn).map((item, index) => (
            <tr className={s.added_content} key={index}>
              <td>{item.transactionDate}</td>
              <td>{item.description}</td>
              <td>{categories.filter(cat => cat._id === item.category)}</td>
              {expenseBtn ? (
                <td style={{ color: '#E7192E' }}>- {item.transactionAmount} грн.</td>
              ) : (
                <td style={{ color: 'green' }}>+ {item.transactionAmount} грн.</td>
              )}
              <td><span><Delete /></span>
              </td>
            </tr>
          )))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default InfoTableDesktopTablet;