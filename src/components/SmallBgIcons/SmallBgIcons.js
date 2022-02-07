import s from './SmallBgIcons.module.scss';
import background from '../../images/svg/background.svg';

const SmallBgIcons = () => {
  return (
    <>
      <svg className={s.bottom_icons}>
          <use href={`${background}#bottom-background`}></use>
        </svg>
        <svg className={s.mobile_bottom_icons}>
          <use href={`${background}#bottom-background-mobile`}></use>
        </svg>
    </>
  );
}


export default SmallBgIcons;