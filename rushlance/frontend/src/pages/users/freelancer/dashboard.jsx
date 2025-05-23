import { useState }      from "react";
import NavigationBar     from "../components/navigation.jsx";
import SideBar           from "../components/sidebar.jsx";
import Content           from "../components/content.jsx";

export default function DashboardFreelancer() {
  const [link, setLink] = useState("Dashboard");
  const currentLink = { link, setLink };

  const grid = {
    display: "grid",
    height: "100vh",
    gridTemplateRows: "70px 1fr",
    gridTemplateColumns: "auto 1fr",
    gridTemplateAreas: `"header header"
                        "menu   content"`
  };

  return (
    <div style={grid}>
      <NavigationBar />
      <SideBar currentLink={currentLink} userType="freelancer" />
      <Content currentLink={currentLink} userType="freelancer" />
    </div>
  );
}
