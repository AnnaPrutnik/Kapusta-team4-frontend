import React, { useEffect, useState } from 'react';
import s from './Budget.module.scss';
import { useMediaQuery } from 'react-responsive';
import BudgetInputs from './BudgetInputs/BudgetInputs';
import InfoTableDesktopTablet from './BugdetAdaptiveInfoTable/InfoTableDesktopTablet';
import CalendarDataPicker from './CalendatDate/CalendarDataPicker';
import BudgetButtons from './BudgetMainButtons/BudgetButtons';
import GoBackButton from './BudgetGoBackBtnMobile/GoBackButton';
import { getTransactionsForOneDay } from '../../services';


const Budget = () => {
  const [expense, setExpense] = useState(true);
  const [adaptiveState, setAdaptiveState] = useState(false);
  const [transaction, setTransaction] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [startDate, setStartDate] = useState(new Date());
  const [categoriesList, setCategoriesList] = useState([])

  useEffect(() => {
    getTransactionsForOneDay(startDate)
      .then(res => {
        setTransaction(res.data)
      });
  }, []);


  console.log(categoriesList);

  return (
    <div className={s.budget_section}>
      {adaptiveState ? ('') :
        (<BudgetButtons expense={expense} expenseFunc={(bool) => setExpense(bool)} />)}
      <div className={s.main_content}>
        {(isMobile ? adaptiveState : !adaptiveState) ? (
          <div className={s.main_info}>
            {adaptiveState ?
              <GoBackButton adaptiveFunc={(bool) => setAdaptiveState(bool)} />
              :
              <CalendarDataPicker dataIT={startDate} dateFunc={(date) => setStartDate(date)} />
            }
            <BudgetInputs categoriesList={(items) => setCategoriesList(items)} date={startDate} transaction={(value) => setTransaction([value])} isExp={expense}
                          adaptiveFunc={(bool) => setAdaptiveState(bool)} adaptive={adaptiveState} />
          </div>

        ) : ('')}
        {adaptiveState ? ''
          // <InfoTableMobile />
          :
          <InfoTableDesktopTablet categories={categoriesList} expenseBtn={expense} items={transaction}
                                  mobileWidth={isMobile} />
        }

      </div>
    </div>
  )
}

export default Budget
