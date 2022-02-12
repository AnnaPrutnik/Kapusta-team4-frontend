import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIsFirstLogin, changeIsFirstLogin } from '../../../redux/auth'

import { getUserBalance, setBalance } from '../../../redux/balance'

import s from './BalanceForm.module.scss'
import BalanceNotifications from '../BalanceNotification/BalanceNotification'

const BalanceForm = () => {
  const [userBalance, setUserBalance] = useState('')
  const balance = useSelector(getUserBalance)
  const isFirstTime = useSelector(getIsFirstLogin)

  const dispatch = useDispatch()

  useEffect(() => {
    setUserBalance(balance)
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
        className={s.input}
        placeholder="00.00"
        name="balance"
        id="balance"
        value={userBalance}
        onChange={handleInputChange}
      ></input>
      <span className={s.span}>UAH</span>

      {isFirstTime && <BalanceNotifications />}
      <button className={s.btn} type="submit">
        Подтвердить
      </button>
    </form>
  )
}

export default BalanceForm
