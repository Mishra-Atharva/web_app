import Container from "./components/Container"
import React, {useState} from "react";

function Login()
{

    const handleLogin = () => {
        alert("checking");
    }

    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh"
    };

    return (
        <div style={style} className="gap-10 p-5">
            <Container onLogin={handleLogin}/>
        </div>
    );
}

export default Login;