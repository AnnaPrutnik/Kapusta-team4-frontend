// import sprite from '../../../images/report/sprite.svg'
import sprite from '../../../images/Budget/Sprite.svg'
import s from './ReportBtn.module.scss'
import { NavLink } from 'react-router-dom'

const ReportBtn = () => {
  return (
    <NavLink to="/report">
      <button type="button" className={s.ReportBtn}>
        Перейти к отчетам
        <div className={s.Icon}>
          <svg width="14" height="14">
            <use href={`${sprite}#Report`}></use>
          </svg>
        </div>
      </button>
    </NavLink>
  )
}

export default ReportBtn
