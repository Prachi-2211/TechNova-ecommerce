export function About() {
  return (
    <div style={styles.page}>
      {/* HERO SECTION */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>About TechNova</h1>
        <p>
          Your trusted destination for premium electronics, gadgets, and
          accessories at the best prices.
        </p>
      </div>

      {/* MISSION */}
      <div style={styles.section}>
        <h2 style={{ color: "#111" }}>Our Mission</h2>
        <p>
          We aim to make technology affordable and accessible for everyone.
          TechStore delivers high-quality products with fast shipping and
          reliable customer support.
        </p>
      </div>

      {/* FEATURES */}
      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>🚚 Fast Delivery</h3>
          <p>Get your orders delivered within 2–5 days across India.</p>
        </div>

        <div style={styles.card}>
          <h3>🔒 Secure Payments</h3>
          <p>UPI, Cards, Net Banking & Cash on Delivery available.</p>
        </div>

        <div style={styles.card}>
          <h3>⭐ Quality Products</h3>
          <p>Only 100% original and verified products are listed.</p>
        </div>

        <div style={styles.card}>
          <h3>💬 24/7 Support</h3>
          <p>Our customer care team is always ready to help you.</p>
        </div>
      </div>

      {/* CUSTOMER CARE */}
      <div style={styles.sectionBox}>
        <h2>Customer Care</h2>
        <p>📞 +91 99999 88888</p>
        <p>📧 support@technova.com</p>
        <p>🕒 Available 24/7</p>
      </div>

      {/* WHY CHOOSE US */}
      <div style={styles.section}>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Trusted by 10,000+ customers</li>
          <li>✔ Easy return & refund policy</li>
          <li>✔ Best price guarantee</li>
          <li>✔ Secure & fast checkout</li>
        </ul>
      </div>

      {/* FOOTER NOTE */}
      <div style={styles.footer}>
        <p>© 2026 TechNova. All rights reserved.</p>
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */
const styles = {
  page: {
    fontFamily: "Arial",
    padding: "30px",
    background: "#f3f4f6",
    color: "#111"
  },

  hero: {
    textAlign: "center",
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    marginBottom: "20px"
  },

  section: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px",
    marginBottom: "20px"
  },

  card: {
    background: "white",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
  },

  sectionBox: {
    background: "#111",
    color: "white",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px"
  },

  footer: {
    textAlign: "center",
    marginTop: "20px",
    color: "#555"
  },
  heroTitle: {
    color: "#000"
  }
};        