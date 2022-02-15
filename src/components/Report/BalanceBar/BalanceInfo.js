import { useSelector } from 'react-redux'
import { getUserBalance } from '../../../redux/balance'
import s from '../../../styles/component/ReportView/BalanceBar/BalanceInfo.module.scss'

function BalanceInfo() {
  const value = useSelector(getUserBalance)

  return (
    <div className={s.container}>
      <p className={s.title}>Баланс:</p>
      <p className={s.value}>{`${new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 2,
      }).format(value)} UAH`}</p>
    </div>
  )
}

export default BalanceInfo