import s from './BalanceInfo.module.scss'

const BalanceInfo = () => {
  return (
    <div className={s.container}>
      <p className={s.title}>Баланс:</p>
      <p className={s.value}>00.00</p>
      <span className={s.span}>UAH</span>
    </div>
  )
}

export default BalanceInfo
