import React from 'react';
import { useSelector } from 'react-redux';
import { getUsername } from '../../redux/auth';
import s from '../../styles/component/VerifyEmail/VerifyEmail.module.scss';
import { Link } from 'react-router-dom';

const VerifyEmail = () => {
  const userName = useSelector(getUsername);
  return (
    <div className={s.verify_email_page}>
      <h1>Привет, {userName}</h1>
      <h3>Добро пожаловать в KAPU$TA Finance!</h3>
      <Link to='/income'>
        <button>Приступить к роботе
        </button>
      </Link>

    </div>
  );
};

export default VerifyEmail;