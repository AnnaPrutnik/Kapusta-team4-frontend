import s from './BalanceInfo.module.scss'
import { useSelector } from 'react-redux'
import { getUserBalance } from '../../../redux/balance'

const BalanceInfo = () => {
  const value = useSelector(getUserBalance)

  return (
    <div className={s.container}>
      <p className={s.title}>Баланс:</p>
      <p className={s.value}>{`${value} UAH`}</p>
    </div>
  )
}

export default BalanceInfo
