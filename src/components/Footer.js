import React from 'react'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <ul className="social-links">
                        <li>
                            <a
                                className="footer-link"
                                href="https://www.facebook.com/bickkysahani/"
                            ><ion-icon class="social-icon" name="logo-facebook"></ion-icon
                            ></a>
                        </li>

                        <li>
                            <a className="footer-link" href="https://twitter.com/iambickky"
                            ><ion-icon class="social-icon" name="logo-twitter"></ion-icon
                            ></a>
                        </li>
                        <li>
                            <a
                                className="footer-link"
                                href="https://www.linkedin.com/in/bickkysahani/"
                            ><ion-icon class="social-icon" name="logo-linkedin"></ion-icon
                            ></a>
                        </li>
                        <li>
                            <a className="footer-link" href="https://github.com/bickkysahani/"
                            ><ion-icon class="social-icon" name="logo-github"></ion-icon
                            ></a>
                        </li>
                        <li>
                            <a
                                className="footer-link"
                                href="https://stackoverflow.com/users/12270150/bickky-sahani"
                            ><ion-icon
                                class="social-icon"
                                name="logo-stackoverflow"
                            ></ion-icon
                                ></a>
                        </li>
                        <li>
                            <a className="footer-link" href="https://codepen.io/bickkysahani"
                            ><ion-icon class="social-icon" name="logo-codepen"></ion-icon
                            ></a>
                        </li>
                    </ul>
                    <p className="copyright">Copyright &copy;2022 All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
