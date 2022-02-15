import s from './IconsBg.module.scss';
import background from '../../images/svg/background.svg';

function IconsBg() {
  return (
    <>
      <svg className={s.icons_bg}>
        <use
          href={`${background}#top-background`}
        ></use>
      </svg>
      <svg className={s.mobile_icons_bg}>
        <use href={`${background}#top-background-mobile`}></use>
      </svg>
    </>
  );
}


export default IconsBg;