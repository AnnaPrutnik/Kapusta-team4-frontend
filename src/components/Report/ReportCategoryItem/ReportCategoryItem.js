import React from 'react';
import sprite from '../../../images/report/sprite.svg';
import { v4 as uuidv4 } from 'uuid';
import trans from './trans.json';
// import trans from './outcome.json';

const ReportCategoryItem = ({ data }) => {
  // console.log(trans);

  return (
    <ul className="report_gallery">
      {trans.length === 0 ? (
        <p className="report_gallery_text">За данный период транзакций нет</p>
      ) : (
        trans.map(item => (
          <li key={uuidv4()} className="report_gallery_item">
            <p className="report_gallery_item-sum">{item.sum}</p>
            <div className="report_gallery_item-thumb">
              <svg className="report_gallery_item-icon">
                <use href={`${sprite}#${item.label}`} />
              </svg>
              <div className="report_gallery_item-circle"></div>
            </div>
            <h3 className="report_gallery_item-category">{item.category}</h3>
          </li>
        ))
      )}
    </ul>
  );
};

export default ReportCategoryItem;
