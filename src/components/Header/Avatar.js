import { useState } from 'react'
import { useSelector } from 'react-redux'
import EditAvatarModal from '../Modal/EditAvatarModal'
import { getUserAvatar } from '../../redux/auth'
import s from './Header.module.scss'

const Avatar = ({ userName }) => {
  const [showModal, setShowModal] = useState(false)
  const userAvatar = useSelector(getUserAvatar)

  const toggleModal = () => {
    setShowModal(prevState => !prevState)
  }

  return (
    <>
      <button onClick={toggleModal} className={s.avatar} type="button">
        {userAvatar}
      </button>
      {showModal && <EditAvatarModal onClose={toggleModal} />}
    </>
  )
}

export default Avatar
