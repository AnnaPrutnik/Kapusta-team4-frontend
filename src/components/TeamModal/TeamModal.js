import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import TeamContent from './TeamContent'
import s from './TeamModal.module.scss'
import data from './data.json'

const modalRoot = document.getElementById('modal-root')

const TeamModal = ({ onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose()
    }
  }

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  }

  return createPortal(
    <div onClick={handleBackdropClick} className={s.overlay}>
      <div className={s.modal}>
        <ul className={s.list}>
          {data.map(item => (
            <TeamContent key={item.id} member={item} />
          ))}
        </ul>
      </div>
    </div>,
    modalRoot,
  )
}

export default TeamModal
