import LeftView from "./components/signup_components/leftview";
import RightView from "./components/signup_components/rightview";
import SignImage from "./assets/sign.svg";
import LoginImage from "./assets/logo.svg";
import Background from "./assets/image.jpg";
import {useState} from "react";

function Signup()
{
    const [choice, setChoice] = useState(true);
    
    const shadow = {
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    }

    return (
        <div style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundRepeat: 'repeat'}} className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
            <div style={shadow} className="h-[70vh] w-[70%] p-0 font-['poppins'] font-semibold rounded-2xl flex flex-row bg-white">
                <LeftView title={(choice) ? "Sign Up" : "Welcome Back!"} signup={{choice, setChoice}}/>
                <RightView image={(choice) ? SignImage : LoginImage} signup={choice}/>
            </div>
        </div>
    );
}

export default Signup;