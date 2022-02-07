import { useState } from 'react';

import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from './RegisterForm/RegisterForm';

const Form = () => {
    const [login, setLogin] = useState(true);
    
    const onRegisterClick = () => {
        setLogin(false);
    };

    const onComeBackClick = () => {
        setLogin(true);
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