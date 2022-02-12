import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { logIn, loginGoogle } from '../../../redux/auth/auth-operation'
import s from '../Form.module.scss'

const LoginForm = ({ onClickRegister }) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logIn({ email, password }))
    setEmail('')
    setPassword('')
    toast('Поздравляем! Вы успешно вошли в свою учетную запись!')
  }

  return (
    <div className={s.register}>
      <p className={s.text_align}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      {/* <button className={s.google} onClick={handleClickGoogle}>
        Google
      </button> */}
      <a href="http://localhost:5000/api/auth/google" className={s.google}>
        Google
      </a>
      <p className={s.text}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <form action="" onSubmit={handleSubmit}>
        <label className={s.label}>
          <p className={s.sign}>Электронная почта:</p>
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="your@email.com"
            pattern="[A-Za-zА-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zА-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zА-Яа-яЁёЄєЇї]{2,4}$"
            title="Email может, сoстоять из букв цифр и обязательного символа '@'"
            required
          />
        </label>

        <label className={s.last_label}>
          <p className={s.sign}>Пароль:</p>
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Пароль"
            pattern="[0-9A-Za-zА-Яа-яЁёЄєЇї!@#$%^&*]{6,}"
            title="Пароль может, сoстоять не меньше чем из шести букв цифр и символов '!@#$%^&*'"
            required
          />
        </label>
        <div className={s.wrap}>
          <button type="submit" className={s.button}>
            войти
          </button>
          <button type="button" onClick={onClickRegister} className={s.button}>
            регистрация
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
