/*  src/pages/users/components/content.jsx  */

import { useState } from "react";

/* ─── shared */
import History from "../components/history.jsx";

/* ─── CLIENT components */
import ClientHome      from "../client/components/home.jsx";
import PaymentMethod   from "../client/components/payment.jsx";
import ClientSettings  from "../client/components/settings.jsx";
import ClientHelp      from "../client/components/help.jsx";
import ClientChat      from "../client/components/chat.jsx";
import AccountDetails  from "../client/components/account_details.jsx";

/* ─── FREELANCER components */
import FreelancerProfile   from "../freelancer/components/profile.jsx";
import FreelancerServices  from "../freelancer/components/services.jsx";
import FreelancerProjects  from "../freelancer/components/projects.jsx";
import FreelancerReviews   from "../freelancer/components/reviews.jsx";
import FreelancerSettings  from "../freelancer/components/settings.jsx";
import FreelancerHome      from "../freelancer/components/home.jsx";

/* ─── ADMIN widgets */
import StatCard            from "../admin/components/statcard.jsx";
import DemographicsPanel   from "../admin/components/demographicspanel.jsx";
import ReportsList         from "../admin/components/reportslist.jsx";
import JobListings         from "../admin/components/joblistings.jsx";
import Chat                from "../admin/components/chat.jsx";
import Bookings            from "../admin/components/bookings.jsx";
import AdminSettings       from "../admin/components/settings.jsx";
import Clients             from "../admin/components/clients.jsx";
import Freelancers         from "../admin/components/freelancers.jsx";
import AdminHelp           from "../admin/components/help.jsx";

function Content({ currentLink, userType = "client" }) {
  const areaStyle = { gridArea: "content" };

  /* ─────────── CLIENT  */
  if (userType === "client") {
    return (
      <div style={areaStyle} className="rounded-2xl m-2 p-6 bg-white">
        {currentLink.link === "Dashboard" && <ClientHome />}
        {currentLink.link === "Account"   && <AccountDetails />}
        {currentLink.link === "Payment"   && <PaymentMethod />}
        {currentLink.link === "Bookings"  && <History />}
        {currentLink.link === "Chat"      && <ClientChat />}
        {currentLink.link === "Settings"  && <ClientSettings />}
        {currentLink.link === "Help"      && <ClientHelp />}
      </div>
    );
  }

  /* ─────────── FREELANCER  */
  const [profile, setProfile] = useState({
    fullName: "Jane Doe",
    email:    "jane@example.com",
    avatar:   "https://placehold.co/96x96?text=JD",
    bio:      "Full-stack developer with a love for clean code.",
    skills:   ["JavaScript", "React", "Node.js"],
    jobsCompleted: 27,
    avgRating:     4.8,
    yearsExp:      5
  });

  if (userType === "freelancer") {
    return (
      <div style={areaStyle} className="rounded-2xl m-2 p-6 bg-white">
        {currentLink.link === "Dashboard" && (
          <FreelancerHome
            profile={profile}
            setCurrentLink={currentLink.setLink}
          />
        )}
        {currentLink.link === "Profile"  && (
          <FreelancerProfile profile={profile} setProfile={setProfile} />
        )}
        {currentLink.link === "Services" && <FreelancerServices />}
        {currentLink.link === "Projects" && <FreelancerProjects />}
        {currentLink.link === "Reviews"  && <FreelancerReviews />}
        {currentLink.link === "Settings" && (
          <FreelancerSettings profile={profile} setProfile={setProfile} />
        )}
      </div>
    );
  }

  /* ─────────── ADMIN  */
  if (userType === "admin") {
    return (
      <div style={areaStyle} className="rounded-2xl m-2 p-6 grid gap-6 bg-white">
        {currentLink.link === "Dashboard" && (
          <div className="grid md:grid-cols-3 gap-6">
            <StatCard label="Total Users" value="345 ,678" />
            <StatCard label="Performance" value="97 %" />
            <StatCard label="Status"      value="All systems ✔︎" />
            <StatCard label="Error Rate"  value="0.2 %" />
            <StatCard label="Time"        value="UTC +0" />
            <StatCard label="MAJER"       value="—" />
            <StatCard label="All"         value="+YN" />
            <StatCard label="Month"       value="—" />
            <DemographicsPanel male={55} female={45} other={0} />
          </div>
        )}

        {currentLink.link === "Reports"      && <ReportsList />}
        {currentLink.link === "JobListings"  && <JobListings />}
        {currentLink.link === "Chat"         && <Chat />}
        {currentLink.link === "Bookings"     && <Bookings />}
        {currentLink.link === "Settings"     && <AdminSettings />}
        {currentLink.link === "Clients"      && <Clients />}
        {currentLink.link === "Freelancers"  && <Freelancers />}
        {currentLink.link === "Help"         && <AdminHelp />}
      </div>
    );
  }

  /* ─────────── FALLBACK  */
  return (
    <div style={areaStyle} className="rounded-2xl m-2 p-6 bg-white">
      <h1>Page Not Found</h1>
    </div>
  );
}

export default Content;
