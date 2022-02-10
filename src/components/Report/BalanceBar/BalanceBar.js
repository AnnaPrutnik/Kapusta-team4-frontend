import React from 'react'
import BackHomeBtn from '../BackHomeBtn/BackHomeBtn'
import CurrentData from '../CurrentData/CurrentData'
import s from './BalanceBar.module.scss'
import BalanceInfo from '../../Balance/BalanceInfo/BalanceInfo'

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
