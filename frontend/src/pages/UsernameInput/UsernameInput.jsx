import { useState } from "react";
import "./UsernameInput.css"

export default function UsernameInput({Analyse}){

    const [username,setUsername] = useState("");
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");

    function handleInput(e){
        
        if(e.target.value.trim().length == 1)  setError("");  //to clear the error when there's some input which was created initially

        setUsername(e.target.value);
    }

    function handleClick(){
        if(!username.trim())
            {
                setError("Please enter a github username");  
                return
            } 
        setLoading(true)
        Analyse(username);
            
    }

    return(
    <>
        <div className="background">
            <div className="container">
                <h2 className="title">GitPulse</h2>
                <p>Analyse your github profile and generate readme</p>

                <div className="input-section">
                    <input className={error ? "box error-box" : "box" }
                    type="text"
                    value={username}  //sets the default value
                    onChange={handleInput} 
                    onKeyDown={e => e.key === "Enter" && handleClick()} //you need to call the function for handling the event
                    placeholder="torvalds"
                  
                    />
                        {/* <i className="ph-bold ph-github-logo"></i> */}
                    <button 
                    className={loading ? "analyse-button-disable" : "analyse-button"}
                    onClick={handleClick}
                    disabled={loading}
                    >
                            Analyse
                    </button>
                </div>

                {error && <p className="error-line">{error}</p>}
                {/* rn,the text comes,later a popup can be shown */}
            </div>
        </div>
        
    </>
    );
}