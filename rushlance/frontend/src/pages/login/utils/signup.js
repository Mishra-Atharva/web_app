// Imports
import { fetchData } from "../../../utils/fetch.js";
import { login } from "./login.js";

// Handles registering a new user
export async function signup(name, gender, email, password, phone, dob, type)
{

    // Registering user by the API
    const result = await fetchData("signup", "POST", {"Content-Type": "application/json"}, {
        "full_name": name,
        "gender": gender,
        "date_of_birth": dob,
        "email": email,
        "password_hash": password,
        "phone": phone,
        "user_type": type
    });

    // Success or Fail
    if (result)
    {
        return login(email, password);
    }
    else 
    {
        console.log("[!] User Registration unsuccesful!");
        return false;
    }
}

