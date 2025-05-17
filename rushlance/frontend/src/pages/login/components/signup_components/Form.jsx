import { button, div } from "motion/react-client";
import { motion } from "framer-motion";
import { useRef } from "react";

import Button from "./Button";

function LeftView({title, signup, details, buttonEvent})
{
    const buttonRef = useRef();

    const submit = (event) => {
        if (event.key == 'Enter') 
        {
            if (!signup.choice)
            {
                if (details.email && details.pass)
                {
                    buttonRef.current.click();
                }
                else 
                {
                    alert("Feild not filled out!");
                }
            }
        }
    }

    const changeType = () => {
        if (signup.choice)
        {
            signup.setChoice(false);
        }
        else 
        {
            signup.setChoice(true);
        }
    }
    
    const input_style = {
        width: "300px",
        height: "50px",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        backgroundColor: "white",
        borderRadius: "10px",
        fontWeight: 300
    };

    const shadow = {
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
    };

    return (
        <motion.div initial={{backgroundColor: "#B2F7EF", x:0}} animate={{backgroundColor: (!signup.choice) ? "white" : "#B2F7EF" , x: (!signup.choice) ? "67%" : "0%"}} transition={{duration: 0.8}} className="z-20 w-[60%] h-[100%] p-0 m-0 bg-[#B2F7EF] rounded-2xl  flex flex-col justify-center items-center">
            <br />
            <br />
            <h1 className="text-3xl">{title}</h1>
            <br />
            {signup.choice && (
                <div className="w-[80%] h-[80%] grid grid-cols-2 gap-6">

                    {/* Name */}
                    <div>
                        {/* <label htmlFor="fname" className="px-1">First name:</label> */}
                        <br />
                        <input style={input_style}  className="outline-0 px-4 py-2" type="text" name="fname" placeholder="First name"/>
                    </div>

                    <div>
                        {/* <label htmlFor="lname" className="px-1">Last name:</label> */}
                        <br />
                        <input style={input_style}  className="outline-0 px-4 py-2" type="text" name="lname" placeholder="Last name"/>
                    </div>

                    {/* Credintatils */}
                    <div>
                        {/* <label htmlFor="email" className="px-1">Email address:</label> */}
                        <br />
                        <input style={input_style} className="outline-0 px-4 py-2" type="text" name="email" placeholder="Email address" />
                    </div>

                    <div>
                        {/* <label htmlFor="pass" className="px-1">Password:</label> */}
                        <br />
                        <input style={input_style} className="outline-0 px-4 py-2" type="password" name="pass" placeholder="password"/>
                    </div>

                    <div>
                        {/* <label htmlFor="pass_con" className="px-1">Confirm Password:</label> */}
                        <br />
                        <input style={input_style} className="outline-0 px-4 py-2" type="password" name="pass_con" placeholder="confirm password"/>
                    </div>

                    {/* Details  */}
                    <div>
                        {/* <label htmlFor="dob" className="px-1">Birth Date:</label> */}
                        <br />
                        <input style={input_style} className="cursor-pointer outline-0 px-4 py-2" type="date" name="dob"/>
                    </div>
                    
                    <div>
                        {/* <label htmlFor="phone" className="px-1">Phone number:</label> */}
                        <br />
                        <input style={input_style} className="outline-0 px-4 py-2" type="text" name="phone" placeholder="Phone number" />
                    </div>

                    <div>
                        {/* <label htmlFor="type" className="px-1">Pick user</label> */}
                        <br />
                        <select style={input_style} className="outline-0 px-4 py-2 cursor-pointer" name="type">
                            <option value="" disabled selected>Select</option>
                            <option value="Client">Client</option>
                            <option value="Freelancer">Freelancer</option>
                        </select>
                    </div>
                    <div className="w-[78%]">
                        <br />
                        <a className="text-sm float-left cursor-pointer" onClick={(e) => {e.preventDefault();changeType();}}>Already have an account?</a>
                    </div>
                </div>
            )}


            {!signup.choice && (
                <div className="rounded-lg flex flex-col justify-center items-center p-10 gap-5">
                    <div className="flex flex-col">
                        <label for="email">Email address: </label>
                        <br/>
                        <input type="text" name="email" id="email" placeholder="johnsmith@gmail.com" onChange={(e) => details.setEmail(e.target.value)} required style={shadow} className="w-[350px] h-[50px] bg-white rounded-xl px-4 py-2 font-normal outline-0"/>

                        <br/>

                        <label for="email">Password: </label>
                        <br/>
                        <input onKeyDown={submit} type="password" name="pass" id="pass" placeholder="password" onChange={(e) => details.setPass(e.target.value)} required  style={shadow} className="w-[350px] h-[50px] bg-white px-4 py-2 rounded-xl font-normal outline-0"/>

                        <br/>
                        <a href="/" className="font-semibold text-sm w-fit cursor-pointer">Forgot Password?</a>
                        <a  onClick={(e) => {e.preventDefault();changeType();}} className="font-semibold text-sm w-fit cursor-pointer">Register</a>
                        <br/>
                    </div>
                </div>
            )}

            <br />
            <Button ref={buttonRef} onclick = {buttonEvent} text={(signup.choice) ? "Signup" : "Login"}/>
            <br />
            <br />
        </motion.div>
    );
}

export default LeftView;