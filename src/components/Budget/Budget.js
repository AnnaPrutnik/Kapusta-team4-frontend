import React, { useEffect, useState } from 'react';
import s from './Budget.module.scss';
import { useMediaQuery } from 'react-responsive';
import BudgetInputs from './BudgetInputs';
import InfoTableDesktopTablet from './BugdetAdaptiveInfoTable/InfoTableDesktopTablet';


const Budget = () => {
  const [expense, setExpense] = useState(true);
  const [adaptiveState, setAdaptiveState] = useState(false);
  const [transaction, setTransaction] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  console.log(transaction);

  // useEffect(() => {
  //   getTransactionsForOneDay(transaction).then(r => {
  //     console.log(r);
  //   });
  // }, []);

  return (
    <div className={s.budget_section}>
      {adaptiveState ? (
        ''
      ) : (
        <div className={s.btn_section}>
          <button
            onClick={() => {
              setExpense(true);
              isMobile ? setAdaptiveState(true) : '';
            }} className={expense ? s.btn_active : s.btn_disabled}>
            Расход
          </button>
          <button
            onClick={() => {
              setExpense(false);
              isMobile ? setAdaptiveState(true) : '';
            }}
            className={!expense ? s.btn_active : s.btn_disabled}>
            Доход
          </button>
        </div>
      )}
      <div className={s.main_content}>
        {(isMobile ? adaptiveState : !adaptiveState) ? (
          <BudgetInputs transaction={(value) => setTransaction([value])} isExp={expense} adaptiveFunc={() => {
            setAdaptiveState(false);
          }} adaptive={adaptiveState} />
        ) : ('')}
        {adaptiveState ? ''
          // <InfoTableMobile />
          :
          <InfoTableDesktopTablet expenseBtn={expense} items={transaction}
                                  mobileWidth={isMobile} />
        }

      </div>
    </div>
  )
}

export default Budget
