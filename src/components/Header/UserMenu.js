import { useSelector } from 'react-redux'
import { getUsername } from '../../redux/auth'
import Avatar from './Avatar'
import UserName from './UserName'
import UserLogOut from '../Auth/UserLogOut'
import s from '../../styles/component/Header/Header.module.scss'

function UserMenu() {
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
