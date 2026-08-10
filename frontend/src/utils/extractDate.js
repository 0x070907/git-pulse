
export function extractDate(date){

    const months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
    const [year, month, day] = date.split("-")
    
    return `${day} ${months[month-1]} ${year}`

}