import NavigationBar from "../users/components/navigation";
import SideBar from "../users/components/sidebar";

function Home()
{
    return (
        <div>
            <h1>Home Page</h1>
            <NavigationBar />
             <div style={{ width: "250px" }}>
          <SideBar currentLink={{ setLink: (link) => console.log(link) }} />
        </div>
        </div>
    );
}

export default Home;