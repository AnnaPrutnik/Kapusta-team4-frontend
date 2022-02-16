import ReportBtn from './ReportBtn/ReportBtn'
import BalanceForm from './BalanceForm/BalanceForm'
import s from './Balance.module.scss'

function Balance() {
  return (
    <section className={s.balanceContainer}>
      <ReportBtn />
      <BalanceForm />
    </section>
  )
}

export default Balance
