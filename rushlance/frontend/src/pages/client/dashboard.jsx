import NavigationBar from "./components/navigation";
import SideBar from "./components/sidebar";
import Content from "./components/content";
import Footer from "./components/footer";

function DashboardClient()
{
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
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "1fr 6fr",
        gap: "10px"
    };

    return (
        <div style = { style }>
            <NavigationBar/>
            <SideBar/>
            <Content/>
            <Footer/>
            
        </div>
    );
}

export default DashboardClient;