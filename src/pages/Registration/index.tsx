import React from 'react';
import "../../index.css"
import "./index.scss";

function Register() {
    return (
        <section className="register">
            <div className="container register__container">
                <form className="register__form">
                    <h3 className="register__title">Регистрация</h3>
                    <div className="register__form-field">
                        <input className="register__form-item" type="text" name="Имя" id="firstName" placeholder="Имя" required />
                    </div>
                    <div className="register__form-field">
                        <input className="register__form-item" type="text" name="Фамилия" id="lastName" placeholder="Фамилия" required />
                    </div>
                    <div className="register__form-field">
                        <input className="register__form-item" type="password" name="Логин" minLength={6} id="login" placeholder="Логин" required />
                    </div>
                    <div className="register__form-field">
                        <input className="register__form-item" type="password" name="Пароль" minLength={6} id="password" placeholder="Пароль" required />
                    </div>
                    <div className="register__form-field">
                        <input className="register__form-item" type="email" name="Почта" id="email" placeholder="Email" required />
                    </div>
                    <div className="register__form-field">
                        <input className="register__form-item" type="password" name="Телефон" minLength={6} id="phone" placeholder="Телефон" required />
                    </div>
                    <div className="register__form-buttons">
                        <button className="register__button" type="submit">Зарегистрироваться</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Register;