import { useEffect } from "react";

export function Account() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div style={styles.header}>
        <h1>My Account</h1>
        <p>Manage your profile, orders, and settings</p>
      </div>

      {/* PROFILE SECTION */}
      <div style={styles.profileBox}>
        <div style={styles.avatar}>
          👤
        </div>

        <div>
          <h2>Welcome, User</h2>
          <p style={{ color: "#555" }}>user123@technova.com</p>
          <p style={{ color: "#777" }}>Member since 2026</p>
        </div>
      </div>

      {/* DASHBOARD CARDS */}
      <div style={styles.grid}>

        <div style={styles.card}>
          <h3>📦 My Orders</h3>
          <p>View your recent purchases and track orders</p>
          <button style={styles.btn}>View Orders</button>
        </div>

        <div style={styles.card}>
          <h3>❤️ Wishlist</h3>
          <p>Products you saved for later</p>
          <button style={styles.btn}>View Wishlist</button>
        </div>

        <div style={styles.card}>
          <h3>💳 Payments</h3>
          <p>Manage saved cards and payment methods</p>
          <button style={styles.btn}>Manage</button>
        </div>

        <div style={styles.card}>
          <h3>⚙️ Settings</h3>
          <p>Update profile, password, and preferences</p>
          <button style={styles.btn}>Open Settings</button>
        </div>

      </div>

      {/* ADDRESS SECTION */}
      <div style={styles.addressBox}>
        <h2> Delivery Address</h2>
        <p>
          Mumbai, Maharashtra, India <br />
          Pincode: 400001
        </p>
        <button style={styles.editBtn}>Edit Address</button>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        <p>Secure account powered by TechNova.</p>
      </div>

    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial",
    background: "#ffffff",
    minHeight: "100vh",
    padding: "20px",
    color: "#111"
  },

  header: {
    textAlign: "center",
    padding: "30px",
    background: "linear-gradient(to right, #232f3e, #37475a)",
    color: "white",
    borderRadius: "10px",
    marginBottom: "20px"
  },

  profileBox: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    background: "#f9fafb",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    marginBottom: "20px"
  },

  avatar: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "#232f3e",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px"
  },

  card: {
    background: "#f9fafb",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    textAlign: "left"
  },

  btn: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    background: "#ff9900",
    color: "black",
    cursor: "pointer",
    fontWeight: "bold"
  },

  addressBox: {
    marginTop: "25px",
    background: "#f9fafb",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
  },

  editBtn: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    background: "#232f3e",
    color: "white",
    cursor: "pointer"
  },

  footer: {
    textAlign: "center",
    marginTop: "30px",
    color: "#555"
  }
};