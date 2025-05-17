import Form from "./components/signup_components/Form";
import Display from "./components/signup_components/Display";
import SignImage from "./assets/sign.svg";
import LoginImage from "./assets/logo.svg";
import Background from "./assets/image.jpg";
import { useState } from "react";
import { Navigate } from 'react-router-dom';

function Signup()
{
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [redirect, setRedirect] = useState(false);
    
    const handleSubmit = async (e) => {
        // e.preventDefault(); // prevent page reload

        try 
        {
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password: pass }),
            });
    
            const result = await response.text();
            if (response.ok) {
                localStorage.setItem("token", result);
                setRedirect(true);
            } else {
                console.log("Error!");
            }

        } catch (error) {

            console.error("Error:", error);
            
        }

      };

    const [choice, setChoice] = useState(true);

    if (redirect)
    {
        return <Navigate to = "/" replcae/>
    }
    
    const shadow = {
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    }

    return (
        <div style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundRepeat: 'repeat'}} className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
            <div style={shadow} className="h-[70vh] w-[70%] p-0 font-['poppins'] font-semibold rounded-2xl flex flex-row bg-white">
                <Form title={(choice) ? "Sign Up" : "Welcome Back!"} signup={{choice, setChoice}} details={{email, setEmail, pass, setPass}} buttonEvent = {handleSubmit}/>
                <Display image={(choice) ? SignImage : LoginImage} signup={choice}/>
            </div>
        </div>
    );
}

export default Signup;