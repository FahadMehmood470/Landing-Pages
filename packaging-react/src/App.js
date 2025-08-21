import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <div className="pt-20"> {/* push content below fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
