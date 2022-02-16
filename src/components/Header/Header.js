import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navigation from './Navigation'
import UserMenu from './UserMenu'
import { getIsLoggedIn } from '../../redux/auth/auth-selectors'
import s from './Header.module.scss'

function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn)

  return (
    <header className={s.header}>
      <Navigation />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {isLoggedIn && <UserMenu />}
    </header>
  )
}

export default Header
