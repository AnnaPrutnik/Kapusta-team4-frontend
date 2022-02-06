import React, { useState } from 'react';
import classes from './ExpenseAndIncome.module.scss';
import { Arrow, Calculator, Calendar } from '../../images/expense_income/svg/svg';


const ExpenseAndIncome = () => {
  const [expenseBtn, setExpenseBtn] = useState(true);
  const [incomeBtn, setIncomeBtn] = useState(false);
  const [selectList, setSelectList] = useState(false);
  const [selectDefault, setSelectDefault] = useState('Категория товара');
  const [description, setDescription] = useState('');
  const [addedCategory, setAddedCategory] = useState('');
  const [sum, setSum] = useState('');

  const currentDate = new Date();
  const day = currentDate.getDate() + '.' + (currentDate.getMonth() + 1) + '.' + currentDate.getFullYear();


  return (
    <div className={classes.main_section}>
      <div className={classes.btn_section}>
        <button onClick={() => {
          setExpenseBtn(true);
          setIncomeBtn(false);
        }} className={expenseBtn ? classes.expense_btn_active : classes.expense_btn_disabled}>Расход
        </button>
        <button onClick={() => {
          setIncomeBtn(true);
          setExpenseBtn(false);
        }} className={incomeBtn ? classes.income_btn_active : classes.income_btn_disabled}>Доход
        </button>
      </div>
      <div className={classes.main_content}>
        <div className={classes.top_info}>
          <div className={classes.date}>
            <Calendar />
            <span>{day}</span>
          </div>
          <div className={classes.add_category}>
            <input type='text' placeholder={'Описане товара'} onChange={(e) =>
              setDescription(e.target.value)
            } />
            <div className={classes.select_container}>
              <div onClick={() => {
                setSelectList(!selectList);
              }} className={classes.dropdown_button}>
                <p>{selectDefault}</p>
                {selectList ?
                  <Arrow style={{ transform: 'rotate(180deg)' }} width={10} height={10} /> :
                  <Arrow width={10} height={10} />}
                {/*Тут будут отображаться категории */}

                {/*{selectList ?*/}
                {/*  <div className={classes.dropdown_button_list}>*/}
                {/*    {mass.map((item, index) => <div onClick={() => {*/}
                {/*      setSelectDefault(item.name);*/}
                {/*    }} key={index}>*/}
                {/*      {item.name}*/}
                {/*    </div>)}*/}
                {/*  </div> : ''}*/}
              </div>
            </div>
            <div className={classes.calc_input}>
              <input type='number' placeholder={'0,00'} onChange={(e) => {
                setSum(e.target.value);
              }} />
              <Calculator />
            </div>
          </div>
          <div className={classes.add_or_clear_btn}>
            <button>Ввод</button>
            <button>Очистить</button>
          </div>
        </div>
        <div className={classes.info_table}>
          <div className={classes.titles_and_results}>
            <table>
              <thead>
              <tr>
                <th>Дата</th>
                <th>Описание</th>
                <th>Категория</th>
                <th>Сумма</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              {/*Тут будут отображаться добавленные категории*/}
              {/*{mass1.map(item =>*/}
              {/*  <tr className={classes.added_content}>*/}
              {/*    <td>{item.data}</td>*/}
              {/*    <td>{item.description}</td>*/}
              {/*    <td>{item.category}</td>*/}
              {/*    <td style={{ color: '#E7192E' }}>- {item.summ} грн.</td>*/}
              {/*    <td>*/}
              {/*      <span>*/}
              {/*       <Delete_icon/>
              {/*      </span>*/}
              {/*    </td>*/}
              {/*  </tr>*/}
              {/*)}*/}
              </tbody>
            </table>
          </div>

          <div className={classes.summary_table}>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ExpenseAndIncome;