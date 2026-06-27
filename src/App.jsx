import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./Components/supabase";

import { Home } from "./Components/Home";
import { Products } from "./Components/Products";
import { About } from "./Components/About";
import { Cart } from "./Components/Cart";
import { Account } from "./Components/Account";
import { AddItems } from "./Components/AddItems";
import { Signup } from "./Components/Signup";
import { Login } from "./Components/Login";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check saved session when app loads
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
      setLoading(false);
    };

    checkSession();

    // Listen for auth state changes (login/logout)
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // Show loading while checking session
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ background: "#eaeded", minHeight: "100vh" }}>
      
      {/* Show Navbar only if logged in */}
      {user && <Navbar />}

      <Routes>

        {/* Default Route */}
        <Route
          path="/"
          element={
            user ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
          }
        />

        {/* Login Route */}
        <Route
          path="/login"
          element={
            user ? <Navigate to="/home" replace /> : <Login />
          }
        />

        {/* Signup Route */}
        <Route
          path="/signup"
          element={
            user ? <Navigate to="/home" replace /> : <Signup />
          }
        />

        {/* Main Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/additems" element={<AddItems />} />

      </Routes>

      {/* Show Footer only if logged in */}
      {user && <Footer />}
    </div>
  );
}

export default App;