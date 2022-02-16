import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth';
import VerifyEmail from '../../components/VerifyEmail/VerifyEmail';

const VerifyEmailView = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)
  return (
    <>
      {isLoggedIn && (
        <div className="bg">
          <div className="container">
            <VerifyEmail />
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyEmailView;