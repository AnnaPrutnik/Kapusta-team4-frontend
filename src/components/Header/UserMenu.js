import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getUsername, logOut } from '../../redux/auth'
import logout from '../../images/Header/logout.svg'
import s from './Header.module.scss'

const UserMenu = () => {
  const dispatch = useDispatch()
  const onLogOut = () => dispatch(logOut())

  const userName = useSelector(getUsername)
  const avatar = () => userName.charAt(0)

  return (
    <div className={s.user_container}>
      <div className={s.avatar}>{avatar}</div>
      <p className={s.name}>{userName}</p>
      <Link onClick={onLogOut} className={s.logout} to="/">
        Выйти
      </Link>
      <Link onClick={onLogOut} className={s.logout_mobile} to="/">
        <svg className={s.logout_icon}>
          <use href={`${logout}#icon-logout`}></use>
        </svg>
      </Link>
    </div>
  )
}

export default UserMenu
