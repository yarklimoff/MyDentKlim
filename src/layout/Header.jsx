import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/logo.JPG"

export default function Header() {
    return (
    <>
         <header>
            <div className="header-top">
                <a href="/" className="logo">Стоматология доктора Климова</a>
                <div className="contact">
                    <a href="tel:+79275038485" className="tel">+7 927 503-84-85</a>
                    <a href="mailto:klimov-valentin@bk.ru">klimov-valentin@bk.ru</a>
                </div>
            </div>
            <div className="header-down">
                <ul className="menu">
                    <li>
                        <Link to="/" className="Link">Главная</Link>
                    </li>
                    <li>
                        <Link to="/for_doctors" className="Link">Для врачей</Link>
                    </li>
                    <li>
                        <Link to="/contacts" className="Link">Контакты</Link>
                    </li>
                </ul>
                <button className="btn-header">Записаться на прием</button>
            </div>
        </header>
   </>
    );
}

