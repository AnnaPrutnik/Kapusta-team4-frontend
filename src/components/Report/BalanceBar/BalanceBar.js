import React from 'react'
import MediaQuery from 'react-responsive'
import BackHomeBtn from '../BackHomeBtn/BackHomeBtn'
import CurrentData from '../CurrentData/CurrentData'
import BalanceForm from '../../Balance/BalanceForm/BalanceForm'
import BalanceInfo from '../../Balance/BalanceInfo/BalanceInfo'
import s from './BalanceBar.module.scss'

const BalanceBar = () => {
  return (
    <div className={s.bar}>
      <BackHomeBtn />
      <div className={s.wrap}>
        <CurrentData />
        <div className={s.form}>
          <MediaQuery maxWidth={1279.98}>
            <BalanceInfo />
          </MediaQuery>
          <MediaQuery minWidth={1280}>
            <BalanceForm />
          </MediaQuery>
        </div>
      </div>
    </div>
  )
}
export default BalanceBar
