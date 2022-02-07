import s from './HomeContent.module.scss'
import title from '../../images/Background/svg/title.svg'

function HomeContent() {
  return (
    <div className={s.home_content}>
      <svg className={s.title}>
        <use href={`${title}#icon-title`}></use>
      </svg>
      <svg className={s.title_mobile}>
        <use href={`${title}#icon-mobile-title`}></use>
      </svg>
      <p className={s.home_tag}>Smart Finance</p>
    </div>
  )
}

export default HomeContent
