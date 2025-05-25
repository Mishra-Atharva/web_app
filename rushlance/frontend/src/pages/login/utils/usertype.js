// Importing
import { fetchData } from "../../../utils/fetch.js";

// Handles user login
export async function userType(email, token)
{

    // Connecting to the API
    const result = await fetchData("user-email", "POST", {"Content-Type": "application/json", "Authorization": `Bearer ${token}`}, { email: email});
    
    // Success or Fail
    if (result)
    {
        localStorage.setItem("type", result);
        return true;
    }
    else 
    {
        console.log("[!] couldn't get user type!");
        return false;
    }
}