import { useEffect } from 'react'
import { createPortal } from 'react-dom'

import s from '../../styles/component/Modal/Modal.module.scss'

const modalRoot = document.querySelector('#modal-root')

function ExitModal({
  handleClickLeft,
  handleClickRight,
  onClose,
  modalTitle = 'Вы действительно хотите выйти?',
  modalButtonleft = 'Да',
  modalButtonRight = ' Нет',
}) {
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

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  }

  return createPortal(
    <div className={s.background} onClick={handleOverlayClick}>
      <div className={s.modal}>
        <span className={s.close} onClick={onClose}>
          &#10006;
        </span>

        <div className={s.title}>
          <p>{modalTitle}</p>
        </div>

        <div className={s.buttons}>
          <button className={s.btn} onClick={handleClickLeft}>
            {modalButtonleft}
          </button>
          <button className={s.btn} onClick={handleClickRight}>
            {modalButtonRight}
          </button>
        </div>
      </div>
    </div>,
    modalRoot,
  )
}

export default ExitModal
