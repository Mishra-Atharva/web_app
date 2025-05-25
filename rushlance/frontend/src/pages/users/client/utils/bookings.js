import { fetchData } from "../../../../utils/fetch.js";

export async function bookingData()
{
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    
    const result = await fetchData("totalBookings", "POST", {"Content-Type": "application/json", "Authorization": `Bearer ${token}`}, {email: email});

    if (result)
    {
        return result;
    }
    return null;
}