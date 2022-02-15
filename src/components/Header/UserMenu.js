import { useSelector } from 'react-redux'
import { getUsername } from '../../redux/auth'
import UserLogOut from '../UserLogOut/UserLogOut'
import Avatar from './Avatar'
import UserName from './UserName'
import s from './Header.module.scss'

const UserMenu = () => {
  const userName = useSelector(getUsername)

  return (
    <div className={s.user_container}>
      <Avatar userName={userName} />
      <UserName userName={userName} />
      <UserLogOut />
    </div>
  )
}

export default UserMenu
