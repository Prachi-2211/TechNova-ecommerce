export function Hero() {
  return (
    <div style={styles.hero}>
      <h1>Welcome to TechNova</h1>
      <p>Find the latest gadgets at unbeatable prices</p>
      <button style={styles.btn}>Shop Now</button>
    </div>
  );
}

const styles = {
  hero: {
    height: "380px",
    backgroundImage:
      "url('https://www.shutterstock.com/image-photo/electronic-ecommerce-hero-banner-260nw-2734699939.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textShadow: "2px 2px 10px black",
    margin: "10px",
    borderRadius: "10px"
  },

  btn: {
    marginTop: "10px",
    padding: "12px 20px",
    background: "#ff9900",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};