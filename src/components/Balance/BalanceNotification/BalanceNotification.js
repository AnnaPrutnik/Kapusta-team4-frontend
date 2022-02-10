import s from './BalanceNotification.module.scss'

const BalanceNotification = () => {
  return (
    <div className={s.container}>
      <div className={s.notification}>
        <p className={s.main_text}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </p>
        <p className={s.text}>
          Ты не можешь тратить деньги пока их у тебя нет :{')'}
        </p>
      </div>
    </div>
  )
}

export default BalanceNotification
