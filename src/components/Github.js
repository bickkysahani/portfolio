import React from 'react'

function Github() {
    return (
        <section className="github">
            <div className="container">
                <h2 className="heading-secondary">Github Analytics</h2>
                <div className="github-analytics">
                    <a href="https://github.com/bickkysahani">
                        <img
                            height="220em"
                            src="https://github-readme-stats-eight-theta.vercel.app/api?username=bickkysahani&show_icons=true&theme=white&include_all_commits=true&count_private=true"
                        />
                        <img
                            height="220em"
                            src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=bickkysahani&layout=compact&langs_count=8&theme=white"
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Github
