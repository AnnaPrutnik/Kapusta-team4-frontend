import { useDispatch } from 'react-redux'
import { useState } from 'react'

import s from '../Form.module.scss'
import authOperation from '../../../redux/auth/auth-operation'

const RegisterForm = ({ onClickComeBack }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value)
      case 'email':
        return setEmail(value)
      case 'password':
        return setPassword(value)
      default:
        return
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(authOperation.register({ name, email, password }))
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className={s.register}>
      <p className={s.text_align}>Для регистрации заполните поля:</p>
      <form onSubmit={handleSubmit} action="" autoComplete="on">
        <label className={s.label} htmlFor="">
          <p className={s.sign}>Имя:</p>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            placeholder="Ваше имя"
            className={s.input}
            pattern="^[A-Za-zА-Яа-яЁёЄєЇї' '\-()0-9]{3,30}$"
            title="Имя может состоять только от трёх до 30 букв, апострофа, тире и пробелов. Например Adrian, Jac Mercer, d'Artagnan, Александр Репета и т.п."
            required
          />
        </label>

        <label className={s.label} htmlFor="">
          <p className={s.sign}>Электронная почта:</p>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            placeholder="your@email.com"
            className={s.input}
            pattern="[A-Za-zА-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zА-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zА-Яа-яЁёЄєЇї]{2,4}$"
            title="Email может, сoстоять из букв цифр и обязательного символа '@'"
            required
          />
        </label>

        <label className={s.label} htmlFor="">
          <p className={s.sign}>Пароль:</p>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            placeholder="Пароль"
            className={s.input}
            pattern="[0-9A-Za-zА-Яа-яЁёЄєЇї!@#$%^&*]{6,}"
            title="Пароль может, сoстоять не меньше чем из шести букв цифр и символов '!@#$%^&*'"
            required
          />
        </label>

        <div className={s.wrap}>
          <button type="button" onClick={onClickComeBack} className={s.button}>
            вернуться
          </button>
          <button type="submit" className={s.button}>
            готово
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
