import s from './login.module.css'

const LoginForm = () => {
    return (
        <div className={s.formRegister}>
            <p className={s.promtText}>Вы можете авторизоваться с помощью Google Account:</p>
            <div className={s.animationGoogle}>
                <a
                    href="http://localhost:3000/auth/google"
                    className={s.btnGoogle}>Google
                </a>
            </div>
            <p className={s.promtText}>
                Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
            </p>
            <form action="">
                <div>
                    <lable className={s.formLabel}>
                        <p className={s.labelText}>
                            <span></span>
                            Электронная почта:
                        </p>
                        <input
                            className={s.formInput}
                            type="email"
                            name="email"
                            // value={email}
                            placeholder="your@email.com"
                            pattern="[A-Za-zА-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zА-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zА-Яа-яЁёЄєЇї]{2,4}$"
                            title="Email может, сoстоять из букв цифр и обязательного символа '@'"
                            required
                        />
                    </lable>
                </div>
                <div>
                    <lable className={s.formLabel}>
                        <p className={s.labelText}>
                            <span></span>
                            Пароль:
                        </p>
                        <input
                            className={s.formInput}
                            type="password"
                            name="password"
                            // value={password}
                            placeholder="Пароль"
                            pattern="[0-9A-Za-zА-Яа-яЁёЄєЇї!@#$%^&*]{6,}"
                            title="Пароль может, сoстоять не меньше чем из шести букв цифр и символов '!@#$%^&*'"
                            required
                        />
                    </lable>
                </div>
                <div className={s.containerButton}>
                    <button type="submit" className={s.button}>
                        ВОЙТИ
                    </button>
                    <button type="button" className={s.button}>
                        РЕГИСТРАЦИЯ
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm