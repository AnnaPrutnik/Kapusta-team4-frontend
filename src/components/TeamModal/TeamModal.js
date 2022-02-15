import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import TeamContent from './TeamContent'
import data from '../../lib/team.json'
import s from '../../styles/component/TeamModal/TeamModal.module.scss'

const modalRoot = document.getElementById('modal-root')

function TeamModal({ onClose }) {
  useEffect(() => {
    window.document.body.style.overflowY = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.document.body.style.overflowY = 'visible'
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
