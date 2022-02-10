import { useState } from 'react'
import { useDispatch } from 'react-redux'

import ExitModal from '../Modal/ExitModal'
import { logOut } from '../../redux/auth/'

import s from './UserLogout.module.scss'

const UserLogOut = () => {
  const dispatch = useDispatch()
  const [setModalOpen, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal)
  }

  const logoutModal = () => {
    dispatch(logOut())
    toggleModal()
  }

  return (
    <>
      <button type="button" onClick={toggleModal} className={s.btn_logout}>
        Выйти
      </button>
      {setModalOpen && (
        <ExitModal
          text={'Вы действительно хотите выйти?'}
          handleClickLeft={logoutModal}
          handleClickRight={toggleModal}
          onClose={toggleModal}
        />
      )}
    </>
  )
}

export default UserLogOut
