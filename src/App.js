import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Registration from './components/Registration';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout"

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <Hero />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/services" element={<Services />} />
    //     <Route path="/tours" element={<Tours />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="*" element={<NotFound />} />
    //     <Route path="/register" element={<Registration/>} />

    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="tours" element={<Tours />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="register" element={<Registration />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
