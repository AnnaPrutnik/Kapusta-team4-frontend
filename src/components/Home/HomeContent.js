import BgIcons from '../Background/BgIcons'
import title from '../../images/Background/svg/title.svg'
import s from './Home.module.scss'

function HomeContent() {
  return (
    <div className={s.bg_main}>
      <div className={s.title_container}>
        <svg className={s.title}>
          <use href={`${title}#icon-title`}></use>
        </svg>
        <svg className={s.title_mobile}>
          <use href={`${title}#icon-mobile-title`}></use>
        </svg>
        <p className={s.home_tag}>Smart Finance</p>
      </div>
      <BgIcons />
    </div>
  )
}

export default HomeContent
