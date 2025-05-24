// Importing
import { fetchData } from "../../../utils/fetch.js";

// Handles user login
export async function login(email, password)
{
    // Connecting to the API
    const result = await fetchData("login", "POST", { "Content-Type": "application/json" }, { email: email, password_hash: password });
    
    // Success or Fail
    if (result)
    {
        localStorage.setItem("email", email);
        localStorage.setItem("token", result);
        return true;
    }
    else 
    {
        console.log("[!] Login unsuccessful!");
        return false;
    }
}