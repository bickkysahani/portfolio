import React from 'react'
import Article from './Article'
import data from './data/articles.json'
function Posts() {
    let articles = data.map(article => {
        return  <Article title={article.title} description={article.description} link={article.link} date={article.date} tags = {article.tags} />
    })
    return (
        <section className="section-posts">
            <div className="container">
                <div className="post-heading-container">
                    <span className="subheading">Recent posts</span>
                    <a href='#'>View all</a>
                </div>
                <div className="post-card-container">
                    {articles}
                    {/* <Article title={data[1].title} description={data[1].description} link={data[1].link} date={data[1].date} tags = {data[1].tags} /> */}
                </div>
            </div>
        </section>
    )
}

export default Posts
