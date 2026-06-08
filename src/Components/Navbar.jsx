import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav style={styles.nav}>

      {/* LOGO */}
      <div style={styles.logo}>
         TechNova
      </div>

      {/* LINKS (React Router) */}
      <div style={styles.links}>

        <Link style={styles.link} to="/">Home</Link>

        <Link style={styles.link} to="/products">Products</Link>

        <Link style={styles.link} to="/cart">Cart</Link>

        <Link style={styles.link} to="/account">Account</Link>

       <Link style={styles.link} to="/about">About</Link>

       

      </div>

      {/* SEARCH BAR */}
      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Search products..."
          style={styles.input}
        />
        <button style={styles.button}>Search</button>
      </div>

    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    background: "#131921",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  },

  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#ff9900",
    letterSpacing: "1px"
  },

  links: {
    display: "flex",
    gap: "18px"
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500"
  },

  searchBox: {
    display: "flex",
    gap: "6px"
  },

  input: {
    padding: "6px 10px",
    borderRadius: "4px",
    border: "none",
    outline: "none",
    width: "180px"
  },

  button: {
    padding: "6px 10px",
    border: "none",
    borderRadius: "4px",
    background: "#ff9900",
    fontWeight: "bold",
    cursor: "pointer"
  }
};