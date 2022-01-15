import React from 'react'
import Project from './Project'
import data from './data/projects.json'

function Works() {

    let projects = data.map(project => {
        return   <Project link={project.link} title={project.title}description={project.description} year={project.year} type={project.type} image={project.image} tags={project.tags} />
    })


    return (
        <section className="section-works">
            <div className="container">
                <div className="work-heading-container post-heading-container">
                    <span className="subheading">Featured Work</span>
                    <a href="./work.html">View all</a>
                </div>
                <div className="work-card-container">
                    {projects}
                </div>
            </div>
        </section>
    )
}

export default Works
