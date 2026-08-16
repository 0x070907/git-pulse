import "./SocialAndExtras.css"

export default function SocialAndExtras({back}){
    return(
        <>
            <section className="step-container">
                <nav className="navbar">
                    <div className="nav-btn" onMouseDown={back}>
                        <i className="ph-bold ph-arrow-left arrow"></i>
                        <button className="btn"
                       >Back</button>
                        
                    </div>   
                </nav>
                <div className="step-content">
                    Step 3
                </div>
            </section>
        </>
    );

}