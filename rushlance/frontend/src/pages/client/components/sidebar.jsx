import AccountIcon from "../assets/account.svg";
import PaymentIcon from "../assets/payment.svg";
import BookingIcon from "../assets/booking.svg";
import SettingsIcon from "../assets/settings.svg";
import HelpIcon from "../assets/help.svg";
import SignOutIcon from "../assets/signout.svg";

function SideBar( { area } )
{
    const areaStyle = {
        gridArea: "menu",
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
    };

    const imgStyle = {
        width: "30%",
        height: "30%"
    }

    return (
        <div style = { areaStyle } className=" p-5 m-2 rounded-2xl bg-[#ffffff] flex flex-col gap-5">
            <div className="w-[100%]">

                <div className="w-[100%] h-[10%] ">
                    <h1 className="font-medium text-xl">Main Menu</h1>
                </div>

                <br />

                <div className="w-[100%] grid">
                    <div className="w-[100%] cursor-pointer flex flex-row justify-center items-center hover:bg-gray-300 rounded-lg">
                        <img style={imgStyle} src={AccountIcon} alt="" />
                        <a className="w-[100%]">Account Details</a>

                    </div>

                    <div className="w-[100%] cursor-pointer flex flex-row justify-center items-center hover:bg-gray-300 rounded-lg">
                        <img style={imgStyle} src={PaymentIcon} alt="" />
                        <a className="w-[100%]">Payment Method</a>
                    </div>

                    <div className="w-[100%] cursor-pointer flex flex-row justify-center items-center hover:bg-gray-300 rounded-lg">
                        <img style={imgStyle} src={BookingIcon} alt="" />
                        <a className="w-[100%]">Bookings</a>
                    </div>

                </div>
            </div>

            <div className="w-[100%]">
                <div className="w-[100%] h-[10%] ">
                    <h1 className="font-medium text-xl">Prefrence</h1>
                </div>
                <br />
                <div>
                <div className="w-[100%] grid">

                    <div className="w-[100%] cursor-pointer flex flex-row justify-center items-center hover:bg-gray-300 rounded-lg">
                        <img style={imgStyle} src={SettingsIcon} alt="" />
                        <a className="w-[100%]">Settings</a>

                    </div>

                    <div className="w-[100%] cursor-pointer flex flex-row justify-center items-center hover:bg-gray-300 rounded-lg">
                        <img style={imgStyle} src={HelpIcon} alt="" />
                        <a className="w-[100%]">Help</a>
                    </div>

                    <div className="w-[100%] cursor-pointer flex flex-row justify-center items-center hover:bg-gray-300 rounded-lg">
                        <img style={imgStyle} src={SignOutIcon} alt="" />
                        <a className="w-[100%]">Sign out</a>
                    </div>

                </div>
                    
                </div>
            </div>
        </div>   
    );

}

export default SideBar;