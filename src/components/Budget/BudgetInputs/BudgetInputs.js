import React, { useEffect, useState } from 'react';
import s from '../Budget.module.scss';
import { Arrow, Calculator } from '../../../images/Budget/svg/svg';
import 'react-datepicker/dist/react-datepicker.css';
import { addTransaction, getExpenseCategory, getIncomeCategory } from '../../../services';

const BudgetInputs = ({ categoriesList, date, transaction, isExp, adaptive }) => {
  const [categoryExpenseItemsArray, setCategoryExpenseItemsArray] = useState([]);
  const [categoryIncomeItemsArray, setCategoryIncomeItemsArray] = useState([]);
  const [addedCategoryArray, setAddedCategoryArray] = useState([]);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Категория товара');
  const [sum, setSum] = useState('');
  const [selectList, setSelectList] = useState(false);
  const [data, setData] = useState({
    date: date,
    description: '',
    categoryId: '',
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

  useEffect(() => {
    categoriesList(addedCategoryArray)
  }, [addedCategoryArray]);

  const handleResetInputs = (e) => {
    e.preventDefault();
  };


  const postRequest = () => {
    addTransaction(data).then(res => {
      console.log(res);
      transaction({
        date: date.getDate() + '.' + (date.getMonth() < 10 ? '0' + date.getMonth() : '') + '.' + date.getFullYear(),
        description: description,
        category: category,
        amount: sum,
      });
    });
  };


  return (
    <>
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
                      setData({ ...data, categoryId: item._id });
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
    </>
  );
};

export default BudgetInputs;