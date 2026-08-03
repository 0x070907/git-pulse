import { useState } from "react";
import "./UsernameInput.css"
export default function UsernameInput({Analyse}){

    const [username,setUsername] = useState("");
    const [error,setError] = useState("");

    function handleInput(e){
        if(e.target.value) setError("");  //to clear the error when there's some input

        setUsername(e.target.value);
    }

    function handleClick(){
        if(!username.trim())
            {
                setError("Please enter a github username");  
                return
            } 
          
        Analyse(username);
            
    }

    return(
    <>
        <div className="background">
            {/* <div className="blob blob-1">
            </div>
            <div className="blob blob-2">

            </div> */}
            <div className="container">
                <h2>GitPulse</h2>
                <p>Analyse your github profile and generate readme</p>
                <label htmlFor="username-input-box">GitHub Username</label>

                <input className={error ? "error-box" : "input-box" }
                id="username-input-box"
                type="text"
                value={username}  //sets the default value
                onChange={handleInput} 
                onKeyDown={e => e.key === "Enter" && handleClick()} //you need to call the function for handling the event
                placeholder="torvalds"
                autoComplete="false"
                />

                <button 
                className="analyse-button"
                onClick={handleClick}>
                        Analyse
                </button>

                {error && <p className="error-line">{error}</p>}
            </div>
        </div>
    </>
    );
}