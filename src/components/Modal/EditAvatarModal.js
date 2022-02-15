import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux'
import { editAvatar } from '../../redux/auth'

import s from './modal.module.scss'

const modalRoot = document.querySelector('#modal-root')

const EditAvatarModal = ({ onClose }) => {
  const [avatar, setAvatar] = useState([])
  const [avatarUrl, setAvatarUrl] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(avatar)
    if (avatar.length < 1) return
    const newAvatarUrl = URL.createObjectURL(avatar)
    setAvatarUrl(newAvatarUrl)
  }, [avatar])

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

  const handleImageChange = e => {
    return setAvatar(e.target.files[0])
  }

  const handleSubmit = e => {
    e.preventDefault()
    const file = new FormData()
    file.append(avatar, avatar.name)
    dispatch(editAvatar(file))
    setAvatar([])
    onClose()
  }

  return createPortal(
    <div className={s.background} onClick={handleOverlayClick}>
      <div className={s.avatar_modal}>
        <span className={s.close} onClick={onClose}>
          &#10006;
        </span>
        <form onSubmit={handleSubmit} className={s.editor}>
          <label className={s.file_input}>
            Загрузите новое фото
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>

          {<img className={s.photo} src={avatarUrl} />}
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

export default EditAvatarModal
