import background from '../../images/Background/svg/background.svg'
import s from '../../styles/component/NotFound/NotFoundView.module.scss'

const NotFoundView = () => {
  return (
    <div className="container bg">
      <div className={s.container}>
        <div className={s.titleWrap}>
          <h1 className={s.title}>Cтраница не найдена</h1>
          <span>
            Вернуться
            <a className={s.link} href="/">
              на главную страницу
            </a>
          </span>
        </div>
        <svg className={s.icon}>
          <use href={`${background}#bottom-background`}></use>
        </svg>
      </div>
    </div>
  )
}

export default NotFoundView
