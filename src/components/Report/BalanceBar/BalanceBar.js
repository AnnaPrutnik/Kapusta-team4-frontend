import React from 'react'
import BackHomeBtn from '../BackHomeBtn/BackHomeBtn'
import CurrentData from '../CurrentData/CurrentData'
import BalanceForm from '../../Balance/BalanceForm/BalanceForm'
import s from './BalanceBar.module.scss'

const BalanceBar = () => {
  return (
    <div className={s.bar}>
      <BackHomeBtn />
      <div className={s.wrap}>
        <CurrentData />
        <BalanceForm />
      </div>
    </div>
  )
}
export default BalanceBar
