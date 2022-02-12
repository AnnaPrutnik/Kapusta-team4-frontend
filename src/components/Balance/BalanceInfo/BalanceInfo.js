import s from './BalanceInfo.module.scss'
import { useSelector } from 'react-redux'
// import { getUserBalance } from '../../../redux/auth/auth-selectors'

const BalanceInfo = () => {
  // const value = useSelector(getUserBalance)

  return (
    <div className={s.container}>
      <p className={s.title}>Баланс:</p>
      <p className={s.value}>{value}</p>
      <span className={s.span}>UAH</span>
    </div>
  )
}

export default BalanceInfo
