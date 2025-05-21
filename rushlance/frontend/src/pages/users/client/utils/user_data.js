// Importing
import { fetchData } from "../utils/fetch.js";

export async function user_data()
{
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    const result = await fetchData("user", "POST", 
        {
            "Content-Type": "application/json", 
            "Authorization": `Bearer ${token}`
        },
        {
            email: email
        }
    );
    
    return result;
}