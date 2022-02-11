// import sprite from '../../../images/report/sprite.svg'
import { ReactComponent as ReportBtnIcon } from './ReportBtnIcon.svg'
import s from './ReportBtn.module.scss'
import { NavLink } from 'react-router-dom'

const ReportBtn = () => {
  return (
    <NavLink to="/report">
      <button type="button" className={s.ReportBtn}>
        Перейти к отчетам
        <div className={s.Icon}>
          <ReportBtnIcon />
          {/* <svg width="20" height="20">
          <use href={`${sprite}#icon-chart`}></use>
        </svg> */}
        </div>
      </button>
    </NavLink>
  )
}

export default ReportBtn
