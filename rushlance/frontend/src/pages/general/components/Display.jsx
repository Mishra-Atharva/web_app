import logo from "../assets/logo.svg"

function Display()
{
    const style = {
        width: "40%",
        height: "100%",
        padding: "20px",
        fontFamily: "Kumar One Outline",
        backgroundColor: "#f4e9d7"
    };

    return (
        <div style={style} className="rounded-lg flex flex-col justify-center items-center">
            <h1 className="text-5xl">RushLance</h1>
            <img src={logo} alt="image"/>
        
        </div>
    );
}

export default Display;