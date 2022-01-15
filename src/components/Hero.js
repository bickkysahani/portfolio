import React from 'react'

function Hero() {
    return (
        <section className="section-hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text-box">
                        <h1 className="heading-primary">
                            Hello, I am Bickky,
                            <span className="heading-primary--main"> a freelance software developer</span>
                        </h1>
                        <p className="hero-description">
                            I am currently working as freelance python developer as well as
                            programming instructor. I make websites and web applications
                            using python, django, html, css and javascript. As a programming
                            instructor I teach python, django, javascript programming to
                            students. Checkout some of my articles, at my blog page. Feel free to
                            take a look at some of my works at my work page.
                        </p>
                        <p className="hero-description">
                            Remotely available UTC+1 to UTC+10.
                            <a href="mailto:bickkysahani@gmail.com"
                            >bickkysahani@gmail.com</a
                            >
                        </p>
                        <div>
                            <a href="https://github.com/bickkysahani/" className="btn-primary">
                                Connect with me on Github</a
                            >
                        </div>
                    </div>
                    {/* <!-- <div className="hero-img-box">
              <img
                src="./img/bickky.jpg"
                alt=""
                className="hero-img img-responsive"
              />
            </div> --> */}
                </div>
            </div>
        </section>
    )
}

export default Hero
