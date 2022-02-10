import React from 'react';
import s from './Budget.module.scss';
import { Delete } from '../../images/Budget/svg/svg';


const BudgetInfoTable = ({ expenseArr, incomeArr, incButton, epxButton, currentDate, mobileWidth }) => {

  const mergeArrays =
    mobileWidth
      ? expenseArr.concat(incomeArr)
      : (epxButton && expenseArr) || (incButton && incomeArr);

  return (
    <div className={s.info_table}>
      <div className={s.titles_and_results}>
        {mobileWidth ? (
          ''
        ) : (
          <table>
            {mobileWidth ? (
              ''
            ) : (
              <thead>
              <tr>
                <th>Дата</th>
                <th>Описание</th>
                <th>Категория</th>
                <th>Сумма</th>
                <th style={{ color: 'transparent' }}>Удалить</th>
              </tr>
              </thead>
            )}

            {mergeArrays.length > 0 ? (
              <tbody>
              {mergeArrays.map((item, index) => (
                <tr className={s.added_content} key={index}>
                  <td>{currentDate}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  {epxButton ? (
                    <td style={{ color: '#E7192E' }}>-{item.summary}грн.</td>
                  ) : (
                    <td style={{ color: 'green' }}>+{item.summary}грн.</td>
                  )}
                  <td><span><Delete /></span>
                  </td>
                </tr>
              ))}
              </tbody>
            ) : (
              ''
            )}
          </table>
        )}

        {mobileWidth ? (
          <div className={s.info_table_mobile}>
            {mergeArrays.map((item, index) => (
              <div key={index} className={s.info_items}>
                <div>
                  <span>{item.description}</span>
                  <div>
                    <span>{currentDate}</span>
                    <span>{item.category}</span>
                  </div>
                </div>
                <div>
                  <span style={{ color: '#E7192E' }}>-{item.summary}грн.</span>
                  <span><Delete /></span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ''
        )}
        {/*{mass1.length === 0 ? (*/}
        {/*  <div className={s.content_without_added_category}>*/}
        {/*        <span>*/}
        {/*          Тут будут отображаться добавленные вами категории...*/}
        {/*        </span>*/}
        {/*  </div>*/}
        {/*) : (*/}
        {/*  ''*/}
        {/*)}*/}
      </div>
    </div>
  );
};

export default BudgetInfoTable;