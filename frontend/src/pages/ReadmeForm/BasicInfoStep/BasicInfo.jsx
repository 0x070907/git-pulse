import "./BasicInfo.css"

export default function BasicInfo({back,next}){
    return(
        <section className="step-container">
            <nav className="navbar">
                <div className="nav-btn" onMouseDown={back}>
                    <i className="ph-bold ph-arrow-left arrow"></i>
                    <button className="btn"
                    >Back to Dashboard</button>
                    
                </div>
                <div className="nav-btn" onMouseDown={next}>
                    <button className="btn"
                    >Next</button>
                    <i className="ph-bold ph-arrow-right arrow"></i>
                </div>   
            </nav>
            <div className="step-content">
                Step 1
           </div>
        </section>
    );
}