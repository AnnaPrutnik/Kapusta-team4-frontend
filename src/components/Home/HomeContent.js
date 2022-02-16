import title from '../../images/Background/svg/title.svg'
import s from '../../styles/component/Home/Home.module.scss'

function HomeContent() {
  return (
    <div>
      <div className={s.title_container}>
        <svg className={s.title}>
          <use href={`${title}#icon-title`}></use>
        </svg>
        <svg className={s.title_mobile}>
          <use href={`${title}#icon-mobile-title`}></use>
        </svg>
        <p className={s.home_tag}>Smart Finance</p>
      </div>
    </div>
  )
}

export default HomeContent
