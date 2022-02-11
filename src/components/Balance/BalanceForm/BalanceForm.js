import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { balanceSet, balanceGet } from '../../../redux/auth/auth-operation'
import s from './BalanceForm.module.scss'
import BalanceNotifications from '../BalanceNotification/BalanceNotification'

const BalanceForm = () => {
  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  useEffect(() => {
    dispatch(balanceGet()).then(r => setValue(r.payload))
  }, [])

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
        type="number"
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
