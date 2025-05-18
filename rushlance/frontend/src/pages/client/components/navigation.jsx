import Logo from "../assets/rushlance.png"

function NavigationBar( { area } )
{
    const style = {
        width: "100%",
        height: "100%",
        gridArea: "header"
    };

    const linkStyle = {
        cursor: "pointer",
        padding: "20px",

    }

    return (
        <nav style = { style } className="flex flex-row justify-between items-center p-5 gap-10">
            <div className="text-center p-10">
                <h1 className="font-bold text-3xl">RushLance</h1>
            </div>

            <ul className="flex flex-row gap-10 justify-center items-center">
                <li style = { linkStyle }>Home</li>
                <li style = { linkStyle }>Bookings</li>
                <li style = { linkStyle }>Account</li>
            </ul>

            <div className="flex flex-col">
                <div className="w-[150px] h-[35px] rounded-full border-1 border-black flex justify-center items-center shadow-[box-shadow:_rgba(100,_100,_111,_0.2)_0px_7px_29px_0px]">
                    <p>Location</p>
                </div>
                <div className="hidden absolute right-[1%] top-[8%] w-[350px] h-[250px] rounded-lg border-1 border-black flex justify-center items-center shadow-[box-shadow:_rgba(100,_100,_111,_0.2)_0px_7px_29px_0px]">

                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;