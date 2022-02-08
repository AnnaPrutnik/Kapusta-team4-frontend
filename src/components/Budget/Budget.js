import React, { useEffect, useState } from 'react';
import s from './Budget.module.scss';
import { Arrow, Calculator, Calendar, Delete, GoBackArrow } from '../../images/Budget/svg/svg';


const Budget = () => {
  const [expenseBtn, setExpenseBtn] = useState(true);
  const [incomeBtn, setIncomeBtn] = useState(false);
  const [selectList, setSelectList] = useState(false);
  const [adaptiveState, setAdaptiveState] = useState(false);
  const [width, setWidth] = useState(innerWidth);
  const [selectDefault, setSelectDefault] = useState('Категория товара');
  const [description, setDescription] = useState('');
  const [addedCategory, setAddedCategory] = useState('');
  const [sum, setSum] = useState('');

  const currentDate = new Date();
  const day = currentDate.getDate() + '.' + (currentDate.getMonth() + 1) + '.' + currentDate.getFullYear();

  const mass1 = [{
    description: 'hello',
    category: 'transport',
    summ: 3000,
  }];
  const mass2 = [{
    description: 'hello2',
    category: 'metro',
    summ: 3500,
  },
    {
      description: 'hello3',
      category: 'metro',
      summ: 3500,
    },
    {
      description: 'hello4',
      category: 'car',
      summ: 3600,
    },
    {
      description: 'hello5',
      category: 'metro',
      summ: 3900,
    },
    {
      description: 'hello6',
      category: 'transport',
      summ: 3700,
    },
  ];
  const array = [
    {
      name: 'Mango',
    },
    {
      name: 'Kiwi',
    },
    {
      name: 'Ajax',
    },
    {
      name: 'Jay',
    },
    {
      name: 'Poly',
    },
  ];

  const mergeArrays = width < 767 ? mass1.concat(mass2) : (expenseBtn && mass1 || incomeBtn && mass2);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(innerWidth);
    });
  }, [window]);

  return (
    <div className={s.budget_section}>
      {adaptiveState ? '' :
        <div className={s.btn_section}>
          <button onClick={() => {
            setExpenseBtn(true);
            setIncomeBtn(false);
            width < 767 ? setAdaptiveState(true) : '';
          }} className={expenseBtn ? s.btn_active : s.btn_disabled}>Расход
          </button>
          <button onClick={() => {
            setIncomeBtn(true);
            setExpenseBtn(false);
            width < 767 ? setAdaptiveState(true) : '';
          }} className={incomeBtn ? s.btn_active : s.btn_disabled}>Доход
          </button>
        </div>
      }
      <div className={s.main_content}>
        {(width < 767 ? adaptiveState : !adaptiveState) ?
          <div className={s.main_info}>
            {adaptiveState ? <button className={s.go_back_btn} onClick={() => {
                setAdaptiveState(false);
              }}>
                <GoBackArrow />
              </button> :
              <div className={s.date}>
                <Calendar />
                <span>{day}</span>
              </div>
            }
            <div className={s.add_category}>
              <input type='text' placeholder={'Описане товара'} onChange={(e) =>
                setDescription(e.target.value)
              } />
              <div className={s.select_container}>
                <div onClick={() => {
                  setSelectList(!selectList);
                }} className={s.dropdown_button}>
                  <p>{selectDefault}</p>
                  {selectList ?
                    <Arrow style={{ transform: 'rotate(180deg)' }} width={10} height={10} /> :
                    <Arrow width={10} height={10} />}
                  {selectList ?
                    <div className={s.dropdown_button_list}>
                      {array.map((item, index) => <div onClick={() => {
                        setSelectDefault(item.name);
                      }} key={index}>
                        {item.name}
                      </div>)}
                    </div> : ''}
                </div>
              </div>
              <div className={s.calc_input}>
                <input type='number' placeholder={`0,00 ${adaptiveState ? 'UAH' : ''}`} onChange={(e) => {
                  setSum(e.target.value);
                }} />
                <Calculator />
              </div>
            </div>
            <div className={s.info_btn}>
              <button>Ввод</button>
              <button>Очистить</button>
            </div>
          </div> : ''
        }
        <div className={s.info_table}>
          <div className={s.titles_and_results}>
            {width < 767 ? '' :
              <table>
                {width < 767 ? '' :
                  <thead>
                  <tr>
                    <th>Дата</th>
                    <th>Описание</th>
                    <th>Категория</th>
                    <th>Сумма</th>
                    {mass1.length === 0 ? '' : <th style={{ color: 'transparent' }}>Удалить</th>}
                  </tr>
                  </thead>
                }

                {mergeArrays.length > 0 ?
                  <tbody>
                  {mergeArrays.map((item, index) =>
                    <tr className={s.added_content} key={index}>
                      <td>{day}</td>
                      <td>{item.description}</td>
                      <td>{item.category}</td>
                      {expenseBtn ? <td style={{ color: '#E7192E' }}>-{item.summ}грн.</td> :
                        <td style={{ color: 'green' }}>+{item.summ}грн.</td>
                      }
                      <td>
                <span><Delete />
                </span></td>
                    </tr>)}
                  </tbody> : ''}
              </table>}

            {width < 767 ? <div className={s.info_table_mobile}>
              {mergeArrays.map(item => <div className={s.info_items}>
                <div>
                  <span>{item.description}</span>
                  <div>
                    <span>{day}</span>
                    <span>{item.category}</span>
                  </div>
                </div>
                <div>
                  <span  style={{ color: '#E7192E' }}>-{item.summ}грн.</span>
                  <span><Delete /></span>
                </div>
              </div>)}
            </div> : ''}
            {mass1.length === 0 ?
              <div className={s.content_without_added_category}>
                <span>Тут будут отображаться добавленные вами категории...</span>
              </div> : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;