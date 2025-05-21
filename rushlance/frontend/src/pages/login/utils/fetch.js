// Generralized async function to connect to the API and GET or POST data
export async function fetchData(link, method, header, body) 
{
    try
    {
        // Gettings a response from the API
        const response = await fetch(`http://localhost:8080/${link}`, {method: method, headers: header, body: JSON.stringify(body)});
        
        // Storing the data returned from response
        const result = await response.text();

        // Success or Fail
        if (response.ok)
        {
            return result;
        }
        else 
        {
            console.log("[!] Error");
            return null;
        }
    }
    catch (error)
    {
        console.log(error);
    }
}