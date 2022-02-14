import React from 'react'
import BackHomeBtn from '../BackHomeBtn/BackHomeBtn'
import CurrentData from '../CurrentData/CurrentData'
import BalanceInfo from '../../Balance/BalanceInfo/BalanceInfo'
import s from './BalanceBar.module.scss'

const BalanceBar = ({ month, setMonth, year, setYear }) => {
  return (
    <div className={s.bar}>
      <BackHomeBtn />
      <div className={s.wrap}>
        <CurrentData
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
        />
        <div className={s.form}>
          <BalanceInfo />
        </div>
      </div>
    </div>
  )
}
export default BalanceBar
