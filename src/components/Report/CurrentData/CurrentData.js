import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { transactionOperations } from 'redux/transaction';
import months from './month.json';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const CurrentData = () => {
  const handleRight = () => {};

  const handleLeft = () => {};

  return (
    <div className="current-data_wrap">
      <span className="current-data_label">Текущий период:</span>
      <div className="current-data_wrap-btn">
        <button className="current-data_btn" type="button" onClick={handleLeft}>
          <MdKeyboardArrowLeft className="current-data_icon" />
        </button>
        <p className="current-data_title">
          НОЯБРЬ 2021
          {/* {month}.{year} */}
        </p>
        <button
          className="current-data_btn"
          type="button"
          onClick={handleRight}
        >
          <MdKeyboardArrowRight className="current-data_icon" />
        </button>
      </div>
    </div>
  );
};

export default CurrentData;
