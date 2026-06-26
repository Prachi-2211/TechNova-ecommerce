import { useEffect } from "react";
export function Cart() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const orders = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 199999,
      qty: 1,
      img: "data:image/jpeg;base64,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"
    },
    {
      id: 2,
      name: "Iphone 15",
      price: 79999,
      qty: 1,
      img: "data:image/jpeg;base64,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"
    },
    {
      id: 3,
      name: "Headphone",
      price: 19999,
      qty: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpnUFqHjS41Fz1zaYets2TTZu_DlZmbmsSGQ&s"
    },
    {
      id: 4,
      name: "Tablet",
      price: 129999,
      qty: 1,  
      img: "https://p3-ofp.static.pub//fes/cms/2024/11/26/q5rps6mpnysa0zqwdbd36jneww1xxr703791.png"
    },
    {
      id: 5,     
      name: "SmartWatch",
      price: 19999,
      qty: 1, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5Le3wtOMI1aZl32HRbRcw0ff4DHS4YyYYA&s"
    }
  ];

  const total = orders.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={styles.page}>

      <h1 style={styles.title}>My Order</h1>
      <div style={styles.container}>

        {/* LEFT: ITEMS */}
        <div style={styles.left}>
          {orders.map((item) => (
            <div key={item.id} style={styles.card}>
              <img src={item.img} style={styles.img} />

              <div style={styles.info}>
                <h3>{item.name}</h3>
                <p>Qty: {item.qty}</p>
                <p style={{ color: "green", fontWeight: "bold" }}>
                  ₹{item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: SUMMARY */}
        <div style={styles.right}>
  <h2 style={{ color: "#111" }}>Price Summary</h2>
  <p>Total Items: {orders.length}</p>
  <h3>Total: ₹{total}</h3>

  <button style={styles.btn}>Proceed to Buy</button>

  <hr />

  <h3>Delivery Address</h3>
  <p>Mumbai, Maharashtra</p>

  <hr />

  <h3>Available Offers</h3>
  <ul>
    <li>10% Instant Discount</li>
    <li>Free Delivery</li>
    <li>Cashback up to ₹500</li>
  </ul>
  <hr />
   <hr />

<h3>Payment Method</h3>

<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
  <label>
    <input type="radio" name="payment" /> UPI
  </label>

  <label>
    <input type="radio" name="payment" /> Credit Card
  </label>

  <label>
    <input type="radio" name="payment" /> Debit Card
  </label>

  <label>
    <input type="radio" name="payment" /> Net Banking
  </label>

  <label>
    <input type="radio" name="payment" /> Cash on Delivery
  </label>
</div>

  
</div>
      </div>
    </div>
  )
};

  

const styles = {
  page: {
    background: "#f3f4f6",
    color: "#000",
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "Arial"
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#000"
  },

  container: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap"
  },

  left: {
    flex: 2
  },

  right: {
    flex: 1,
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    height: "fit-content",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  },

  card: {
    display: "flex",
    background: "white",
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "12px",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
  },

  img: {
    width: "120px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "10px"
  },

  info: {
    marginLeft: "15px"
  },

  btn: {
    marginTop: "15px",
    padding: "10px",
    width: "100%",
    background: "#ff9900",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer"
  }
}