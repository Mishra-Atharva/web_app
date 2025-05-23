// Generralized async function to connect to the API and GET or POST data
export async function fetchData(link, method, header, body) 
{
    try
    {
        const options = {
            method: method,
            headers: header
        };

        if (body != null && body != undefined)
        {
            options.body = JSON.stringify(body);
        }

        console.log (options);

        // Gettings a response from the API
        const response = await fetch(`http://localhost:8080/${link}`, options);
        
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
        return null;
    }
}