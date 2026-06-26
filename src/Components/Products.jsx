import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export function Products() {
  const [products, setProducts] = useState([]);

  // FETCH PRODUCTS FROM SUPABASE
  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: false });

      console.log("Products:", data)
      console.log("Error:",error)

    if (error) {
      console.log("Error fetching products:", error);
    } else {
      setProducts(data);
    }
  };

  // LOAD ON PAGE LOAD
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={styles.section}>
      <h2>Top Deals</h2>

      <div style={styles.grid}>
        {products.map((p) => (
          <div key={p.id} style={styles.card}>

            {/* IMAGE FROM SUPABASE */}
            <img src={p.url} style={styles.img} alt={p.title} />

            {/* TITLE */}
            <h3>{p.title}</h3>

            {/* DESCRIPTION */}
            <p>{p.description}</p>

            {/* PRICE */}
            <p style={{ color: "green", fontWeight: "bold" }}>
              ₹ {p.price}
            </p>

            <button style={styles.btn}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// STYLES (same UI as yours)
const styles = {
  section: { padding: "20px" },

  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "center",
  },

  card: {
    width: "200px",
    background: "white",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },

  img:  {
     width: "78%",
    height: "140px",
    objectFit: "cover",
    borderRadius: "5px",
  
  },

  btn: {
    marginTop: "8px",
    background: "#ff9900",
    border: "none",
    padding: "8px",
    width: "100%",
    borderRadius: "5px",
    cursor: "pointer",
  },
};