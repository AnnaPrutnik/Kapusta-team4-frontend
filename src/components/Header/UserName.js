import { useState } from 'react'
import EditNameModal from '../Modal/EditNameModal'
import s from '../../styles/component/Header/Header.module.scss'

const UserName = ({ userName }) => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(prevState => !prevState)
  }

  return (
    <>
      <button onClick={toggleModal} className={s.name} type="button">
        {userName}
      </button>
      {showModal && (
        <EditNameModal currentName={userName} onClose={toggleModal} />
      )}
    </>
  )
}

export default UserName
