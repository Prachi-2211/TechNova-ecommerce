import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "./supabase";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    if (data.user) {
      navigate("/home");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Sign in to continue shopping</p>

        <input
          style={styles.input}
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p style={styles.error}>{error}</p>}

        <button style={styles.button} onClick={submit}>
          Sign In
        </button>

        <p style={styles.switch}>
          New user?{" "}
          <Link to="/signup" style={styles.link}>
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)"
  },

  card: {
    background: "#ffffff",
    padding: "45px",
    width: "360px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
    border: "1px solid #eee"
  },

  title: {
    marginBottom: "8px",
    fontSize: "24px",
    fontWeight: "700",
    color: "#000"
  },

  subtitle: {
    color: "#000",
    opacity: 0.6,
    marginBottom: "25px",
    fontSize: "14px"
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "14px",
    color: "#000",
    outline: "none",
    background: "#fff"
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  switch: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#000"
  },

  link: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "bold"
  },

  error: {
    color: "red",
    marginBottom: "10px",
    fontSize: "13px"
  }
};