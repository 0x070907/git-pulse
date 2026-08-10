import "./ProfileCard.css"
import {extractDate} from "../../utils/extractDate"

export default function ProfileCard({profile}){
    return(
        <>
            <section>
                <div className="profile">

                    <img src={profile.avatar_url} alt="Avatar" className="avatar"/>

                    <div className="profile-details">
                        <h2 className="name">{profile.name}</h2>

                        <a href={profile.html_url}>
                            <div className="github-username">{profile.login}</div>
                            <i className="ph-bold ph-arrow-up-right"></i>
                        </a>
                            
                        <p>{profile.bio}</p>
                        
                        {`Member since ${extractDate(profile.created_at.slice(0,10))}`}

                        <div classname="add-info">
                            <div className="followers">
                                <i class="ph-bold ph-users-three"></i>
                                <span>{profile.followers}</span>
                            </div>

                            <div className="location">
                                <i class="ph-fill ph-map-pin"></i>
                                <span>{profile.location}</span>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </section>
                
        </>
    );
}