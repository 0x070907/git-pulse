// responsiveness has to be handled; animations will be added later;font-colors have to be changed 

import { useState } from "react";
import "./Dashboard.css"
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import RepoCard from "../../components/RepoCard/RepoCard";

export default function Dashboard({data}){

    // const [formData,setFormData] = useState(null);

    return(
        <>
            <div className="dashboard-bg">
                <div className="bg-layer"></div>
                <div className="content-layer">
                    <ProfileCard profile = {data.profile}/>

                    {/* if no repos,display no public repos*/}
                    <section className="top-repositories">
                        <h3 class="repos-heading">Top Repositories</h3>
                        <div className="repo-cards">
                            {/* if repos have same scores,then more than 5 cards are shown  */}
                            {data.repositories.slice(5).map((repo) => (
                                <RepoCard key={repo?.name} repo={repo} />
                                ))
                            }
                        </div>
                    </section> 
                     
                </div>  
            </div>
        </>
    );

}