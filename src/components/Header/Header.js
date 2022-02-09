import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './Header.module.scss';


const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={s.header}>
      <Navigation />
      { isLoggedIn && <UserMenu /> }
    </header>
  );
}

export default Header;
