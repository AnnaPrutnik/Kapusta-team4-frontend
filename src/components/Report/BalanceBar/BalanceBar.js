import BackHomeBtn from './BackHomeBtn/BackHomeBtn'
import CurrentData from './CurrentData/CurrentData'
import BalanceInfo from './BalanceInfo/BalanceInfo'
import s from './BalanceBar.module.scss'

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
