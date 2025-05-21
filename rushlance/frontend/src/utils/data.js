// Importing 
import { fetchData } from "./fetch.js";

// Getting data for the homepage from the API
export async function data()
{
    const token = localStorage.getItem("token");

    if (token)
    {
        const token = localStorage.getItem("token");

        const result = await fetchData("service", "GET", 
            {
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${token}`  
            });
    
        if (result)
        {
            console.log(result);
            return result
        }
        else 
        {
            console.log("[!] Error getting data!");
        }
    }
    else 
    {
        return null;
    }

}