import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../redux/auth/'
import s from './Header.module.scss'
import logo from '../../images/Header/logo.svg'

function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn)

  return (
    <nav>
      {!isLoggedIn && (
        <Link className={s.link} to="/">
          <svg className={s.logo}>
            <use href={`${logo}#icon-logo`}></use>
          </svg>
        </Link>
      )}
      {isLoggedIn && (
        <Link className={s.link} to="/income">
          <svg className={s.auth_logo}>
            <use href={`${logo}#icon-logo`}></use>
          </svg>
        </Link>
      )}
    </nav>
  )
}

export default Navigation
