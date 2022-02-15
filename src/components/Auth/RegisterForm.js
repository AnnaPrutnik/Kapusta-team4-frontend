import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/auth-operation'
import s from '../../styles/component/Auth/Auth.module.scss'

function RegisterForm ({ onClickComeBack }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nameDirty, setNameDirty] = useState(false)
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [nameError, setNameError] = useState('это обязательное поле')
  const [emailError, setEmailError] = useState('это обязательное поле')
  const [passwordError, setPasswordError] = useState('это обязательное поле')
  const [errorSymbol, setErrorSymbol] = useState('*')
  const [passwordShown, setPasswordShown] = useState(false)

  const dispatch = useDispatch()

  const blurHandler = ({ target: { name } }) => {
    switch (name) {
      case 'name':
        setNameDirty(true)
        break
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

  const handleName = ({ target: { value } }) => {
    setName(value)
    const re = /^[A-Za-zА-Яа-яЁё' '\-()0-9]{3,30}$/
    if (!re.test(String(value).toLowerCase())) {
      setNameError('Некорректное имя')
      setErrorSymbol('*')
      if (!value) {
        setNameError('это обязательное поле')
        setErrorSymbol('*')
      }
    } else {
      setNameError('')
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
    dispatch(register({ name, email, password }))
    setName('')
    setEmail('')
    setPassword('')
    onClickComeBack()
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  return (
    <div className={s.register}>
      <p className={s.text_align}>Для регистрации заполните поля:</p>
      <form onSubmit={handleSubmit} action="" autoComplete="on">
        <label className={s.label} htmlFor="">
          <p className={s.sign}>
            {nameDirty && nameError && (
              <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                {errorSymbol}{' '}
              </span>
            )}
            Имя:
          </p>
          <input
            onBlur={blurHandler}
            onChange={handleName}
            type="text"
            name="name"
            value={name}
            placeholder="Ваше имя"
            className={s.input}
            pattern="^[A-Za-zА-Яа-яЁёЄєЇї' '\-()0-9]{3,30}$"
            title="Имя может состоять только от трёх до 30 букв, апострофа, тире и пробелов. Например Adrian, Jac Mercer, d'Artagnan, Александр Репета и т.п."
            required
          />
          {nameDirty && nameError && (
            <div
              style={{
                color: 'red',
                fontSize: 10,
                paddingTop: 4,
                textAlign: 'left',
              }}
            >
              {nameError}{' '}
            </div>
          )}
        </label>

        <label className={s.label} htmlFor="">
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
            onChange={handleChangeEmail}
            type="email"
            name="email"
            value={email}
            placeholder="your@email.com"
            className={s.input}
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

        <label className={s.label} htmlFor="">
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
              onChange={handleChangePassword}
              type={passwordShown ? 'text' : 'password'}
              name="password"
              value={password}
              placeholder="Пароль"
              className={s.input}
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
