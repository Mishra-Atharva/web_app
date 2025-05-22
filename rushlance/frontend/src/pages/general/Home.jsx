import NavigationBar from "../users/components/navigation";
//hh
function Home() {
  const services = [
    {
      title: "Cleaning",
      image: "https://placehold.co/400x300?text=Cleaning&font=poppins",
      price: "From $40 - $70",
    },
    {
      title: "Floor Tiling",
      image: "https://placehold.co/400x300?text=Floor+Tiles&font=poppins",
      price: "From $300 - $600",
    },
    {
      title: "Builders",
      image: "https://placehold.co/400x300?text=Builders&font=poppins",
      price: "From $1000 - $5000",
    },
  ];

  const pastServices = [
    {
      title: "Lawn Mowing",
      image: "https://placehold.co/400x300?text=LawnMowing&font=poppins",
      price: "From $25 - $45",
    },
    {
      title: "Painting",
      image: "https://placehold.co/400x300?text=Painting&font=poppins",
      price: "From $200 - $400",
    },
  ];

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <NavigationBar />

      <div style={{ display: "flex" }}>
        
        <main style={{ flex: 1, padding: "40px" }}>
          {/* Search Bar */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
            <input
              type="text"
              placeholder="Search services..."
              style={{
                width: "60%",
                padding: "12px 20px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
          </div>

          {/* Featured Services */}
          <section>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Featured Services</h2>
            <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
              {services.map((service, index) => (
                <div key={index} style={{
                  background: "white",
                  width: "250px",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  textAlign: "center"
                }}>
                  <img src={service.image} alt={service.title} style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
                  <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>{service.title}</h3>
                  <p style={{ color: "#555" }}>{service.price}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Past Services */}
          <section style={{ marginTop: "50px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Past Services</h2>
            <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
              {pastServices.map((service, index) => (
                <div key={index} style={{
                  background: "white",
                  width: "250px",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  textAlign: "center"
                }}>
                  <img src={service.image} alt={service.title} style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
                  <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>{service.title}</h3>
                  <p style={{ color: "#555" }}>{service.price}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;