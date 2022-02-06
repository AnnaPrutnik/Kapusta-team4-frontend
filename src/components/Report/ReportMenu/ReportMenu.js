import React from 'react';
// import s from './ReportMenu.module.css';

const ReportMenu = () => {
  const totalIncome = 1000000;
  const totalOutcome = 1000000;
  return (
    <div className="report_menu_wrap">
      <div className="report_menu_outcome">
        <p className="report_menu_title">Расходы:</p>
        <span className="report_menu_value_outcome">- {totalOutcome} грн</span>
      </div>
      <div className="report_menu_income">
        <p className="report_menu_title">Доходы:</p>
        <span className="report_menu_value_income">+ {totalIncome} грн</span>
      </div>
    </div>
  );
};

export default ReportMenu;
