import s from './Login.module.scss';

const LoginForm = () => {
  return (
    <div className={s.register}>
      <p className={s.text_align}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <a href="http://localhost:3000/auth/google" className={s.google}>
        Google
      </a>
      <p className={s.text}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <form action="">
        <label className={s.label}>
          <p className={s.sign}>Электронная почта:</p>
          <input
            className={s.input}
            type="email"
            name="email"
            // value={email}
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
            // value={password}
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
          <button type="button" className={s.button}>
            регистрация
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
