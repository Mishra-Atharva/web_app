import { fetchData } from "../../../../utils/fetch.js";

export async function profileData()
{
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    console.log(token);

    const result = await fetchData("user", "POST", 
        {
            "Content-Type": "application/json", 
            "Authorization": `Bearer ${token}` 
        }, {email: email});

    // Success or Fail
    if (result)
    {
        console.log(JSON.parse(result))
        return result;
    }
    else 
    {
        console.log("[!] Can't get profile data");
        return false;
    }
}