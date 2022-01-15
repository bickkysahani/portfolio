import React from 'react'

function Project({link, title, description,year, type, image,tags}) {
    return (
        <a href={link} target={'_blank'} rel="noreferrer">
            <div className="work-card">
                <div className="work-img-box">
                    <img
                        src={image}
                        alt=""
                        className="img-responsive"
                    />
                </div>
                <div className="work-card-text-box">
                    <h2 className="heading-secondary">{title}</h2>
                    <div className="work-card-date">
                        <span className="work-card-year">{year}</span>
                        <span className="work-card-category">{type}</span>
                        
                    </div>
                    <div className="work-card-tech-div">
                        <span className="work-card-tech">Tech:</span>
                        <span className="work-card-tags">{tags}</span>
                    </div>
                    <p className="work-card-description">
                        {description}
                    </p>
                </div>
            </div>
        </a>
    )
}

export default Project
