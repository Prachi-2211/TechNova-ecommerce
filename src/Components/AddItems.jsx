import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export function AddItems() {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data } = await supabase.from("products").select("*");
    setProducts(data || []);
  }

  async function addProduct() {
    await supabase.from("products").insert([
      { title, description, price, url },
    ]);

    fetchProducts();
    clearFields();
  }

  function editProduct(product) {
    setTitle(product.title);
    setDescription(product.description);
    setPrice(product.price);
    setUrl(product.url);
    setEditId(product.id);
  }

  async function updateProduct() {
    await supabase
      .from("products")
      .update({ title, description, price, url })
      .eq("id", editId);

    fetchProducts();
    clearFields();
    setEditId(null);
  }

  async function deleteProduct(id) {
    await supabase.from("products").delete().eq("id", id);
    fetchProducts();
  }

  function clearFields() {
    setTitle("");
    setDescription("");
    setPrice("");
    setUrl("");
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h1 style={styles.heading}>Product Manager</h1>
        <p style={styles.subHeading}>Add, edit and manage your items</p>

        {/* FORM CARD */}
        <div style={styles.formCard}>
          <input
            style={styles.input}
            type="text"
            placeholder="Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            style={styles.input}
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            style={styles.input}
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            style={styles.input}
            type="text"
            placeholder="Image URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          {editId ? (
            <button style={styles.updateBtn} onClick={updateProduct}>
              Update Product
            </button>
          ) : (
            <button style={styles.addBtn} onClick={addProduct}>
              Add Product
            </button>
          )}
        </div>

        {/* PRODUCT LIST */}
        <div style={styles.grid}>
          {products.map((product) => (
            <div key={product.id} style={styles.card}>
              <img
                src={product.url}
                alt={product.title}
                style={styles.image}
              />

              <h3 style={styles.title}>{product.title}</h3>
              <p style={styles.desc}>{product.description}</p>

              <p style={styles.price}>₹ {product.price}</p>

              <div style={styles.btnRow}>
                <button
                  style={styles.editBtn}
                  onClick={() => editProduct(product)}
                >
                  Edit
                </button>

                <button
                  style={styles.deleteBtn}
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const styles = {
  page: {
    background: "#f4f6f8",
    minHeight: "100vh",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },

  heading: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "5px",
    color: "#111",
  },

  subHeading: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#666",
  },

  formCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    marginBottom: "30px",
    display: "grid",
    gap: "12px",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    outline: "none",
  },

  addBtn: {
    padding: "12px",
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  updateBtn: {
    padding: "12px",
    background: "#0a66c2",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    textAlign: "center",
  },

  image: {
   image: {
  width: "100%",
  height: "120px",
  objectFit: "contain",
  background: "#f9f9f9",
  padding: "10px",
  borderRadius: "10px",
  marginBottom: "10px",
   }
  },

  title: {
    fontSize: "18px",
    margin: "8px 0",
  },

  desc: {
    fontSize: "13px",
    color: "#666",
  },

  price: {
    fontWeight: "bold",
    margin: "10px 0",
  },

  btnRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },

  editBtn: {
    flex: 1,
    padding: "8px",
    border: "none",
    borderRadius: "6px",
    background: "#ffb020",
    cursor: "pointer",
  },

  deleteBtn: {
    flex: 1,
    padding: "8px",
    border: "none",
    borderRadius: "6px",
    background: "#ff4d4f",
    color: "#fff",
    cursor: "pointer",
  },
};