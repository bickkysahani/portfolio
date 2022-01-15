import React from 'react'

function Article({ title, description, link, date ,tags}) {
    return (
        <a
            href={link} target={'_blank'} rel="noreferrer"
        >
            <div className="post-card">
                <h3 className="heading-tertiary">
                   {title}
                </h3>
                <div className="post-card-date">
                    <span className="post-card-date">{date}</span>
                    <span className="post-card-caret">|</span>
                    <span className="post-card-tools"> {tags}</span>
                </div>
                <p className="post-card-description">
                    {description}
                </p>
            </div>
        </a>
    )
}

export default Article
