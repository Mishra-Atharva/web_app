import Form from "./components/signup_components/Form";
import Display from "./components/signup_components/Display";
import SignImage from "./assets/sign.svg";
import LoginImage from "./assets/logo.svg";
import { useState } from "react";
import { Navigate } from 'react-router-dom';

// Functions from utils
import { signup } from "./utils/signup.js";
import { login } from "./utils/login.js";

export default function Signup()
{
    // Variables
    const [choice, setChoice] = useState("signup");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [number, setNumber] = useState("");
    const [dob, setDOB] = useState("");
    const [userType, setType] = useState("");
    const [redirect, setRedirect] = useState(false);
    // Signup
    const register = () => {
        if (signup(name, gender, email, pass, number, dob, userType)) 
        {
            setRedirect(true);
        }
    };

    // Login
    const access = () => {
        if (login(email, pass))
        {
            setRedirect(true);
        } 
    }

    // CSS
    const shadow = {
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    }

    // Redirect
    if (redirect)
    {
        return <Navigate to = "/" replcae/>;
    }

    return (
        <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
            <div style={ shadow } className="h-[70vh] w-[70%] p-0 font-['poppins'] font-semibold rounded-2xl flex flex-row bg-white">
                <Form title={(choice == "signup") ? "Sign Up" : "Welcome Back!"} signup={{choice, setChoice}} details = { { setName, setGender, setEmail, setPass, setNumber, setDOB, setType } } buttonEvent = {{register, access}}/>
                <Display image={(choice == "signup") ? SignImage : LoginImage} signup={choice}/>
            </div>
        </div>
    );
}