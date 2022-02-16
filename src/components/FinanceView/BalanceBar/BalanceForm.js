import { useState, useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIsFirstLogin, changeIsFirstLogin } from '../../../redux/auth'
import { getUserBalance, setBalance } from '../../../redux/balance'
import BalanceNotifications from './BalanceNotification'
import s from '../../../styles/component/FinanceView/BalanceBar/BalanceForm.module.scss'

function BalanceForm() {
  const [userBalance, setUserBalance] = useState('')
  const balance = useSelector(getUserBalance)
  const isFirstTime = useSelector(getIsFirstLogin)

  const dispatch = useDispatch()

  useEffect(() => {
    setUserBalance(Number(balance).toFixed(2))
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

  const inputClasses = [s.input]
  if (balance < 0) {
    inputClasses.push(s.negative)
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor="balance">
        Баланс:
      </label>
      <div className={s.wrap}>
        <input
          type="text"
          className={inputClasses.join(' ')}
          placeholder="00.00"
          name="balance"
          id="balance"
          value={userBalance}
          onChange={handleInputChange}
          size={userBalance.length || 1}
        />

        <span className={s.uah}>UAH</span>
        {isFirstTime && <BalanceNotifications />}
      </div>
      <button className={s.btn} type="submit">
        Подтвердить
      </button>
    </form>
  )
}

export default BalanceForm
