import {Navbar} from "./Components/Navbar";
import {Footer} from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import {Home} from "./Components/Home";
import {Products} from "./Components/Products";
import {About} from "./Components/About";
import {Cart} from "./Components/Cart";
import {Account} from "./Components/Account";
import { AddItems } from "./Components/AddItems";


function App() {
  return (
    <div style={{ background: "#eaeded", minHeight: "100vh" }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/additems" element={<AddItems />} />
        
       
        

      </Routes>

      <Footer />
    </div>
  );
}

export default App;