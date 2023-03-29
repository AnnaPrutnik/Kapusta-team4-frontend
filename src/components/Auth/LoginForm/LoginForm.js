import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from '../../../redux/auth/auth-operation'
import { getGoogleUrl } from '../../../utils/getGoogleUrl'
import { useLocation } from 'react-router-dom'
import s from '../Auth.module.scss'

function LoginForm({ onClickRegister }) {
  const location = useLocation()
  let from = location.state || '/'

  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState('это обязательное поле')
  const [passwordError, setPasswordError] = useState('это обязательное поле')
  const [errorSymbol, setErrorSymbol] = useState('*')
  const [passwordShown, setPasswordShown] = useState(false)

  const blurHandler = ({ target: { name } }) => {
    switch (name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
      default:
        return
    }
  }

  const handleChangeEmail = ({ target: { value } }) => {
    setEmail(value)
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(value).toLowerCase())) {
      setEmailError('Некорректный емейл')
      setErrorSymbol('*')
      if (!value) {
        setEmailError('это обязательное поле')
        setErrorSymbol('*')
      }
    } else {
      setEmailError('')
    }
  }

  const handleChangePassword = ({ target: { value } }) => {
    setPassword(value)
    if (value.length < 6) {
      setPasswordError('Пароль должен быть не меньше 6 символов')
      if (!value) {
        setPasswordError('это обязательное поле')
      }
    } else {
      setPasswordError('')
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(logIn({ email, password }))
    setEmail('')
    setPassword('')
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  return (
    <div className={s.register}>
      <p className={s.text_align}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <a href={getGoogleUrl(from)} className={s.google}>
        Google
      </a>
      <p className={s.text}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <form action="" onSubmit={handleSubmit}>
        <label className={s.label}>
          <p className={s.sign}>
            {emailDirty && emailError && (
              <span style={{ color: '#EB5757', fontSize: 10, marginTop: 4 }}>
                {errorSymbol}{' '}
              </span>
            )}
            Электронная почта:
          </p>
          <input
            onBlur={blurHandler}
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder="your@email.com"
            pattern="[A-Za-zА-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zА-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zА-Яа-яЁёЄєЇї]{2,4}$"
            title="Email может, сoстоять из букв цифр и обязательного символа '@'"
            required
          />
          {emailDirty && emailError && (
            <div style={{ color: '#EB5757', fontSize: 10, marginTop: 4 }}>
              {emailError}{' '}
            </div>
          )}
        </label>

        <label className={s.last_label}>
          <p className={s.sign}>
            {passwordDirty && passwordError && (
              <span style={{ color: '#EB5757', fontSize: 10, marginTop: 4 }}>
                {errorSymbol}{' '}
              </span>
            )}
            Пароль:
          </p>
          <div className={s.password}>
            <input
              onBlur={blurHandler}
              className={s.input}
              type={passwordShown ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={handleChangePassword}
              placeholder="Пароль"
              pattern="[0-9A-Za-zА-Яа-яЁёЄєЇї!@#$%^&*]{6,}"
              title="Пароль может, сoстоять не меньше чем из шести букв цифр и символов '!@#$%^&*'"
              required
            />
            <a
              href="#"
              className={!passwordShown ? s.password_control : s.password_show}
              onClick={togglePassword}
            ></a>
          </div>
          {passwordDirty && passwordError && (
            <div style={{ color: '#EB5757', fontSize: 10, marginTop: 4 }}>
              {passwordError}{' '}
            </div>
          )}
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
