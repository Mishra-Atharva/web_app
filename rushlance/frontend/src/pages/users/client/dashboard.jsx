import NavigationBar from "../components/navigation";
import SideBar from "../components/sidebar";
import Content from "../components/content";
import Footer from "../components/footer";
import { useState } from "react";

function DashboardClient()
{
    const [link, setLink] = useState("Dashboard");

    const style = {
        width: "100vw",
        height: "100vh",
        fontFamily: "poppins",
        display: "grid",
        gridTemplateAreas: `
            "header header"
            "menu content"
            "footer footer"
        `,
        gridTemplateRows: "10% 80% 10%",
        gridTemplateColumns: "1fr 5fr",
        backgroundColor: "#f2f2f2",
    };

    return (
        <div style = { style }>
            <NavigationBar/>
            <SideBar currentLink={{link, setLink}}/>
            <Content currentLink={{link, setLink}}/>
            <Footer/>
            
        </div>
    );
}

export default DashboardClient;