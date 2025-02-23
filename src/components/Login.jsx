import { useState } from "react";
import { useFetcher } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const fetcher = useFetcher();

    const handleFormReset = () => {
        setEmail('');
        setPassword('');
    };

    const resetErrorMessages = () => {
        setErrorEmail('');
        setErrorPassword('');
    };

    if (fetcher.data) {
        resetErrorMessages();
        if (fetcher.data === 'auth/invalid-credential') {
            setErrorPassword('Неверный логин или пароль');
        }
        fetcher.data = undefined;
    }

    const validate = () => {
        resetErrorMessages();
        if (!email) {
            setErrorEmail('Адрес электронной почты не указан');
            return false;
        }
        if (!password) {
            setErrorPassword("Пароль не указан");
            return false;
        }
        return true;
    };

    const handleFormSubmit = evt => {
        evt.preventDefault();
        
        if (validate()) {
            fetcher.submit({ email, password },
                { action: '/login', method: 'post' });
        }
    };

    return (
        <section>
            <h1>Вход</h1>
            <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
                <div className="field">
                    <label className="label">Адрес электронной почты</label>
                    <div className="control">
                        <input className="input" type="email" value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    {errorEmail &&
                        <p className="help is-danger">
                            {errorEmail}
                        </p>
                    }
                </div>
                <div className="field">
                    <label className="label">Пароль</label>
                    <div className="control">
                        <input type="password" value={password} className="input"
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    {errorPassword &&
                        <p className="help is-danger">
                            {errorPassword}
                        </p>
                    }
                </div>
                <div className="field is-grouped is-grouped-right">
                    <div className="control">
                        <input type="reset" value='Сброс' className="button is-warning is-light" />
                    </div>
                    <div className="control">
                        <input type="submit" className="button is-primary" value='Войти'/>
                    </div>
                </div>
            </form>
        </section>
    )
}