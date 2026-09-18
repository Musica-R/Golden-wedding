import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import FloatingContactCTA from "./components/FloatingContactCTA";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Collections from "./pages/Collections";
import Portfolio from "./pages/Portfolio";
import WeddingStory from "./pages/WeddingStory";
import Contact from "./pages/Contact";

const SPLASH_SESSION_KEY = "gw-splash-seen";

export default function App() {
  // The splash only plays once per browser session — repeat visits
  // within the same session (including route changes) skip it, so
  // it never annoys someone who's already browsing the site.
  const [loading, setLoading] = useState(
    () => typeof window !== "undefined" && !window.sessionStorage.getItem(SPLASH_SESSION_KEY)
  );
  const location = useLocation();

  useEffect(() => {
    if (!loading) return undefined;
    const timer = setTimeout(() => {
      setLoading(false);
      window.sessionStorage.setItem(SPLASH_SESSION_KEY, "1");
    }, 2200);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {loading && <Preloader />}
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<WeddingStory />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <FloatingContactCTA />
      <Footer />
    </>
  );
}
