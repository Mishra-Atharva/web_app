function Button({onclick, text})
{
    const style = {
        color: "white",
        backgroundColor: "#696969",
        width: "150px",
        height: "50px",
        cursor: "pointer",
        padding: "4px",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
    };

    return(
        <button style={style} onClick={onclick} className="rounded-3xl px-2 py-4 font-normal">{text}</button>
    );
}

export default Button;