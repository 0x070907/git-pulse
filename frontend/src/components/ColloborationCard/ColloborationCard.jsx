import "./ColloborationCard.css"
import { useState } from "react";

function getStyle(badge){
    switch(badge){
        case "Top Contributor" : return {color: "var(--accent-primary)",backgroundColor: "rgba(67, 190, 194, 0.10)",border: "1px solid rgba(67, 190, 194, 0.30)"};

        case "Active Collaborator": return {color: "var(--accent-secondary)", backgroundColor: "rgba(77, 208, 225, 0.10)",border: "1px solid rgba(77, 208, 225, 0.30)"};

        case "Building Momentum": return { color: "var(--accent-purple)",backgroundColor: "rgba(179, 108, 255, 0.10)",border: "1px solid rgba(179, 108, 255, 0.30)"};

        case "Solo Developer": return { color: "var(--accent-gold)", backgroundColor: "rgba(253, 209, 102, 0.10)", border: "1px solid rgba(253, 209, 102, 0.30)"};

    }
}

export default function ColloborationCard({data}){
        
    // const [showInfo,setShowInfo] = useState(false);
    const breakDown = [
    {key: "pushes", label:"Commits", icon:"ph-bold ph-git-commit"},
    {key: "pr_merged", label:"Pull Requests Merged", icon:"ph-bold ph-git-merge"},
    {key: "pr_opened", label:"Pull Requests Opened", icon:"ph-bold ph-git-pull-request"},
    {key: "issues", label:"Issues", icon:"ph-bold ph-warning-circle"},
    {key: "comments", label:"Comments", icon:"ph-bold ph-chat-circle"}
];
   
    return(
        <>
        <div className="collab-card">

            <div className="collab-status">

                <p style={getStyle(data.badge)} className="collab-badge">
                    {data.badge}
                </p>

                <div>
                    Collab Score : <span style={{color:"var(--teal-3)",fontSize:"0.95em",fontWeight:600}}>{data.score}/100</span>

                    <i className="ph-bold ph-question" style={{marginLeft:"10px"}}></i>
                </div>
            </div>

            <div className="collab-breakdown-container">
                {breakDown.map(({key,label,icon}) => {
                        return (
                            <>
                                <div key = {key} className="collab-bd-cell">

                                    <div className="collab-label-icon">
                                        <p className="collab-label">{label}</p> 
                                        <i className={`${icon} collab-icon`} ></i>
                                    </div>
                                    <div className="collab-count">
                                        {data.breakdown[key]}
                                    </div>
                                
                                </div>
                            </>
                        );    
                })}
            </div>
           
        </div>
        </>
    );
}