import { useEffect } from "react";
import "./Loading.css"
import fetchUser from "../../api/api";

// write this function outside the component,else function re-created on every re-render
function LoadingBar(){

        return(
            <>
             <div className="placeholder">
                <div className="bar1">
                    <div></div>
                </div>

                <div className="bar2">
                    <div></div> 
                </div>

                <div className="bar2">
                    <div></div>
                </div>

            </div>
            </>
        );
    }

export default function LoadingScreen({user,handleData}){

    useEffect(() => {

        async function loadData(){
            const data = await fetchUser(user); //as fetchUser is a async func, it returns a promise,so first consume it and then set the state
            handleData(data);
        }
        
        loadData();

    },[])


    return (
        <>
        <div className="skeleton">
           {/* to create 3 loading bars for prventing redundancy */}
           {Array.from({ length: 3 }).map(( _ , index) => (
        <LoadingBar key={index} />
           ))
        }
        </div>
        
        </>
    );
}