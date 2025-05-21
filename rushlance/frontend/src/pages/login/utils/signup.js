// Imports
import { fetchData } from "./fetch.js";
import { login } from "./login.js";

// Handles registering a new user
export async function signup(fname, lname, email, pass, number, dob, userType)
{

    // Registering user by the API
    const result = await fetchData("signup", "POST", {"Content-Type": "application/json"}, {
        "first_name": fname,
        "last_name": lname,
        "email": email,
        "password": pass,
        "phone": number,
        "date_of_birth": dob,
        "user_type": userType
    });

    // Success or Fail
    if (result)
    {
        return login(email, pass);
    }
    else 
    {
        console.log("[!] User Registration unsuccesful!");
        return false;
    }
}

