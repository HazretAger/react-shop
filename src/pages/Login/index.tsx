import React from 'react';
import "../../index.css"
import "./index.scss";

function Login() {
    return (
        <section className="login">
            <div className="container login__container">
                <form className="login__form">
                    <h3 className="login__title">Вход</h3>
                    <div className="login__form-field">
                        <input className="login__form-item" type="password" name="Логин" minLength={6} id="password" placeholder="Логин" required />
                    </div>
                    <div className="login__form-field">
                        <input className="login__form-item" type="password" name="Пароль" minLength={6} id="password" placeholder="Пароль" required />
                    </div>
                    <div className="login__form-buttons">
                        <button className="login__button" type="submit">Вход в аккаунт</button>
                    </div>
                    <div className="login__registration">
                        <a href="/register">Регистрация</a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login;