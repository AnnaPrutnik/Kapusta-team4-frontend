import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux'
import { editName } from '../../redux/auth'

import s from './modal.module.scss'

const modalRoot = document.querySelector('#modal-root')

const EditNameModal = ({ onClose }) => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

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

  const handleChange = ({ target: { value } }) => {
    return setName(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(editName(name))
    setName('')
    onClose()
  }

  return createPortal(
    <div className={s.background} onClick={handleOverlayClick}>
      <div className={s.modal}>
        <span className={s.close} onClick={onClose}>
          &#10006;
        </span>
        <form onSubmit={handleSubmit} className={s.editor}>
          <label className={s.sign}>
            Укажите новое имя пользователя:
            <input
              name="name"
              value={name}
              onChange={handleChange}
              className={s.input}
              placeholder="Новое имя"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
            />
          </label>
          <div className={s.buttons}>
            <button className={s.btn} type="submit">
              Изменить
            </button>
            <button className={s.btn} onClick={onClose}>
              Отменить
            </button>
          </div>
        </form>
      </div>
    </div>,
    modalRoot,
  )
}

export default EditNameModal
