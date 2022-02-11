import React from 'react'
import BackHomeBtn from '../BackHomeBtn/BackHomeBtn'
import CurrentData from '../CurrentData/CurrentData'
import BalanceInfo from '../../Balance/BalanceInfo/BalanceInfo'
import s from './BalanceBar.module.scss'

const BalanceBar = () => {
  return (
    <div className={s.bar}>
      <BackHomeBtn />
      <div className={s.wrap}>
        <CurrentData />
        <div className={s.form}>
          <BalanceInfo />
        </div>
      </div>
    </div>
  )
}
export default BalanceBar
