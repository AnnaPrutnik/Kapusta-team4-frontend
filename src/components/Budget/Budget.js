import React, { useEffect, useState } from 'react';
import s from './Budget.module.scss';
import { Arrow, Calculator, Calendar, GoBackArrow } from '../../images/Budget/svg/svg';
import { useMediaQuery } from 'react-responsive';
import { getExpenseCategory, getIncomeCategory } from '../../services/categoryApi/categoryApi';
import BudgetInfoTable from './BudgetInfoTable';

const Budget = () => {
  const [addedExpenseItemsArray, setAddedExpenseItemsArray] = useState([]);
  const [addedIncomeItemsArray, setAddedIncomeItemsArray] = useState([]);
  const [expenseCategory, setExpenseCategory] = useState([]);
  const [incomeCategory, setIncomeCategory] = useState([]);
  const [expenseBtn, setExpenseBtn] = useState(true);
  const [incomeBtn, setIncomeBtn] = useState(false);
  const [selectList, setSelectList] = useState(false);
  const [adaptiveState, setAdaptiveState] = useState(false);
  const [selectItemExpense, setSelectItemExpense] = useState('Категория товара');
  const [selectItemIncome, setSelectItemIncome] = useState('Категория товара');
  const [expenseDescription, setExpenseDescription] = useState('');
  const [incomeDescription, setIncomeDescription] = useState('');
  const [expenseSum, setExpenseSum] = useState('');
  const [incomeSum, setIncomeSum] = useState('');
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const currentDate = new Date();

  const day = currentDate.getDate() + '.' + (currentDate.getMonth() + 1) + '.' + currentDate.getFullYear();

  useEffect(() => {
    getExpenseCategory().then(res => {
      setExpenseCategory(res);
    });
    getIncomeCategory().then(res => {
      setIncomeCategory(res);
    });
  }, []);

  const handleResetInputs = (e) => {
    e.preventDefault();
    expenseBtn ? (
      setExpenseSum(''),
        setSelectItemExpense('Категория товара'),
        setExpenseDescription('')
    ) : (
      setIncomeSum(''),
        setSelectItemIncome('Категория товара'),
        setIncomeDescription('')
    );
  };

  let expenseTableInfo = [];
  let incomeTableInfo = [];

  const pushItemsToArray = () => {
    const array = expenseBtn ? expenseTableInfo : incomeTableInfo;
    array.push({
      description: expenseBtn ? expenseDescription : incomeDescription,
      category: expenseBtn ? selectItemExpense : selectItemIncome,
      summary: expenseBtn ? expenseSum : incomeSum,
    });
    setAddedExpenseItemsArray(expenseTableInfo);
    setAddedIncomeItemsArray(incomeTableInfo);

  };


  const expenseAndIncomeCategories = expenseBtn ? expenseCategory : incomeCategory;


  return (
    <div className={s.budget_section}>
      {adaptiveState ? (
        ''
      ) : (
        <div className={s.btn_section}>
          <button
            onClick={() => {
              setExpenseBtn(true);
              setIncomeBtn(false);
              isMobile ? setAdaptiveState(true) : '';
            }} className={expenseBtn ? s.btn_active : s.btn_disabled}>
            Расход
          </button>
          <button
            onClick={() => {
              setIncomeBtn(true);
              setExpenseBtn(false);
              isMobile ? setAdaptiveState(true) : '';
            }}
            className={incomeBtn ? s.btn_active : s.btn_disabled}>
            Доход
          </button>
        </div>
      )}
      <div className={s.main_content}>
        {(isMobile ? adaptiveState : !adaptiveState) ? (
          <div className={s.main_info}>
            {adaptiveState ? (
                <button
                  className={s.go_back_btn}
                  onClick={() => {
                    setAdaptiveState(false);
                  }}><GoBackArrow />
                </button>) :
              (<div className={s.date}>
                <Calendar />
                <span>{day}</span>
              </div>)}
            <div className={s.add_category}>
              <input
                type={'text'}
                placeholder={'Описане товара'}
                value={expenseBtn ? expenseDescription : incomeDescription}
                onChange={(e) =>
                  expenseBtn ? setExpenseDescription(e.target.value) :
                    setIncomeDescription(e.target.value)} />
              <div className={s.select_container}>
                <div
                  onClick={() => {
                    setSelectList(!selectList);
                  }}
                  className={s.dropdown_button}>
                  <p>{expenseBtn ? selectItemExpense : selectItemIncome}</p>
                  {selectList ? (
                      <Arrow
                        style={{ transform: 'rotate(180deg)' }}
                        width={10}
                        height={10}
                      />) :
                    (<Arrow width={10} height={10} />)}
                  {selectList ? (
                      <div className={s.dropdown_button_list}>
                        {expenseAndIncomeCategories.map((item, index) => (
                          <div onClick={() => {
                            item.isExpense ? setSelectItemExpense(item.category) :
                              setSelectItemIncome(item.category);
                          }} key={index} id={item._id}>{item.category}</div>
                        ))}
                      </div>) :
                    ('')}
                </div>
              </div>
              <div className={s.calc_input}>
                <input
                  type={'number'}
                  value={expenseBtn ? expenseSum : incomeSum}
                  placeholder={`0,00 ${adaptiveState ? 'UAH' : ''}`}
                  onChange={(e) => {
                    expenseBtn ? setExpenseSum(e.target.value) :
                      setIncomeSum(e.target.value);
                  }}
                />
                <Calculator />
              </div>
            </div>
            <div className={s.info_btn}>
              <button onClick={(e) => {
                pushItemsToArray(),
                  handleResetInputs(e);
              }}>Ввод
              </button>
              <button onClick={handleResetInputs}>Очистить
              </button>
            </div>
          </div>
        ) : ('')}
        <BudgetInfoTable expenseArr={addedExpenseItemsArray} incomeArr={addedIncomeItemsArray} epxButton={expenseBtn}
                         incButton={incomeBtn} currentDate={day}
                         mobileWidth={isMobile} />
      </div>
    </div>
  )
}

export default Budget
