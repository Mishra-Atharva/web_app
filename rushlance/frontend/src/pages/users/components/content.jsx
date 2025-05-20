import AccountDetails from "./account_details";
import History from "../components/history.jsx";

function Content( {currentLink} )
{
    const areaStyle = {
        gridArea: "content"
    };

    return (
        <div style = { areaStyle } className="rounded-2xl m-2">

            {/* DashBoard */}
            {currentLink.link == "Dashboard" && (
                <>
                    <AccountDetails/>
                    <br />
                    <History/>
                </>
            )}

            {/* Account Details */}
            {currentLink.link == "Account" && (
                <>
                    <h1>Account Details</h1>
                </>
            )}

            {/* Payment Method */}
            {currentLink.link == "Payment" && (
                <>
                    <h1>Payment Method</h1>
                </>
            )}

            {/* Bookings */}
            {currentLink.link == "Bookings" && (
                <>
                    <h1>Bookings</h1>
                </>
            )}

            {/* Settings */}
            {currentLink.link == "Settings" && (
                <>
                    <h1>Settings</h1>
                </>
            )}

            {/* Help */}
            {currentLink.link == "Help" && (
                <>
                    <h1>Help</h1>
                </>
            )}
        </div>   
    );
}

export default Content;