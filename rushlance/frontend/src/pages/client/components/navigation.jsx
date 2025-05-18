import Logo from "../assets/rushlance.png"

function NavigationBar( { area } )
{
    const style = {
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gridArea: "header"
    };

    const linkStyle = {
        cursor: "pointer",
        padding: "20px",

    }

    return (
        <nav style = { style } className="items-center border-black border-2">
            <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full border-1 border-black object-cover overflow-hidden">
                <img src={ Logo }/>
            </div>

            <ul className="flex flex-row gap-10 justify-center items-center">
                <li style = { linkStyle }>Home</li>
                <li style = { linkStyle }>Bookings</li>
                <li style = { linkStyle }>Account</li>
            </ul>

            <div className="w-[10%] h-[50%] rounded-full border-1 border-black">

            </div>
        </nav>
    );
}

export default NavigationBar;