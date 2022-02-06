import s from './FunctionalBg.module.scss';
import background from '../../images/svg/background.svg';

const IconsBg = () => {
  return (
    <>
      <svg className={s.icons_bg}>
        <use
          href={`${background}#top-background`}
        ></use>
      </svg>
      <svg className={s.tablet_icons_bg}>
        <use href={`${background}#bottom-background`}></use>
      </svg>
    </>
  );
}


export default IconsBg;