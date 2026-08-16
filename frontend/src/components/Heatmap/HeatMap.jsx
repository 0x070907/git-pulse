import "./HeatMap.css"

const hours = ["12 AM","1 AM","2 AM","3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"];

const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

function fillColor(hour){

}


export default function HeatMap({data}){
    return(
        <>
            <div className="bg-heatmap">
                
                {data.map((day, i) => {
                    return (
                        <div key={day.id || i} className="row">

                            <div style={{color:"var(--white-2)",marginRight:"10px"}}>{days[i]}</div>

                            {day.map((hour, j) => {
                                return (
                                    <div key={hour.id || `${i}-${j}`} className="cell"  >    
                                    </div>
                                );
                            })}
                        </div>
                        );
                    })
                }
            </div>
        </>
    );
}