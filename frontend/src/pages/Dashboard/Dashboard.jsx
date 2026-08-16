// responsiveness has to be handled; animations will be added later;font-colors have to be changed 

import { useState } from "react";
import "./Dashboard.css"
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import RepoCard from "../../components/RepoCard/RepoCard";
import ColloborationCard from "../../components/ColloborationCard/ColloborationCard";
import HeatMap from "../../components/Heatmap/HeatMap";

export default function Dashboard({data,handleClick}){

    // const [formData,setFormData] = useState(null);

    return(
        <>
            <div className="dashboard-bg">
                <div className="bg-layer"></div>
                <div className="content-layer">
                    <ProfileCard profile = {data.profile}/>

                    {/* if no repos,display no public repos*/}
                    <section className="top-repositories">
                        <h3 className="repos-heading">Top Repositories</h3>
                        <div className="repo-cards">
                            {/* if repos have same scores,then more than 5 cards are shown  */}
                            {data.repo_stats.top_repositories.map((repo) => (
                                <RepoCard key={repo?.name} repo={repo} />
                                ))
                            }
                        </div>
                    </section> 

                    <section className="collab-and-lang-breakdown">
                        <ColloborationCard data = {data.collaboration_score}/>
                    </section>

                    <section className="heatmap">
                        <HeatMap data = {data.activity_insights.heatmap}/>
                    </section>
                    
                    <div className="readme-btn-section">
                        <button className="create-readme-btn"
                     onClick={handleClick}>
                        Create Readme
                     </button>
                    </div>
                     
                </div>  
            </div>
        </>
    );

}