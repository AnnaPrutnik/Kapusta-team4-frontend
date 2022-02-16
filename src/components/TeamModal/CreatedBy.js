import { useState } from 'react'
import { FcLike } from 'react-icons/fc'
import TeamModal from './TeamModal'
import s from './TeamModal.module.scss'

function CreatedBy() {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(prevState => !prevState)
  }

  return (
    <p className={s.tag}>
      Created by
      <button onClick={toggleModal} className={s.team_btn}>
        GoIt Team
      </button>
      {showModal && <TeamModal onClose={toggleModal} />}
      with <FcLike size="18px" />
    </p>
  )
}

export default CreatedBy
