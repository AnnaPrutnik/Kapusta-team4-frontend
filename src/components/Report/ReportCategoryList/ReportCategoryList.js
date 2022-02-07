import React, { useState } from 'react';
import ReportCategoryItem from '../ReportCategoryItem/ReportCategoryItem';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useSelector } from 'react-redux';

const ReportCategoryList = ({ data }) => {
  const [typeTrans, setTypeTrans] = useState('outcome');

  const handleClick = () => {
    if (typeTrans === 'income') {
      setTypeTrans('outcome');
    }
    if (typeTrans === 'outcome') {
      setTypeTrans('income');
    }
  };

  return (
    <div className="report_gallery_wrap">
      <div className="report_gallery_wrap-btn">
        <button
          className="report_gallery_btn"
          type="button"
          onClick={() => handleClick()}
        >
          <MdKeyboardArrowLeft className="report_gallery_icon" />
        </button>
        {typeTrans === 'income' ? (
          <p className="report_gallery_title"> Расходы </p>
        ) : (
          <p className="report_gallery_title"> Доходы </p>
        )}
        <button
          className="report_gallery_btn"
          type="button"
          onClick={() => handleClick()}
        >
          <MdKeyboardArrowRight className="report_gallery_icon" />
        </button>
      </div>
      <div>
        <ReportCategoryItem data={data} />
        {/* {typeTrans === 'outcome' ? (
          <>
            <ReportCategoryItem data={outcome} />
          </>
        ) : (
          <>
            <ReportCategoryItem data={income} />
          </>
        )} */}
      </div>
    </div>
  );
};

export default ReportCategoryList;
