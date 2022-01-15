import React from 'react'

function Header() {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="navigation-bar">
                        <a href="./index.html" className="nav-logo"> Bickky. </a>
                        <nav className="main-nav">
                            <ul className="main-nav-list">
                                <li><a className="main-nav-link" href="#">Work</a></li>
                                <li><a className="main-nav-link" href="#">Blog</a></li>
                                <li>
                                    <a className="main-nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </nav>

                        <button className="btn-mobile-nav">
                            <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
                            <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
