import { useEffect } from "react";
import { Hero } from "./Hero";
import { Categories } from "./Categories";

export function Home() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div style={styles.page}>

      {/* HERO */}
      <Hero />

      {/* OFFER STRIP (Amazon-style) */}
      <div style={styles.strip}>
        🔥 Tech Fest Sale Live Now | Flat 50% Off on Electronics | Free Delivery Above ₹999
      </div>

      {/* WELCOME SECTION */}
      <div style={styles.welcome}>
        <h2 style={{color: "#131921"}}>Welcome to TechNova</h2>
        <p>Your one-stop destination for laptops, mobiles, gadgets & accessories</p>
      </div>

      {/* CATEGORIES */}
      <Categories />

      {/* PROMO SECTION */}
      <div style={styles.promo}>
        <div>
          <h2>🚀 Upgrade Your Tech Lifestyle</h2>
          <p>Discover the latest innovations at unbeatable prices</p>
        </div>

        <button style={styles.btn}>Explore Now</button>
      </div>

      {/* HIGHLIGHT BANNER */}
      <div style={styles.banner}>
        <h2>⚡ Fast Delivery • Best Prices • Trusted Store</h2>
      </div>

    </div>
  );
}

const styles = {
  page: {
    background: "#f3f4f6",
    paddingBottom: "40px",
    fontFamily: "Arial",
    color: "#111827"
  },

  strip: {
    margin: "15px",
    padding: "12px",
    background: "#131921",
    color: "#ffffff",
    textAlign: "center",
    borderRadius: "8px",
    fontWeight: "bold",
    letterSpacing: "0.5px"
  },

  welcome: {
    margin: "15px",
    padding: "20px",
    background: "white",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    color: "#111",
  },

  promo: {
    margin: "20px",
    padding: "30px",
    background: "linear-gradient(to right, #0f172a, #1e3a8a)",
    color: "white",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  btn: {
    padding: "10px 18px",
    background: "#ff9900",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  banner: {
    margin: "20px",
    padding: "20px",
    textAlign: "center",
    background: "#ff9900",
    color: "#131921",
    borderRadius: "12px",
    fontWeight: "bold"
  }
};