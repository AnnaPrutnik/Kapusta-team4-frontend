import ReportBtn from './ReportBtn'
import BalanceForm from './BalanceForm'
import s from '../../../styles/component/FinanceView/BalanceBar/Balance.module.scss'

function Balance() {
  return (
    <section className={s.balanceContainer}>
      <ReportBtn />
      <BalanceForm />
    </section>
  )
}

export default Balance
