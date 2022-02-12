import { useState } from 'react';
import { toast } from 'react-toastify';
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from './RegisterForm/RegisterForm';

const Form = () => {
    const [login, setLogin] = useState(true);
    
    const onRegisterClick = () => {
        setLogin(false);
        toast("Заполните, пожалуйста, форму регистрации!")
    };

    const onComeBackClick = () => {
        setLogin(true);
        toast("Введите, свой адрес электронной почты и пароль, для входа в Вашу учетную запись!")
    };

    return (
        <>
            
            {login ? (
                <LoginForm onClickRegister={onRegisterClick} />
            ) : (
                <RegisterForm onClickComeBack={onComeBackClick} />
            )}
        </>
    );
};

export default Form;