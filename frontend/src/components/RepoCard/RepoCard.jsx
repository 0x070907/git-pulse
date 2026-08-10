import "./RepoCard.css"

export default function RepoCard({repo}){
 
    return(
        <>
            <div className="repo">
                <div className="repo-title">
                    {/* when title is hovered,the arrow appears ; need to do for profile card as well */}
                    <a href={repo.html_url} className="repo-name">
                        <h2>{repo.name.trim()}</h2>
                    </a>
                    {/* need to style the scores as well */}
                    <div className="repo-score">
                        {repo.quality_score}/100
                    </div>
                </div>
                
                <p className="repo-description">{repo.description}</p>
                
                <div className="repo-info">
                    {repo.forks !== 0 &&
                        <div className="repo-forks">
                            <i className="ph-bold ph-git-fork"></i>
                            <span>{repo.forks}</span>
                        </div>
                    }
                    
                    {repo.stars !== 0 && 
                            <div className="repo-stars">
                                <i className="ph-bold ph-star"></i>
                                <span>{repo.stars}</span>
                            </div>
                    }
                    
                    {repo.language &&
                            <div className="repo-lang">
                                <i class="ph-fill ph-circle"></i>
                                <span> {repo.language}</span>
                            </div>

                    }
                </div>
                
                
               
            </div>
        </>
    );
}