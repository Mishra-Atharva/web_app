import { fetchData } from "../../../utils/fetch.js";

export async function serviceData()
{
    const result = await fetchData("service", "GET", {"Content-Type": "application/json"}, null);

    // Success or Fail
    if (result)
    {
        return result;
    }
    else 
    {
        console.log("[!] Login unsuccessful!");
        return false;
    }
}