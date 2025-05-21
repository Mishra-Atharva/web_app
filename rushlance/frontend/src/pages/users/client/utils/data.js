// Importing
import { fetchData } from "../../../login/utils/fetch.js";

export async function data()
{
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    const result = await fetchData("user", "POST", {
            "Content-Type": "application/json", 
            "Authorization": `Bearer ${token}`  
        },
        email);
    
    if (result)
    {
        console.log(result);
        return result;
    }
    else 
    {
        console.log("[!] Error");
    }
}