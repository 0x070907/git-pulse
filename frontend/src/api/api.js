
export default async function fetchUser(username){

    try{
        const response = await fetch(`https://gitpulse-0bi1.onrender.com/user/${username}/dashboard`);
        if(!response.ok)
        {
            throw new Error("something went wrong"); 
            // will be tweaked a little during error handling
        }
        const data = await response.json();
        return data;
    }
    catch(err)
    {
        throw err.message;
    }

}