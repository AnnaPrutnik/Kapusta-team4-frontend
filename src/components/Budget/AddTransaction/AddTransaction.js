import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import s from './AddTransaction.module.scss'
import { IoIosArrowDown } from 'react-icons/io'
import sprite from '../../../images/Budget/Sprite.svg'
import { updateBalance } from '../../../redux/balance'

import 'react-datepicker/dist/react-datepicker.css'
import {
  addTransaction,
  getExpenseCategory,
  getIncomeCategory,
} from '../../../services'

const AddTransaction = function ({
  date,
  changeTransactions,
  isExpense,
  onCloseForm,
}) {
  const [categoryItems, setCategoryItems] = useState([])
  const [description, setDescription] = useState('')
  const [categoryId, setCategoryId] = useState(null)
  const [category, setCategory] = useState('Категория товара')
  const [isOpen, setIsOpen] = useState(false)
  const [amount, setAmount] = useState('')
  const notMobile = useMediaQuery({ minWidth: 768 })

  const dispatch = useDispatch()

  useEffect(() => {
    if (isExpense === undefined) {
      return
    }
    if (isExpense) {
      getExpenseCategory().then(res => setCategoryItems(res))
    } else {
      getIncomeCategory().then(res => setCategoryItems(res))
    }
  }, [isExpense])

  const handleChangeDescription = e => {
    setDescription(e.target.value)
  }

  const handleToggleSelectList = e => {
    setIsOpen(true)
  }

  const handleChangeAmount = e => {
    setAmount(e.target.value)
  }

  const handleClickList = e => {
    setCategory(e.target.textContent)
    setCategoryId(e.target.id)
    setIsOpen(false)
  }
  const handleFormSubmit = async e => {
    e.preventDefault()

    const addedTransaction = {
      date,
      description,
      categoryId,
      amount,
    }
    const { data } = await addTransaction(addedTransaction)
    const { newTransaction, newBalance } = data
    changeTransactions({ ...newTransaction, category })
    dispatch(updateBalance(newBalance))
    handleResetInputs()
    if (!notMobile) {
      onCloseForm(false)
    }
  }

  const handleResetInputs = () => {
    setCategory('Категория товара')
    setDescription('')
    setAmount('')
  }

  return (
    <form className={s.form} onSubmit={handleFormSubmit}>
      <div className={s.section}>
        <label>
          <input
            type="text"
            placeholder={'Описане товара'}
            value={description}
            onChange={handleChangeDescription}
            className={s.description}
          />
        </label>
        <div className={s.select_container}>
          <div className={s.dropdown}>
            <p className={s.header} onClick={handleToggleSelectList}>
              {category}
            </p>

            <IoIosArrowDown
              className={s.arrow}
              onClick={handleToggleSelectList}
              style={{ transform: isOpen ? 'rotate(180deg)' : '' }}
              width={10}
              height={10}
            />

            {isOpen && (
              <ul className={s.list} onClick={handleClickList}>
                {categoryItems.map(item => (
                  <li key={item._id} id={item._id} className={s.item}>
                    {item.category}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className={s.sum}>
          <label>
            <input
              type="number"
              value={amount}
              placeholder={notMobile ? '0,00' : '0,00 UAH'}
              onChange={handleChangeAmount}
              className={s.calc}
            />
          </label>
          <div className={s.icon}>
            <svg width="20" height="20">
              <use href={`${sprite}#calculator`}></use>
            </svg>
          </div>
        </div>
      </div>
      <div className={s.wrap}>
        <button type="submit" className={s.add}>
          Ввод
        </button>
        <button type="button" onClick={handleResetInputs} className={s.clear}>
          Очистить
        </button>
      </div>
    </form>
  )
}

export default AddTransaction