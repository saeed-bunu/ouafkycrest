import { Link, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <main className="not-found">
              <span className="eyebrow">404 · Page not found</span>
              <h1>This address doesn’t lead anywhere.</h1>
              <p>Let’s get you back to finding your next place in Abuja.</p>
              <Link to="/properties" className="btn btn-primary">
                Explore properties <span aria-hidden="true">↗</span>
              </Link>
            </main>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;