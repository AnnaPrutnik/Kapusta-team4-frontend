import s from './BalanceForm.module.scss'
import BalanceNotifications from '../BalanceNotification/BalanceNotification'

const BalanceForm = () => {
  //tut budet logika
  let balance = 5 //чтобы модалка появилась, поставить 0
  const result = () => {
    if (balance > 0) {
      return false
    }
    return true
  }

  return (
    <form className={s.form}>
      <label className={s.label}>Баланс:</label>
      <input className={s.input} placeholder="00.00 UAH"></input>
      {result() && <BalanceNotifications />}
      <button className={s.btn} type="submit">
        Подтвердить
      </button>
    </form>
  )
}

export default BalanceForm
