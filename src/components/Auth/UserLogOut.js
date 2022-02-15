import { useState } from 'react'
import { useDispatch } from 'react-redux'
import ExitModal from '../Modal/ExitModal'
import { logOut } from '../../redux/auth'
import logout from '../../images/Header/logout.svg'
import s from '../../styles/component/Auth/UserLogout.module.scss'

function UserLogOut() {
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
      <button type="button" onClick={toggleModal} className={s.mobile_logout}>
        <svg className={s.logout_icon}>
          <use href={`${logout}#icon-logout`}></use>
        </svg>
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
