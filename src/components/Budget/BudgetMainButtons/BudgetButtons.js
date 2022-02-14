import React from 'react';
import s from '../Budget.module.scss';

const BudgetButtons = ({ expenseFunc, expense }) => {
  return (
    <div className={s.btn_section}>
      <button
        onClick={() => {
          expenseFunc(true);
          // isMobile ? setAdaptiveState(true) : '';
        }} className={expense ? s.btn_active : s.btn_disabled}>
        Расход
      </button>
      <button
        onClick={() => {
          expenseFunc(false);
          // isMobile ? setAdaptiveState(true) : '';
        }}
        className={!expense ? s.btn_active : s.btn_disabled}>
        Доход
      </button>
    </div>
  );
};

export default BudgetButtons;