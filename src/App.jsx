import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../src/components/header/Header";
import Home from "../src/page/home/Home";
import About from "../src/page/about/About";
import Contact from "../src/page/contact/Contact";
import Services from "../src/page/services/Services";
import Footer from "./components/footer/Footer";
import FAQ from "./page/FAQ/FAQ";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
