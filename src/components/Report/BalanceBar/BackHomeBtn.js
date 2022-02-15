import { Link } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md'
import s from '../../../styles/component/ReportView/BalanceBar/BackHomeBtn.module.scss'

function BackHomeBtn() {
  return (
    <div className={s.btn}>
      <Link className={s.link} to="/income">
        <MdKeyboardBackspace className={s.icon} />
        <span className={s.text}>Вернуться на главную</span>
      </Link>
    </div>
  )
}

export default BackHomeBtn
