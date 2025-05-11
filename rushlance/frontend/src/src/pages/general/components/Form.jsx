import Button from "./Button"
import email_icon from "../assets/email.svg"
import lock_icon from "../assets/lock.svg"

function Form({onLogin})
{
    const style = {
        width: "60%",
        height: "100%",
    };
    
    const input_style = {
        width: "350px",
        height: "50px",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
    };

    return (
        <div style={style} className="rounded-lg flex flex-col justify-center items-center p-10 gap-5">
            <h1 className="text-4xl">Welcome Back!</h1>
            <br/>
            <br/>
            <div className="flex flex-col">

                <label for="email">Email address: </label>
                <br/>
                <input type="text" name="email" id="email" placeholder="johnsmith@gmail.com" style={input_style} className="px-4 py-2 rounded-lg font-normal outline-0"/>

                <br/>

                <label for="email">Password: </label>
                <br/>
                <input type="password" name="pass" id="pass" placeholder="password" style={input_style} className="px-4 py-2 rounded-lg font-normal outline-0"/>

                <br/>
                <a href="/" className="font-normal text-sm w-fit">Forgot Password?</a>
                <a href="#/signup" className="font-normal text-sm w-fit">Register</a>
                <br/>

            </div>
            <Button text="Sign in" onclick={onLogin} width="50" height="50"/>
        </div>
    );
}

export default Form;