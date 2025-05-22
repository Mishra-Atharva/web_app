import NavigationBar from "../users/components/navigation";
import SideBar from "../users/components/sidebar";

function Subscription() {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavigationBar />

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <div style={{ width: "250px" }}>
          <SideBar currentLink={{ setLink: (link) => console.log(link) }} />
        </div>

        {/* Main Content */}
        <main
          style={{
            flex: 1,
            padding: "40px 30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "26px",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            Choose Your Subscription Plan
          </h1>

          <div
            style={{
              maxWidth: "1000px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            {/* Free Plan */}
            <div
              style={{
                background: "white",
                maxWidth: "400px",
                flex: "1 1 300px",
                borderRadius: "12px",
                padding: "30px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                textAlign: "left",
              }}
            >
              <h2>Free Plan</h2>
              <p
                style={{
                  fontSize: "14px",
                  marginBottom: "15px",
                  color: "#666",
                }}
              >
                Basic access to features with limited support.
              </p>
              <ul
                style={{
                  paddingLeft: "20px",
                  fontSize: "14px",
                  color: "#555",
                }}
              >
                <li>Access to basic tasks</li>
                <li>Limited bookings per month</li>
                <li>Community support</li>
              </ul>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  margin: "20px 0",
                  color: "#222",
                }}
              >
                $0/month
              </div>
              <button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "2px solid black",
                  padding: "10px 20px",
                  fontSize: "15px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                Choose Free
              </button>
            </div>

            {/* Premium Plan */}
            <div
              style={{
                background: "white",
                maxWidth: "400px",
                flex: "1 1 300px",
                borderRadius: "12px",
                padding: "30px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                textAlign: "left",
              }}
            >
              <h2>Premium Plan</h2>
              <p
                style={{
                  fontSize: "14px",
                  marginBottom: "15px",
                  color: "#666",
                }}
              >
                Full access to all features and priority support.
              </p>
              <ul
                style={{
                  paddingLeft: "20px",
                  fontSize: "14px",
                  color: "#555",
                }}
              >
                <li>Unlimited task access</li>
                <li>Unlimited bookings</li>
                <li>Priority customer support</li>
              </ul>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  margin: "20px 0",
                  color: "#222",
                }}
              >
                $9.99/month
              </div>
              <button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "2px solid black",
                  padding: "10px 20px",
                  fontSize: "15px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                Choose Premium
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default Subscription;