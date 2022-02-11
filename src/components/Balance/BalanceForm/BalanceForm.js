import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { balanceSet } from '../../../redux/auth/auth-operation'
import { getUserBalance } from '../../../redux/auth/auth-selectors'
import s from './BalanceForm.module.scss'
import BalanceNotifications from '../BalanceNotification/BalanceNotification'

const BalanceForm = () => {
  const dispatch = useDispatch()

  const [value, setValue] = useState(useSelector(getUserBalance))

  const handleInputChange = e => {
    const value = e.currentTarget.value
    setValue(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(balanceSet({ value }))
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>Баланс:</label>

      <input
        className={s.input}
        placeholder="00.00"
        name="balance"
        value={value}
        onChange={handleInputChange}
      ></input>
      <span className={s.span}>UAH</span>

      {!value && <BalanceNotifications />}
      <button className={s.btn} type="submit">
        Подтвердить
      </button>
    </form>
  )
}

export default BalanceForm
