import React, { useEffect, useState } from 'react';
import s from './Budget.module.scss';
import { Arrow, Calculator, Calendar, GoBackArrow } from '../../images/Budget/svg/svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getExpenseCategory, getIncomeCategory } from '../../services/categoryApi/categoryApi';
import CalendarContainer from './CalendarContainer';
import { addTransaction } from '../../services/transactionsApi/transactionsApi';

const BudgetInputs = ({ transaction, isExp, adaptiveFunc, adaptive }) => {
  const [categoryExpenseItemsArray, setCategoryExpenseItemsArray] = useState([]);
  const [categoryIncomeItemsArray, setCategoryIncomeItemsArray] = useState([]);
  const [addedCategoryArray, setAddedCategoryArray] = useState([]);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Категория товара');
  const [sum, setSum] = useState('');
  const [selectList, setSelectList] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState({
    date: startDate,
    description: '',
    category: '',
    amount: '',
  });


  useEffect(() => {
    getExpenseCategory()
      .then(items => {
        setCategoryExpenseItemsArray(items);
      });
    getIncomeCategory()
      .then(items => {
        setCategoryIncomeItemsArray(items);
      });
  }, []);

  useEffect(() => {
    setAddedCategoryArray(categoryExpenseItemsArray.concat(categoryIncomeItemsArray));
  }, [categoryExpenseItemsArray, categoryIncomeItemsArray]);

  const handleResetInputs = (e) => {
    e.preventDefault();
  };


  const postRequest = () => {
    addTransaction(data).then(res => {
      console.log(res);
      transaction({
        date: startDate.getDate() + '.' + (startDate.getMonth() < 10 ? '0' + startDate.getMonth() : '') + '.' + startDate.getFullYear(),
        description: description,
        category: category,
        amount: sum,
      })
      ;
    });
  };


  return (

    <div className={s.main_info}>
      {adaptive ? (
          <button
            className={s.go_back_btn}
            onClick={() => {
              adaptiveFunc(false);
            }}><GoBackArrow />
          </button>) :
        (<div className={s.date}>
          <Calendar />
          <DatePicker calendarContainer={CalendarContainer} dateFormat='dd/MM/yyy' selected={startDate}
                      onChange={(date) => setStartDate(date)} />
        </div>)}
      <div className={s.add_category}>
        <input
          type={'text'}
          placeholder={'Описане товара'}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            setData({ ...data, description: e.target.value });
          }} />
        <div className={s.select_container}>
          <div
            onClick={() => {
              setSelectList(!selectList);
            }}
            className={s.dropdown_button}>
            <p>{category}</p>
            {selectList ? (
                <Arrow
                  style={{ transform: 'rotate(180deg)' }}
                  width={10}
                  height={10}
                />) :
              (<Arrow width={10} height={10} />)}
            {selectList ? (
                <div className={s.dropdown_button_list}>
                  {addedCategoryArray.filter(item => item.isExpense === isExp).map((item, index) => (
                    <div onClick={() => {
                      setCategory(item.category);
                      setData({ ...data, category: item._id });
                    }} key={index} id={item._id}>{item.category}</div>
                  ))}
                </div>) :
              ('')}
          </div>
        </div>
        <div className={s.calc_input}>
          <input
            type={'number'}
            value={sum}
            placeholder={`0,00 ${adaptive ? 'UAH' : ''}`}
            onChange={(e) => {
              setSum(e.target.value);
              setData({ ...data, amount: e.target.value });
            }}
          />
          <Calculator />
        </div>
      </div>
      <div className={s.info_btn}>
        <button onClick={(e) => {
          handleResetInputs(e);
          postRequest();
        }}>Ввод
        </button>
        <button onClick={handleResetInputs}>Очистить
        </button>
      </div>
    </div>
  );
};

export default BudgetInputs;