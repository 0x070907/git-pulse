import "./ReadmeForm.css"
import BasicInfo from "./BasicInfoStep/BasicInfo";
import TechAndRepo from "./TechAndCardsStep/TechAndRepo";
import SocialAndExtras from "./SocialAndExtrasStep/SocialAndExtras";
import { useState,useReducer } from "react";


export default function ReadmeForm({redirect}){


    const [currentStep,setCurrentPage] = useState(1);
    

    return(
        <section className="dashboard-bg">
            <div className="bg-layer"></div>
            <div className="content-layer">

                {currentStep === 1 && <BasicInfo back = {() => {redirect("dashboard")}}
                next = {() => {setCurrentPage(2)}}/>
                }
                {currentStep === 2 && <TechAndRepo 
                next = {() => {setCurrentPage(3)}}
                back = {() => {setCurrentPage(1)}} 
                />}
                {currentStep === 3 && <SocialAndExtras back ={() => {setCurrentPage(2)}}/>}
            </div>
        </section>
    );
}