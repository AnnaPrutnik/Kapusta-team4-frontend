import s from './BgIcons.module.scss'
import background from '../../images/Background/svg/background.svg'

function BgIcons() {
  return (
    <>
      <svg className={s.bottom_icons}>
        <use href={`${background}#bottom-background`}></use>
      </svg>
      <svg className={s.mobile_bottom_icons}>
        <use href={`${background}#bottom-background-mobile`}></use>
      </svg>
    </>
  )
}

export default BgIcons
