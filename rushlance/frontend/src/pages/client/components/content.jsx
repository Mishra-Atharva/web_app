import AccountDetails from "./account_details";
import History from "../components/history.jsx";

function Content()
{
    const areaStyle = {
        gridArea: "content"
    };

    return (
        <div style = { areaStyle } className="rounded-2xl m-2">
            <AccountDetails name="Atharva Mishra" email="atharvamishra3@gmail.com" dob="16 Feburary 2005" phone="0533 748 762"/>
            <br />
            <History/>
        </div>   
    );
}

export default Content;