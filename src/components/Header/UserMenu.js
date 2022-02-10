import { useSelector, useDispatch } from 'react-redux'
import { getUsername } from '../../redux/auth'
import UserLogOut from '../UserLogOut/UserLogOut'
import s from './Header.module.scss'

const UserMenu = () => {
  const userName = useSelector(getUsername)
  const avatar = () => userName.charAt(0)

  return (
    <div className={s.user_container}>
      <div className={s.avatar}>{avatar()}</div>
      <p className={s.name}>{userName}</p>
      <UserLogOut />
    </div>
  )
}

export default UserMenu
