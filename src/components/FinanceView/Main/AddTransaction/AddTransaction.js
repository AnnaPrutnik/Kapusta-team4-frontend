import { useEffect, useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { toast } from 'react-toastify'
import Select from 'react-select'
import { updateBalance } from '../../../../redux/balance'
import {
  addTransaction,
  getExpenseCategory,
  getIncomeCategory,
} from '../../../../services'
import sprite from '../../../../images/FinanceView/icons.svg'
import 'react-datepicker/dist/react-datepicker.css'
import { customStyles } from '../../../../lib/styleSelect'
import s from './AddTransaction.module.scss'

function AddTransaction({ date, changeTransactions, isExpense, onCloseForm }) {
  const [categoryOptions, setCategoryOptions] = useState([])
  const [description, setDescription] = useState('')
  const [selectedOption, setSelectedOption] = useState(null)
  const [amount, setAmount] = useState('')
  const notMobile = useMediaQuery({ minWidth: 768 })

  const dispatch = useDispatch()

  useEffect(() => {
    if (isExpense === undefined) {
      return
    }
    if (isExpense) {
      getExpenseCategory().then(res => handleChangeOptions(res))
    } else {
      getIncomeCategory().then(res => handleChangeOptions(res))
    }
  }, [isExpense])

  const handleChangeOptions = array => {
    let options = []
    array.map(
      ({ _id, category }) =>
        (options = [...options, { value: _id, label: category }]),
    )
    setCategoryOptions(options)
    setSelectedOption(null)
  }

  const handleChangeDescription = e => {
    setDescription(e.target.value)
  }

  const handleChangeAmount = e => {
    setAmount(e.target.value)
  }

  const handleFormSubmit = async e => {
    e.preventDefault()

    if (!description || !amount || !selectedOption) {
      toast.error('Все поля должны быть заполнены!', {
        position: toast.POSITION.TOP_LEFT,
      })
      return
    }
    const addedTransaction = {
      date,
      description,
      categoryId: selectedOption.value,
      amount,
    }
    const { data } = await addTransaction(addedTransaction)
    const { newTransaction, newBalance } = data
    changeTransactions({ ...newTransaction, selectedOption })
    dispatch(updateBalance(newBalance))
    handleResetInputs()
    if (!notMobile) {
      onCloseForm(false)
    }
    toast.success('Транзакция добавлена!', {
      position: toast.POSITION.TOP_LEFT,
    })
  }

  const handleResetInputs = () => {
    setSelectedOption('Категория товара')
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
        <div className={s.select}>
          <Select
            placeholder={'Категория товара'}
            value={selectedOption}
            onChange={setSelectedOption}
            options={categoryOptions}
            styles={customStyles}
          />
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
          <span className={s.icon}>
            <svg width="20" height="20">
              <use href={`${sprite}#calculator`}></use>
            </svg>
          </span>
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
