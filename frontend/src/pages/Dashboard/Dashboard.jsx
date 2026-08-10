// responsiveness has to be handled; animations will be added later;font-colors have to be changed 

import { useState } from "react";
import "./Dashboard.css"
import ProfileCard from "../../components/ProfileCard/ProfileCard";

export default function Dashboard({data}){

    // const [formData,setFormData] = useState(null);

    return(
        <>
            <div className="dashboard-bg">
                <div className="bg-layer"></div>
                <div className="content-layer">
                    <ProfileCard profile = {data.profile}/> 
                </div>  
            </div>
        </>
    );

}