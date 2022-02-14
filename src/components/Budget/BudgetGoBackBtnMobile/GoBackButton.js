import React from 'react';
import s from '../Budget.module.scss';
import { GoBackArrow } from '../../../images/Budget/svg/svg';

const GoBackButton = ({adaptiveFunc}) => {
  return (
    <>
      <button
        className={s.go_back_btn}
        onClick={() => {
          adaptiveFunc(false);
        }}><GoBackArrow />
      </button>
    </>
  );
};

export default GoBackButton;