import NavigationBar from "../components/navigation";
import SideBar from "../components/sidebar";
import Content from "../components/content";
import Footer from "../components/footer";
import { useState } from "react";

// Default profile object for freelancer dashboard fallback
const defaultFreelancerProfile = {
    fullName: "Jane Doe",
    avatar: "https://placehold.co/96x96?text=JD",
    bio: "Creative web designer & developer with a passion for clean UI and great UX.",
    email: "jane@example.com",
    skills: ["React", "Figma", "UX", "JavaScript"],
    jobsCompleted: 27,
    avgRating: 4.8,
    yearsExp: 5,
    recentProjects: [
        { id: 1, title: "Landing Page for Startup", status: "Completed" },
        { id: 2, title: "E-commerce Redesign", status: "Completed" }
    ],
    topReview: {
        client: "John Smith",
        rating: 5,
        text: "Absolutely fantastic work! Delivered ahead of schedule and exceeded expectations."
    }
};

function DashboardAdmin() {
    const [link, setLink] = useState("Dashboard");
    // If you ever need to render the freelancer dashboard, pass this as the profile prop
    // <FreelancerDashboard profile={defaultFreelancerProfile} ... />

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
        <div style={style}>
            <NavigationBar />
            <SideBar currentLink={{ link, setLink }} userType="admin" />
            <Content currentLink={{ link, setLink }} userType="admin" defaultFreelancerProfile={defaultFreelancerProfile} />
            <Footer />
        </div>
    );
}

export default DashboardAdmin;
