import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIsFirstLogin, changeIsFirstLogin } from '../../../redux/auth'
import { getUserBalance, setBalance } from '../../../redux/balance'
import BalanceNotifications from './BalanceNotification'
import s from '../../../styles/component/FinanceView/BalanceBar/BalanceForm.module.scss'

function BalanceForm () {
  const [userBalance, setUserBalance] = useState('')
  const balance = useSelector(getUserBalance)
  const isFirstTime = useSelector(getIsFirstLogin)

  const dispatch = useDispatch()

  useEffect(() => {
    if (balance > 0) {
      setUserBalance(balance)
    }
  }, [balance])

  const handleInputChange = e => {
    const value = e.currentTarget.value
    setUserBalance(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setBalance(userBalance))
    dispatch(changeIsFirstLogin())
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor="balance">
        Баланс:
      </label>

      <input
        type="text"
        className={s.input}
        placeholder="00.00"
        name="balance"
        id="balance"
        value={`${new Intl.NumberFormat('ru-RU', {
          minimumFractionDigits: 2,
        }).format(userBalance)} UAH`}
        onChange={handleInputChange}
      />

      {isFirstTime && <BalanceNotifications />}
      <button className={s.btn} type="submit">
        Подтвердить
      </button>
    </form>
  )
}

export default BalanceForm
