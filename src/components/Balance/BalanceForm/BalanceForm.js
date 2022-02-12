import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIsFirstLogin } from '../../../redux/auth'
import {
  getUserBalance,
  setBalance,
  updateBalance,
} from '../../../redux/balance'

import s from './BalanceForm.module.scss'
import BalanceNotifications from '../BalanceNotification/BalanceNotification'

const BalanceForm = () => {
  const [userBalance, setUserBalance] = useState(null)
  const balance = useSelector(getUserBalance)
  const isFirstTime = useSelector(getIsFirstLogin)

  const dispatch = useDispatch()

  useEffect(() => {
    setBalance(balance)
  }, [userBalance])

  const handleInputChange = e => {
    console.log('click')
    const value = e.currentTarget.value
    setUserBalance(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(userBalance)
    dispatch(updateBalance(300))
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>Баланс:</label>

      <input
        className={s.input}
        placeholder="00.00"
        name="balance"
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
