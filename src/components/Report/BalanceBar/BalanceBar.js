import React from 'react';
import MediaQuery from 'react-responsive';
import BackHomeBtn from '../BackHomeBtn/BackHomeBtn';
import CurrentData from '../CurrentData/CurrentData';

const BalanceBar = () => {
  return (
    <div className="balance_bar">
      <BackHomeBtn />
      <MediaQuery maxWidth={767.98}>
        <CurrentData />
        <p className="balance">BALANCE</p>
        {/* <Balance/> */}
      </MediaQuery>
      <MediaQuery minWidth={768}>
        {/* <Balance/> */}
        <p className="balance">BALANCE</p>
        <CurrentData />
      </MediaQuery>
    </div>
  );
};
export default BalanceBar;
