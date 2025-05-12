function Button({onclick, text})
{
    const shadow = {
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    };

    return(
        <button style={shadow} onClick={onclick} className="text-center cursor-pointer w-[150px] h-[50px] bg-[#696969] text-white rounded-3xl p-2 font-normal hover:bg-black">{text}</button>
    );
}

export default Button;