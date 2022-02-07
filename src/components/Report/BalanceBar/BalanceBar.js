import React from 'react'
// import MediaQuery from 'react-responsive';
import BackHomeBtn from '../BackHomeBtn/BackHomeBtn'
import CurrentData from '../CurrentData/CurrentData'
import BalanceForm from '../../Balance/BalanceForm/BalanceForm'

const BalanceBar = () => {
  return (
    <div className="balance_bar">
      <BackHomeBtn />
      {/* <MediaQuery maxWidth={767.98}> */}
      <div className="wrap">
        <CurrentData />
        <BalanceForm />
      </div>
      {/* <Balance/> */}
      {/* </MediaQuery> */}
      {/* <MediaQuery minWidth={768}> */}
      {/* <Balance/> */}
      {/* <p className="balance">BALANCE</p>
      <CurrentData /> */}
      {/* </MediaQuery> */}
    </div>
  )
}
export default BalanceBar
