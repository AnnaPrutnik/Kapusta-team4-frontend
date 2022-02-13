import React from 'react';
import s from '../Budget.module.scss';
import { Delete } from '../../../images/Budget/svg/svg';

const InfoTableMobile = () => {
  return (
    <div className={s.info_table}>
      <div className={s.titles_and_results}>
          <table>
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
      </div>

    </div>
  );
};

export default InfoTableMobile;