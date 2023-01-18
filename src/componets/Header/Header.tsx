import React from 'react';
import SideBar from '../Sidebar/SideBar';
import { Link } from 'react-router-dom';
import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__grid-container">
                    <div className="header__menu">
                        <SideBar />
                    </div>
                    <div className="header__logo">
                        <h2 className="header__logo-text"> <Link to="/"> SHOP </Link> </h2>
                    </div>
                    <div className="header__icons">
                        <div className="header__icons-item">
                            <Link to="/login">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.235 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                            </Link>
                        </div>
                        <div className="header__icons-item">
                            <Link to="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-bag" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;