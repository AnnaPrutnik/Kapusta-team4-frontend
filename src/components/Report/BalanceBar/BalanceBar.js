import BackHomeBtn from './BackHomeBtn'
import CurrentData from './CurrentData'
import BalanceInfo from './BalanceInfo'
import s from '../../../styles/component/ReportView/BalanceBar/BalanceBar.module.scss'

function BalanceBar({ setMonth, setYear }) {
  return (
    <div className={s.bar}>
      <BackHomeBtn />
      <div className={s.wrap}>
        <CurrentData setMonth={setMonth} setYear={setYear} />
        <div className={s.form}>
          <BalanceInfo />
        </div>
      </div>
    </div>
  )
}
export default BalanceBar
