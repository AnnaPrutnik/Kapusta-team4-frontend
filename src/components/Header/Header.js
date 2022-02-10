import { useSelector } from 'react-redux'
import Navigation from './Navigation'
import UserMenu from './UserMenu'
import { getIsLoggedIn } from '../../redux/auth/auth-selectors'
import s from './Header.module.scss'

const Header = () => {
  const isLoggesIn = useSelector(getIsLoggedIn)


  return (
    <header className={s.header}>
      <Navigation />
      {isLoggesIn && <UserMenu />}
    </header>
  )
}

export default Header
