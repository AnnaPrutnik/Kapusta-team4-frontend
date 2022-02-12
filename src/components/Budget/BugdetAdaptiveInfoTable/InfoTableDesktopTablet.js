import React from 'react';
import s from '../Budget.module.scss';
import { Delete } from '../../../images/Budget/svg/svg';


const InfoTableDesktopTablet = ({ items, expenseBtn }) => {


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
            {items.map((item, index) => (
              <tr className={s.added_content} key={index}>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                {expenseBtn ? (
                  <td style={{ color: '#E7192E' }}>-{item.amount}грн.</td>
                ) : (
                  <td style={{ color: 'green' }}>+{item.amount}грн.</td>
                )}
                <td><span><Delete /></span>
                </td>
              </tr>
            ))}
            </tbody>

        </table>
      </div>
    </div>
  );
};

export default InfoTableDesktopTablet;